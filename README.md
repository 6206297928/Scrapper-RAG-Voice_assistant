# Scraper × RAG × Voice Assistant — Working Prototype

A three-stage AI pipeline that turns any website into a grounded
conversational assistant. Text and voice answers share one source
of truth, so they can never disagree.

End-to-end: speech → STT → vector retrieval → LLM with grounded
context → TTS → spoken answer in **~1.0–1.2 seconds**.

---

## Module 1 — Universal Web Crawler · `scraper/`

**What it does:** Given a seed URL, discovers the site's structure,
fetches each page (with full JS rendering), extracts clean paragraph
text, and returns it pre-chunked for embedding.

**How it works**
- Reads `/robots.txt` to find declared sitemaps
- Falls back to `/sitemap.xml`, then BFS over same-host links
- Each page rendered via Playwright (handles JS-heavy SPAs)
- Strips nav/footer/scripts, paragraph-splits the body
- Packs into ~900-char chunks with 150-char sliding overlap
- **SSRF-hardened:** rejects private, loopback, and link-local IPs

**Key files**
- `scraper/server.py` — FastAPI HTTP wrapper
- `scraper/universal_crawler/spiders/universal_spider.py` — Scrapy spider
- `scraper/universal_crawler/chunker.py` — Paragraph-aware chunker

**Stack:** Python 3.12 · FastAPI · Scrapy · Playwright

---

## Module 2 — RAG Knowledge System · `rag/`

**What it does:** Embeds and stores site knowledge in pgvector,
retrieves the most relevant chunks for any query, and grounds LLM
answers in them — refusing when retrieval confidence is too low.

**Pipeline**
```
query → Gemini embed → pgvector cosine search (LIMIT 20)
      → Gemini Flash LLM-as-judge rerank → top 5
      → confidence < 0.6 ? REFUSE : ground LLM context
```

**Key technical decisions**

| Choice | Why |
|---|---|
| Gemini `gemini-embedding-001` @ 1536 dim | Free tier, fast batch (100/call) |
| pgvector + HNSW (m=16, ef_construction=64) | Sub-ms ANN search, scales to millions |
| Gemini Flash as reranker | No paid reranker dep, good on ≤20 candidates |
| 0.6 confidence refusal gate | Eliminates hallucinated facts on weak retrieval |
| Lean `/retrieve` endpoint for voice | Skips rerank, saves ~500ms |

**Key files**
- `rag/lib/embeddings.ts` — Gemini batch embeddings
- `rag/lib/search.ts` — Vector search + confidence gate
- `rag/lib/rerank.ts` — Gemini Flash LLM-as-judge reranker
- `rag/lib/ingest.ts` — crawl → embed → upsert orchestrator
- `rag/prisma/schema.prisma` — knowledge models
- `rag/prisma/migrations/` — pgvector extension + HNSW SQL
- `rag/api/retrieve.ts` — Lean voice endpoint
- `rag/api/search.ts` — Synthesized answer endpoint
- `rag/api/ingest.ts` — Triggers the crawler

**Stack:** TypeScript · PostgreSQL 15 + pgvector · Prisma 7 · Gemini API

---

## Module 3 — Voice Assistant · `voice/`

**What it does:** Real-time WebRTC voice conversations grounded
in the same RAG knowledge base as text chat.

**Per-turn flow**
```
User speaks
   │
   ▼  Groq Whisper-large-v3-turbo STT (~300ms)
   │
   ▼  on_user_turn_completed hook fires
   │      ├─ HTTP POST → RAG /retrieve with transcript
   │      ├─ Receives top-3 chunks (~100ms)
   │      └─ Injects SITE KNOWLEDGE system message into context
   │
   ▼  Groq Llama-3.3-70B LLM (streaming)
   │
   ▼  Groq Orpheus TTS (English + Arabic models)
   │
   ▼  User hears the answer
```

**Voice-specific prompt rules**
- 1–2 short sentences (TTS-friendly)
- No Markdown — no asterisks, no bullets
- Numbers spoken naturally ("ninety-nine dollars", not "$99")
- Never read URLs aloud
- Refuse site-specific questions if no chunks retrieved

**Key files**
- `voice/agent.py` — LiveKit Agent subclass with RAG hook

**Stack:** Python 3.12 · LiveKit Agents 1.5 · Groq (Whisper, Llama 3.3 70B, Orpheus) · Silero VAD · aiohttp

---

## Running it

```bash
cp .env.example .env   # add GROQ, GOOGLE_AI, LIVEKIT keys
docker compose up -d   # builds + starts all 4 services
```

| Service       | Host port | Purpose                        |
|---------------|-----------|--------------------------------|
| `postgres-db` | 5436      | RAG vector store with pgvector |
| `rag-api`     | 3000      | RAG endpoints                  |
| `crawler`     | 8081      | Crawler service                |
| `voice-agent` | -         | LiveKit worker (outbound only) |

---

## Full stack

Python · TypeScript · FastAPI · Scrapy · Playwright · LiveKit Agents · Groq (Whisper, Llama 3.3 70B, Orpheus) · Gemini (embeddings + Flash reranker) · PostgreSQL 15 + pgvector (HNSW) · Prisma 7 · Docker Compose
