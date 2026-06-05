"""
Pydantic-validated Scrapy items for the Universal Crawler.

Every piece of data extracted by the spider is typed, validated, and
serialised through these models.  ``PageArchitectureItem`` is the
top-level container that ends up in the final JSON export.
"""
from __future__ import annotations

import scrapy
from pydantic import BaseModel, Field


# -- Pydantic validation models --

class MetadataModel(BaseModel):
    """Page-level metadata (title, meta tags, HTTP headers, OG/Twitter/canonical)."""

    url: str = ""
    title: str = ""
    description: str = ""
    canonical_url: str = ""
    open_graph: dict[str, str] = Field(default_factory=dict)
    twitter_card: dict[str, str] = Field(default_factory=dict)
    meta_tags: list[dict[str, str]] = Field(default_factory=list)
    http_headers: dict[str, str] = Field(default_factory=dict)

class SectionModel(BaseModel):
    """A semantic section of the page."""

    tag: str = ""
    id: str = ""
    classes: list[str] = Field(default_factory=list)
    text_content: str = ""
    child_count: int = 0
    children: list["SectionModel"] = Field(default_factory=list)

SectionModel.model_rebuild()

class InteractiveElementModel(BaseModel):
    """A clickable / input element found on the page."""

    tag: str = ""
    element_type: str = ""
    id: str = ""
    name: str = ""
    classes: list[str] = Field(default_factory=list)
    text: str = ""
    href: str = ""
    aria_label: str = ""
    placeholder: str = ""
    value: str = ""
    options: list[str] = Field(default_factory=list)
    event_listeners: list[str] = Field(default_factory=list)

class NetworkRequestModel(BaseModel):
    """A single XHR / Fetch request captured during page load."""

    url: str = ""
    method: str = ""
    resource_type: str = ""
    post_data: str | None = None
    response_status: int | None = None
    response_content_type: str | None = None

class ImageAssetModel(BaseModel):
    """An image asset referenced by the page."""

    asset_type: str = "image"
    src: str = ""
    alt: str = ""

class ScriptAssetModel(BaseModel):
    """A script asset referenced by the page."""

    asset_type: str = "script"
    src: str = ""
    script_type: str = ""

class StylesheetAssetModel(BaseModel):
    """A stylesheet asset referenced by the page."""

    asset_type: str = "stylesheet"
    href: str = ""
    rel: str = ""

# Union type covering all asset variants.
AssetModel = ImageAssetModel | ScriptAssetModel | StylesheetAssetModel

class PageArchitectureModel(BaseModel):
    """Top-level model that encapsulates the entire page architecture."""

    metadata: MetadataModel = Field(default_factory=MetadataModel)
    sections: list[SectionModel] = Field(default_factory=list)
    interactive_elements: list[InteractiveElementModel] = Field(default_factory=list)
    network_requests: list[NetworkRequestModel] = Field(default_factory=list)
    assets: list[AssetModel] = Field(default_factory=list)

# -- Scrapy Item wrapper --

class PageArchitectureItem(scrapy.Item):
    """Thin Scrapy Item that carries a validated PageArchitectureModel."""

    metadata: scrapy.Field = scrapy.Field()
    sections: scrapy.Field = scrapy.Field()
    interactive_elements: scrapy.Field = scrapy.Field()
    network_requests: scrapy.Field = scrapy.Field()
    assets: scrapy.Field = scrapy.Field()