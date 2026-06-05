"""
FastAPI HTTP wrapper around the universal_crawler spider.

Exposes:
    POST /crawl   { "url": "https://example.com" }
    GET  /healthz

The spider runs inside a child process so each crawl gets a clean Scrapy
reactor (Twisted's reactor cannot be restarted in-process).
"""
from __future__ import annotations

import asyncio
import ipaddress
import json
import logging
import os
import socket
import sys
import tempfile
from pathlib import Path
from urllib.parse import urlparse

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

logger = logging.getLogger(__name__)
logging.basicConfig(level=os.environ.get("LOG_LEVEL", "INFO"))

CRAWL_TIMEOUT_SECONDS: int = int(os.environ.get("CRAWL_TIMEOUT_SECONDS", "120"))
CRAWLER_ROOT: Path = Path(__file__).parent.resolve()

app = FastAPI(title="Universal Crawler Service", version="1.0.0")


class CrawlRequest(BaseModel):
    url: str = Field(..., description="Seed URL to crawl")


def _ssrf_guard(url: str) -> None:
    """Reject private / loopback / metadata-IP targets."""
    parsed = urlparse(url)
    if parsed.scheme not in ("http", "https"):
        raise HTTPException(status_code=400, detail=f"Unsupported scheme: {parsed.scheme!r}")
    if not parsed.netloc:
        raise HTTPException(status_code=400, detail="URL missing host")

    host = parsed.hostname or ""
    try:
        infos = socket.getaddrinfo(host, None)
    except socket.gaierror as exc:
        raise HTTPException(status_code=400, detail=f"DNS lookup failed: {exc}") from exc

    for info in infos:
        ip = ipaddress.ip_address(info[4][0])
        if (
            ip.is_private
            or ip.is_loopback
            or ip.is_link_local
            or ip.is_reserved
            or ip.is_multicast
            or ip.is_unspecified
        ):
            raise HTTPException(
                status_code=400,
                detail=f"Refusing to crawl private/internal address: {ip}",
            )


async def _run_spider(url: str) -> dict:
    """Spawn scrapy as a subprocess and read site_architecture.json."""
    with tempfile.TemporaryDirectory(prefix="crawl_") as workdir:
        proc = await asyncio.create_subprocess_exec(
            sys.executable,
            "-m",
            "scrapy",
            "crawl",
            "universal",
            "-a",
            f"url={url}",
            cwd=workdir,
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE,
            env={
                **os.environ,
                "SCRAPY_SETTINGS_MODULE": "universal_crawler.settings",
                "PYTHONPATH": str(CRAWLER_ROOT),
            },
        )
        try:
            _, stderr = await asyncio.wait_for(proc.communicate(), timeout=CRAWL_TIMEOUT_SECONDS)
        except asyncio.TimeoutError:
            proc.kill()
            await proc.wait()
            raise HTTPException(status_code=504, detail="Crawl exceeded time limit") from None

        if proc.returncode != 0:
            tail = stderr.decode(errors="replace")[-2000:]
            logger.error("Scrapy exited %d:\n%s", proc.returncode, tail)
            raise HTTPException(status_code=502, detail=f"Crawler failed: rc={proc.returncode}")

        out = Path(workdir) / "output" / "site_architecture.json"
        if not out.exists():
            raise HTTPException(status_code=502, detail="Crawler produced no output")
        return json.loads(out.read_text(encoding="utf-8"))


@app.get("/healthz")
async def healthz() -> dict:
    return {"status": "ok"}


@app.post("/crawl")
async def crawl(req: CrawlRequest) -> dict:
    _ssrf_guard(req.url)
    return await _run_spider(req.url)
