-- pgvector + knowledge-base tables for the RAG site-search feature.
--
-- Requires the pgvector extension, which is available in the
-- pgvector/pgvector:pg16 image. docker-compose.yml is updated in lockstep.

CREATE EXTENSION IF NOT EXISTS vector;

-- ---------------------------------------------------------------------------
-- IngestStatus enum
-- ---------------------------------------------------------------------------
CREATE TYPE "IngestStatus" AS ENUM ('PENDING', 'RUNNING', 'SUCCEEDED', 'FAILED');

-- ---------------------------------------------------------------------------
-- BotKnowledgeChunk: one row per chunked page slice + its embedding
-- ---------------------------------------------------------------------------
CREATE TABLE "BotKnowledgeChunk" (
    "id"         TEXT NOT NULL,
    "botId"      TEXT NOT NULL,
    "pageUrl"    TEXT NOT NULL,
    "pageTitle"  TEXT NOT NULL,
    "chunkIndex" INTEGER NOT NULL,
    "chunkText"  TEXT NOT NULL,
    "tokenCount" INTEGER NOT NULL DEFAULT 0,
    "embedding"  vector(1536) NOT NULL,
    "createdAt"  TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BotKnowledgeChunk_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "BotKnowledgeChunk_botId_pageUrl_chunkIndex_key"
    ON "BotKnowledgeChunk" ("botId", "pageUrl", "chunkIndex");

CREATE INDEX "BotKnowledgeChunk_botId_idx"
    ON "BotKnowledgeChunk" ("botId");

CREATE INDEX "BotKnowledgeChunk_botId_pageUrl_idx"
    ON "BotKnowledgeChunk" ("botId", "pageUrl");

-- HNSW index for fast cosine-distance ANN search.
-- Tuned for sites <50 pages × ~10 chunks/page = ~500 vectors per bot,
-- but the parameters scale fine into the low millions.
CREATE INDEX "BotKnowledgeChunk_embedding_hnsw_idx"
    ON "BotKnowledgeChunk"
    USING hnsw ("embedding" vector_cosine_ops)
    WITH (m = 16, ef_construction = 64);

ALTER TABLE "BotKnowledgeChunk"
    ADD CONSTRAINT "BotKnowledgeChunk_botId_fkey"
    FOREIGN KEY ("botId") REFERENCES "BotConfig" ("id")
    ON DELETE CASCADE ON UPDATE CASCADE;

-- ---------------------------------------------------------------------------
-- BotKnowledgeIngest: audit row per crawl
-- ---------------------------------------------------------------------------
CREATE TABLE "BotKnowledgeIngest" (
    "id"           TEXT NOT NULL,
    "botId"        TEXT NOT NULL,
    "seedUrl"      TEXT NOT NULL,
    "status"       "IngestStatus" NOT NULL DEFAULT 'PENDING',
    "pagesCrawled" INTEGER NOT NULL DEFAULT 0,
    "chunksStored" INTEGER NOT NULL DEFAULT 0,
    "errorMessage" TEXT,
    "startedAt"    TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finishedAt"   TIMESTAMP(3),

    CONSTRAINT "BotKnowledgeIngest_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "BotKnowledgeIngest_botId_startedAt_idx"
    ON "BotKnowledgeIngest" ("botId", "startedAt");

ALTER TABLE "BotKnowledgeIngest"
    ADD CONSTRAINT "BotKnowledgeIngest_botId_fkey"
    FOREIGN KEY ("botId") REFERENCES "BotConfig" ("id")
    ON DELETE CASCADE ON UPDATE CASCADE;
