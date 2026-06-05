"""Item pipelines for the Universal Crawler.

Pipeline chain (ordered by priority in settings.py):
1. **ValidationPipeline** - runs each item through the Pydantic model.
2. **JsonExportPipeline** - writes a single, pretty-printed JSON file.
"""
from __future__ import annotations

import json
import logging
import pathlib
from typing import Any

from scrapy import Spider

from universal_crawler.items import (
    PageArchitectureItem,
    PageArchitectureModel,
)

logger = logging.getLogger(__name__)

class ValidationPipeline:
    """Validate and normalise every PageArchitectureItem with Pydantic."""

    def process_item(
        self,
        item: PageArchitectureItem,
        spider: Spider,
    ) -> PageArchitectureItem:
        try:
            model = PageArchitectureModel(
                metadata=item.get("metadata", {}),
                sections=item.get("sections", []),
                interactive_elements=item.get("interactive_elements", []),
                network_requests=item.get("network_requests", []),
                assets=item.get("assets", []),
            )
            validated: dict[str, Any] = model.model_dump(mode="python")
            item["metadata"] = validated["metadata"]
            item["sections"] = validated["sections"]
            item["interactive_elements"] = validated["interactive_elements"]
            item["network_requests"] = validated["network_requests"]
            item["assets"] = validated["assets"]
        except Exception:
            logger.exception("Item validation failed - dropping item")
            from scrapy.exceptions import DropItem

            raise DropItem("Pydantic validation error")
        return item

class JsonExportPipeline:
    """Collect all validated items and flush them to a single JSON file."""

    def __init__(self) -> None:
        self._items: list[dict[str, Any]] = []

    def open_spider(self, spider: Spider) -> None:
        self._items = []

    def process_item(
        self,
        item: PageArchitectureItem,
        spider: Spider,
    ) -> PageArchitectureItem:
        self._items.append(dict(item))
        return item

    def close_spider(self, spider: Spider) -> None:
        output_dir = pathlib.Path("output")
        output_dir.mkdir(parents=True, exist_ok=True)

        output_path = output_dir / f"universal_{spider.name}.json"
        with output_path.open("w", encoding="utf-8") as fh:
            json.dump(
                self._items,
                fh,
                indent=2,
                ensure_ascii=False,
                default=str,
            )
        spider.logger.info("Exported %d items -> %s", len(self._items), output_path)