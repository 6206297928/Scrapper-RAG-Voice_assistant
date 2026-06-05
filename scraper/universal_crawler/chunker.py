"""
Paragraph-aware sliding-window text chunker.

Sizing is char-based as a stable proxy for tokens (OpenAI
text-embedding-3-small averages ~4 chars/token on English prose).

  - Default target chunk size:  ~2000 chars  (~500 tokens)
  - Default overlap:            ~200 chars   (~50 tokens)

Strategy:
  1. Split on blank-line paragraph boundaries.
  2. Greedily pack paragraphs until adding another would exceed max_chars.
  3. If a single paragraph exceeds max_chars, sentence-split it and pack the
     sentences instead.
  4. Apply char overlap by prepending the tail of the previous chunk.

Returns a list of {"index", "text", "approx_tokens"} dicts.
"""
from __future__ import annotations

import re

_PARAGRAPH_SPLIT_RE = re.compile(r"\n\s*\n+")
_SENTENCE_SPLIT_RE = re.compile(r"(?<=[.!?])\s+(?=[A-Z(\"'])")
_WS_RUN_RE = re.compile(r"[ \t]+")

DEFAULT_MAX_CHARS = 900
DEFAULT_OVERLAP = 150
CHARS_PER_TOKEN = 4


def chunk_text(
    text: str,
    *,
    max_chars: int = DEFAULT_MAX_CHARS,
    overlap_chars: int = DEFAULT_OVERLAP,
) -> list[dict]:
    if not text or not text.strip():
        return []

    paragraphs = [
        _WS_RUN_RE.sub(" ", p.strip())
        for p in _PARAGRAPH_SPLIT_RE.split(text)
        if p and p.strip()
    ]
    if not paragraphs:
        return []

    raw_chunks: list[str] = []
    current = ""

    def flush():
        nonlocal current
        if current.strip():
            raw_chunks.append(current.strip())
        current = ""

    for para in paragraphs:
        if len(para) > max_chars:
            # Single paragraph too big — sentence-split and pack
            flush()
            sub = ""
            for sent in _SENTENCE_SPLIT_RE.split(para):
                sent = sent.strip()
                if not sent:
                    continue
                if len(sub) + len(sent) + 1 > max_chars:
                    if sub:
                        raw_chunks.append(sub)
                    sub = sent if len(sent) <= max_chars else sent[:max_chars]
                else:
                    sub = (sub + " " + sent).strip() if sub else sent
            if sub:
                current = sub  # carries into next paragraph's packing
            continue

        if len(current) + len(para) + 2 > max_chars:
            flush()
            current = para
        else:
            current = (current + "\n\n" + para) if current else para
    flush()

    if overlap_chars > 0 and len(raw_chunks) > 1:
        overlapped: list[str] = [raw_chunks[0]]
        for i in range(1, len(raw_chunks)):
            tail = raw_chunks[i - 1][-overlap_chars:]
            overlapped.append(f"{tail} {raw_chunks[i]}")
        raw_chunks = overlapped

    return [
        {
            "index": i,
            "text": c,
            "approx_tokens": max(1, len(c) // CHARS_PER_TOKEN),
        }
        for i, c in enumerate(raw_chunks)
    ]
