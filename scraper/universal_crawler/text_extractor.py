"""
Clean readable text extraction from a Playwright-rendered Scrapy response.

Picks the most semantic root (main → article → body), walks content-bearing
elements in document order, and skips noise containers (nav, header, footer,
aside, script, style, noscript, svg, iframe).

The output preserves paragraph boundaries with blank lines, which the chunker
relies on for splitting.
"""
from __future__ import annotations

import re
from typing import Any

_CONTENT_BLOCK_XPATH = (
    "//body//*"
    "[self::h1 or self::h2 or self::h3 or self::h4 or self::h5 or self::h6 "
    " or self::p or self::li or self::blockquote or self::pre or self::dt "
    " or self::dd or self::figcaption]"
    "[not(ancestor::nav) and not(ancestor::header) and not(ancestor::footer) "
    " and not(ancestor::aside) and not(ancestor::script) and not(ancestor::style) "
    " and not(ancestor::noscript) and not(ancestor::svg) and not(ancestor::iframe)]"
)

_WS_RUN_RE = re.compile(r"\s+")
_MULTI_NEWLINE_RE = re.compile(r"\n{3,}")


def extract_clean_text(response: Any, max_chars: int = 200_000) -> str:
    """Return a paragraph-separated plain-text rendering of the page."""
    blocks = response.xpath(_CONTENT_BLOCK_XPATH)
    paragraphs: list[str] = []
    for el in blocks:
        text_parts = el.xpath(".//text()").getall()
        joined = _WS_RUN_RE.sub(" ", " ".join(t for t in text_parts if t.strip())).strip()
        if joined:
            paragraphs.append(joined)
    text = "\n\n".join(paragraphs)
    text = _MULTI_NEWLINE_RE.sub("\n\n", text).strip()
    if len(text) > max_chars:
        text = text[:max_chars]
    return text


def extract_meta(response: Any) -> dict[str, str]:
    """Pull title, description, canonical URL from <head> for the doc envelope."""
    title = (response.css("title::text").get() or "").strip()
    description = (response.css('meta[name="description"]::attr(content)').get() or "").strip()
    canonical = (response.css('link[rel="canonical"]::attr(href)').get() or "").strip()
    og_title = (response.css('meta[property="og:title"]::attr(content)').get() or "").strip()
    og_description = (response.css('meta[property="og:description"]::attr(content)').get() or "").strip()
    return {
        "title": title or og_title,
        "description": description or og_description,
        "canonical_url": canonical,
    }
