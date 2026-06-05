"""
Universal Spider — full-site RAG ingest mode.

Crawl strategy:
  1. Discovery phase (no browser):
       - GET /robots.txt    → extract `Sitemap:` URLs
       - GET /sitemap.xml   (fallback default location)
  2. For each sitemap (or sitemap index, recursively), yield Playwright
     requests for same-host URLs up to MAX_PAGES.
  3. Always also yield the seed URL as a Playwright request.
  4. In `parse`, if discovery yielded < MAX_PAGES, follow same-host links
     (BFS) until we hit the cap.

Per-page output:
    {url, title, description, depth, discovered_via, chunks: [...]}

Aggregated output written to output/site_architecture.json by `closed()`.
"""
from __future__ import annotations

import json
import logging
import pathlib
import time
from typing import Any, AsyncGenerator
from urllib.parse import urljoin, urlparse

import scrapy
from scrapy.http import HtmlResponse, Response

from universal_crawler.chunker import chunk_text
from universal_crawler.text_extractor import extract_clean_text, extract_meta

logger = logging.getLogger(__name__)

MAX_PAGES: int = 50
MAX_DEPTH_BFS: int = 4
SKIPPED_EXTENSIONS: tuple[str, ...] = (
    ".pdf", ".zip", ".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp",
    ".mp4", ".mp3", ".css", ".js", ".ico", ".xml", ".dmg", ".exe",
)


class UniversalSpider(scrapy.Spider):
    name: str = "universal"
    custom_settings: dict[str, Any] = {
        "PLAYWRIGHT_DEFAULT_NAVIGATION_TIMEOUT": 30_000,
    }

    def __init__(self, url: str = "https://example.com", *args: Any, **kwargs: Any) -> None:
        super().__init__(*args, **kwargs)
        self.target_url: str = url
        self.seed_host: str = urlparse(url).netloc
        self.pages: list[dict[str, Any]] = []
        self.failures: list[dict[str, str]] = []
        self._queued_urls: set[str] = set()
        self._sitemap_found: bool = False
        self._started_at: float = time.time()

    # ------------------------------------------------------------------
    # Discovery
    # ------------------------------------------------------------------
    async def start(self) -> AsyncGenerator[scrapy.Request, None]:
        self.logger.info("Starting ingest crawl: %s (host=%s)",
                         self.target_url, self.seed_host)
        yield scrapy.Request(
            url=urljoin(self.target_url, "/robots.txt"),
            callback=self._parse_robots,
            errback=self._discovery_failed,
            dont_filter=True,
        )
        yield scrapy.Request(
            url=urljoin(self.target_url, "/sitemap.xml"),
            callback=self._parse_sitemap,
            errback=self._discovery_failed,
            dont_filter=True,
        )
        seed_req = self._make_page_request(self.target_url, depth=0, discovered_via="seed")
        if seed_req is not None:
            yield seed_req

    def _parse_robots(self, response: Response):
        if response.status != 200:
            return
        text = response.text or ""
        for line in text.splitlines():
            stripped = line.strip()
            if stripped.lower().startswith("sitemap:"):
                sm_url = stripped.split(":", 1)[1].strip()
                if sm_url:
                    yield scrapy.Request(
                        url=sm_url,
                        callback=self._parse_sitemap,
                        errback=self._discovery_failed,
                        dont_filter=True,
                    )

    def _parse_sitemap(self, response: Response):
        if response.status != 200:
            return
        self._sitemap_found = True

        is_index = bool(response.xpath("//*[local-name()='sitemapindex']"))
        for loc in response.xpath("//*[local-name()='loc']/text()").getall():
            loc = loc.strip()
            if not loc:
                continue
            if is_index:
                yield scrapy.Request(
                    url=loc,
                    callback=self._parse_sitemap,
                    errback=self._discovery_failed,
                    dont_filter=True,
                )
                continue
            req = self._make_page_request(loc, depth=0, discovered_via="sitemap")
            if req is None:
                if len(self._queued_urls) >= MAX_PAGES:
                    break
                continue
            yield req

    def _discovery_failed(self, failure: Any) -> None:
        self.logger.debug("Discovery probe failed: %s", failure.getErrorMessage())

    # ------------------------------------------------------------------
    # Page request construction + cap enforcement
    # ------------------------------------------------------------------
    def _make_page_request(
        self,
        url: str,
        *,
        depth: int,
        discovered_via: str,
    ) -> scrapy.Request | None:
        normalized = self._normalize_url(url)
        if normalized is None:
            return None
        if normalized in self._queued_urls:
            return None
        if len(self._queued_urls) >= MAX_PAGES:
            return None
        parsed = urlparse(normalized)
        if parsed.netloc != self.seed_host:
            return None
        self._queued_urls.add(normalized)
        return scrapy.Request(
            url=normalized,
            callback=self.parse,
            errback=self._page_errback,
            meta={
                "playwright": True,
                "playwright_include_page": True,
                "playwright_context_kwargs": {"ignore_https_errors": True},
                "crawl_depth": depth,
                "discovered_via": discovered_via,
            },
        )

    def _normalize_url(self, url: str) -> str | None:
        try:
            parsed = urlparse(url.strip())
        except Exception:
            return None
        if parsed.scheme not in ("http", "https") or not parsed.netloc:
            return None
        if any(parsed.path.lower().endswith(ext) for ext in SKIPPED_EXTENSIONS):
            return None
        return parsed._replace(fragment="").geturl()

    # ------------------------------------------------------------------
    # Page parse
    # ------------------------------------------------------------------
    async def parse(self, response: HtmlResponse) -> AsyncGenerator[Any, None]:
        page = response.meta.get("playwright_page")
        depth: int = response.meta.get("crawl_depth", 0)
        discovered_via: str = response.meta.get("discovered_via", "unknown")

        try:
            if page is not None:
                try:
                    await page.wait_for_load_state("networkidle", timeout=8000)
                except Exception:
                    pass

            meta = extract_meta(response)
            text = extract_clean_text(response)
            chunks = chunk_text(text)

            self.pages.append({
                "url": response.url,
                "title": meta["title"],
                "description": meta["description"],
                "canonical_url": meta["canonical_url"],
                "depth": depth,
                "discovered_via": discovered_via,
                "text_chars": len(text),
                "chunk_count": len(chunks),
                "chunks": chunks,
            })

            if depth < MAX_DEPTH_BFS and len(self._queued_urls) < MAX_PAGES:
                for href in response.css("a::attr(href)").getall():
                    if not href:
                        continue
                    absolute = response.urljoin(href)
                    req = self._make_page_request(
                        absolute,
                        depth=depth + 1,
                        discovered_via="link",
                    )
                    if req is None:
                        if len(self._queued_urls) >= MAX_PAGES:
                            break
                        continue
                    yield req

        except Exception:
            self.logger.exception("Fatal error parsing %s", response.url)
            self.failures.append({"url": response.url, "reason": "parse_exception"})
        finally:
            if page is not None:
                try:
                    await page.close()
                except Exception:
                    pass

    def _page_errback(self, failure: Any) -> None:
        url = failure.request.url if failure.request else "<unknown>"
        self.logger.warning("Page fetch failed: %s — %s", url, failure.getErrorMessage())
        self.failures.append({"url": url, "reason": failure.getErrorMessage()})

    # ------------------------------------------------------------------
    # Close: emit aggregated output
    # ------------------------------------------------------------------
    def closed(self, reason: str) -> None:
        elapsed_ms = int((time.time() - self._started_at) * 1000)
        chunks_total = sum(p["chunk_count"] for p in self.pages)
        text_chars_total = sum(p["text_chars"] for p in self.pages)

        site = {
            "seed_url": self.target_url,
            "seed_host": self.seed_host,
            "pages": self.pages,
            "stats": {
                "pages_crawled": len(self.pages),
                "pages_failed": len(self.failures),
                "chunks_total": chunks_total,
                "text_chars_total": text_chars_total,
                "sitemap_found": self._sitemap_found,
                "elapsed_ms": elapsed_ms,
                "cap_max_pages": MAX_PAGES,
                "close_reason": reason,
            },
            "failures": self.failures,
        }

        out_dir = pathlib.Path("output")
        out_dir.mkdir(parents=True, exist_ok=True)
        out_path = out_dir / "site_architecture.json"
        with out_path.open("w", encoding="utf-8") as fh:
            json.dump(site, fh, indent=2, ensure_ascii=False, default=str)
        self.logger.info(
            "Wrote site ingest (%d pages, %d chunks, sitemap=%s) -> %s",
            len(self.pages), chunks_total, self._sitemap_found, out_path,
        )
