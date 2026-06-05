/**
 * Vector search + rerank pipeline for the RAG site-navigation feature.
 *
 *   user query
 *      │
 *      ▼ embedQuery (Gemini, RETRIEVAL_QUERY)
 *      │
 *      ▼ pgvector cosine search, LIMIT 20
 *      │
 *      ▼ Gemini Flash LLM-as-judge rerank → top N (default 5 chunks)
 *      │
 *      └─→ { chunks, pages, confidence, refused }
 *
 * The confidence threshold is what defends the 95% accuracy bar: when
 * `confidence < RELEVANCE_THRESHOLD`, the caller should refuse rather
 * than hallucinate.
 */

import { prisma } from "./prisma";
import { logger } from "./logger";
import { embedQuery } from "./embeddings";
import { rerankChunks, RELEVANCE_THRESHOLD } from "./rerank";

const VECTOR_CANDIDATES = 20;
const DEFAULT_TOP_N = 5;

interface RawChunkRow {
  id: string;
  pageUrl: string;
  pageTitle: string;
  chunkIndex: number;
  chunkText: string;
  distance: number;
}

export interface RetrievedChunk {
  id: string;
  pageUrl: string;
  pageTitle: string;
  chunkIndex: number;
  chunkText: string;
  cosineDistance: number;
  relevance: number;
}

export interface RetrievedPage {
  pageUrl: string;
  pageTitle: string;
  bestRelevance: number;
  matchedChunks: number;
}

export interface SearchResult {
  query: string;
  chunks: RetrievedChunk[];
  pages: RetrievedPage[];
  confidence: number;
  refused: boolean;
  threshold: number;
  durationMs: number;
}

function vectorLiteral(vec: number[]): string {
  return `[${vec.join(",")}]`;
}

/**
 * Retrieve and rerank knowledge chunks for a bot.
 *
 * Returns `chunks` sorted by reranker score (descending), plus a
 * deduplicated `pages` view ranked by best-chunk-on-that-page.
 *
 * If the bot has zero ingested chunks, returns refused=true immediately
 * without spending any embedding/rerank calls.
 */
export async function searchBotKnowledge(
  botId: string,
  query: string,
  options: { topN?: number; threshold?: number; skipRerank?: boolean } = {},
): Promise<SearchResult> {
  const topN = options.topN ?? DEFAULT_TOP_N;
  const threshold = options.threshold ?? RELEVANCE_THRESHOLD;
  const skipRerank = options.skipRerank ?? false;
  const trimmed = query.trim();
  const startedAt = performance.now();

  if (!trimmed) {
    return {
      query,
      chunks: [],
      pages: [],
      confidence: 0,
      refused: true,
      threshold,
      durationMs: Math.round(performance.now() - startedAt),
    };
  }

  // Fast path: skip everything if there's no knowledge base for this bot.
  const chunkCount = await prisma.botKnowledgeChunk.count({ where: { botId } });
  if (chunkCount === 0) {
    return {
      query,
      chunks: [],
      pages: [],
      confidence: 0,
      refused: true,
      threshold,
      durationMs: Math.round(performance.now() - startedAt),
    };
  }

  // 1. Embed query.
  const queryVector = await embedQuery(trimmed);
  const literal = vectorLiteral(queryVector);

  // 2. pgvector cosine search — top VECTOR_CANDIDATES (or just topN when skipping rerank).
  const vectorLimit = skipRerank ? topN : VECTOR_CANDIDATES;
  const rows = await prisma.$queryRaw<RawChunkRow[]>`
    SELECT
      "id",
      "pageUrl",
      "pageTitle",
      "chunkIndex",
      "chunkText",
      ("embedding" <=> ${literal}::vector)::float AS "distance"
    FROM "BotKnowledgeChunk"
    WHERE "botId" = ${botId}
    ORDER BY "embedding" <=> ${literal}::vector
    LIMIT ${vectorLimit}
  `;

  if (rows.length === 0) {
    return {
      query,
      chunks: [],
      pages: [],
      confidence: 0,
      refused: true,
      threshold,
      durationMs: Math.round(performance.now() - startedAt),
    };
  }

  // 3. Rerank with Gemini LLM-as-judge. If the reranker fails (e.g. 429
  // quota / network error), fall back to pure vector ranking so the chat
  // still has grounded context instead of refusing.
  // Voice path skips this — saves ~500ms; raw vector top-3 is good enough.
  let reranked: { id: string; relevance: number }[];
  if (skipRerank) {
    reranked = rows.slice(0, topN).map((r) => ({
      id: r.id,
      relevance: Math.max(0, Math.min(1, 1 - r.distance)),
    }));
  } else {
    const rerankInput = rows.map((r) => ({
      id: r.id,
      text: r.chunkText,
      pageUrl: r.pageUrl,
      pageTitle: r.pageTitle,
    }));
    try {
      reranked = await rerankChunks(trimmed, rerankInput, topN);
    } catch (err) {
      logger.warn("Reranker failed; falling back to vector ranking", {
        error: err instanceof Error ? err.message : String(err),
      });
      reranked = rows.slice(0, topN).map((r) => ({
        id: r.id,
        relevance: Math.max(0, Math.min(1, 1 - r.distance)),
      }));
    }
  }

  // 4. Stitch reranker scores onto the original rows.
  const rowById = new Map(rows.map((r) => [r.id, r]));
  const chunks: RetrievedChunk[] = reranked
    .map((rk) => {
      const row = rowById.get(rk.id);
      if (!row) return null;
      return {
        id: row.id,
        pageUrl: row.pageUrl,
        pageTitle: row.pageTitle,
        chunkIndex: row.chunkIndex,
        chunkText: row.chunkText,
        cosineDistance: row.distance,
        relevance: rk.relevance,
      };
    })
    .filter((x): x is RetrievedChunk => x !== null);

  // 5. Build a page-level view: one entry per unique URL, ranked by best chunk.
  const byUrl = new Map<string, RetrievedPage>();
  for (const c of chunks) {
    const existing = byUrl.get(c.pageUrl);
    if (!existing) {
      byUrl.set(c.pageUrl, {
        pageUrl: c.pageUrl,
        pageTitle: c.pageTitle,
        bestRelevance: c.relevance,
        matchedChunks: 1,
      });
    } else {
      existing.bestRelevance = Math.max(existing.bestRelevance, c.relevance);
      existing.matchedChunks += 1;
    }
  }
  const pages = Array.from(byUrl.values()).sort(
    (a, b) => b.bestRelevance - a.bestRelevance,
  );

  const confidence = chunks[0]?.relevance ?? 0;
  const refused = confidence < threshold;
  const durationMs = Math.round(performance.now() - startedAt);

  logger.info("Search complete", {
    botId,
    queryLen: trimmed.length,
    candidates: rows.length,
    chunksReturned: chunks.length,
    pagesReturned: pages.length,
    confidence,
    refused,
    durationMs,
  });

  return {
    query,
    chunks,
    pages,
    confidence,
    refused,
    threshold,
    durationMs,
  };
}

export { RELEVANCE_THRESHOLD };
