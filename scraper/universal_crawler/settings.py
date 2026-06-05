"""
Scrapy settings for the Universal Crawler project.

This file wires up the Scrapy-Playwright download handler, configures
AutoThrottle, concurrency limits, and every production knob required for
safe, headless-browser crawling.
"""
from __future__ import annotations

# ---------------------------------------------------------------------------
# Project identity
# ---------------------------------------------------------------------------
BOT_NAME: str = "universal_crawler"
SPIDER_MODULES: list[str] = ["universal_crawler.spiders"]
NEWSPIDER_MODULE: str = "universal_crawler.spiders"

# ---------------------------------------------------------------------------
# Scrapy-Playwright download handler (replaces the default HTTP handler)
# ---------------------------------------------------------------------------
DOWNLOAD_HANDLERS: dict[str, str] = {
    "http": "scrapy_playwright.handler.ScrapyPlaywrightDownloadHandler",
    "https": "scrapy_playwright.handler.ScrapyPlaywrightDownloadHandler",
}

# Playwright requires the asyncio reactor to be installed *before* the
# reactor is started.  Scrapy honours this setting automatically.
TWISTED_REACTOR: str = "twisted.internet.asyncioreactor.AsyncioSelectorReactor"

# ---------------------------------------------------------------------------
# Playwright browser configuration
# ---------------------------------------------------------------------------
PLAYWRIGHT_BROWSER_TYPE: str = "chromium"

PLAYWRIGHT_LAUNCH_OPTIONS: dict = {
    "headless": True,
    "args": [
        "--disable-blink-features=AutomationControlled",
        "--disable-dev-shm-usage",
        "--no-sandbox",
    ],
}

# Maximum number of pages Playwright may keep open in a single context.
PLAYWRIGHT_MAX_PAGES_PER_CONTEXT: int = 4

# Default navigation timeout (ms).  30 s is generous for most pages.
PLAYWRIGHT_DEFAULT_NAVIGATION_TIMEOUT: int = 30_000

# ---------------------------------------------------------------------------
# Concurrency & throttling
# ---------------------------------------------------------------------------
CONCURRENT_REQUESTS: int = 8
CONCURRENT_REQUESTS_PER_DOMAIN: int = 4
DOWNLOAD_DELAY: float = 0.5
DOWNLOAD_TIMEOUT: int = 60

# AutoThrottle
AUTOTHROTTLE_ENABLED: bool = True
AUTOTHROTTLE_START_DELAY: float = 1.0
AUTOTHROTTLE_MAX_DELAY: float = 10.0
AUTOTHROTTLE_TARGET_CONCURRENCY: float = 2.0
AUTOTHROTTLE_DEBUG: bool = False

# ---------------------------------------------------------------------------
# Retry / error resilience
# ---------------------------------------------------------------------------
RETRY_ENABLED: bool = True
RETRY_TIMES: int = 3
RETRY_HTTP_CODES: list[int] = [500, 502, 503, 504, 408, 429]

# ---------------------------------------------------------------------------
# Middlewares
# ---------------------------------------------------------------------------
DOWNLOADER_MIDDLEWARES: dict[str, int | None] = {
    "scrapy.downloadermiddlewares.useragent.UserAgentMiddleware": None,
    "universal_crawler.middlewares.RandomUserAgentMiddleware": 400,
    "scrapy.downloadermiddlewares.retry.RetryMiddleware": 550,
}

# ---------------------------------------------------------------------------
# Item pipelines
# ---------------------------------------------------------------------------
ITEM_PIPELINES: dict[str, int] = {}

# ---------------------------------------------------------------------------
# Feed / export settings
# ---------------------------------------------------------------------------
FEEDS: dict[str, dict] = {}

# ---------------------------------------------------------------------------
# Logging
# ---------------------------------------------------------------------------
LOG_LEVEL: str = "INFO"
LOG_FORMAT: str = "%(asctime)s [%(name)s] %(levelname)s: %(message)s"

# ---------------------------------------------------------------------------
# Robots.txt
# ---------------------------------------------------------------------------
ROBOTSTXT_OBEY: bool = True

# ---------------------------------------------------------------------------
# Request fingerprinting (Scrapy >= 2.7)
# ---------------------------------------------------------------------------
REQUEST_FINGERPRINTER_IMPLEMENTATION: str = "2.7"