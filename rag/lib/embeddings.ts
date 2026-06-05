/**
 * Embeddings client — Gemini gemini-embedding-001 @ 1536 dim.
 *
 * Uses Gemini's `batchEmbedContents` endpoint to amortize HTTP round-trips:
 * 100 inputs per HTTP call (Gemini's per-request limit). Free-tier quota
 * is 1,500 RPM — for a <50-page site this is one quick burst.
 *
 * Dimensionality is pinned at 1536 so the output matches the
 * `vector(1536)` column in `BotKnowledgeChunk`.
 */

import { logger } from "./logger";

const GOOGLE_AI_API_KEY = process.env.GOOGLE_AI_API_KEY;
const EMBED_MODEL = "gemini-embedding-001";
const EMBED_DIM = 1536;
const BATCH_SIZE = 100;
const ENDPOINT_BATCH =
  `https://generativelanguage.googleapis.com/v1beta/models/${EMBED_MODEL}:batchEmbedContents`;

if (!GOOGLE_AI_API_KEY) {
  logger.warn("GOOGLE_AI_API_KEY is not set; embeddings will fail at runtime");
}

export type EmbeddingTaskType =
  | "RETRIEVAL_DOCUMENT"
  | "RETRIEVAL_QUERY"
  | "SEMANTIC_SIMILARITY"
  | "CLASSIFICATION"
  | "CLUSTERING";

interface BatchEmbedRequestBody {
  requests: Array<{
    model: string;
    content: { parts: Array<{ text: string }> };
    taskType: EmbeddingTaskType;
    outputDimensionality: number;
  }>;
}

interface BatchEmbedResponse {
  embeddings: Array<{ values: number[] }>;
}

async function postBatch(
  texts: string[],
  taskType: EmbeddingTaskType,
): Promise<number[][]> {
  if (!GOOGLE_AI_API_KEY) {
    throw new Error("GOOGLE_AI_API_KEY is not configured");
  }
  const body: BatchEmbedRequestBody = {
    requests: texts.map((text) => ({
      model: `models/${EMBED_MODEL}`,
      content: { parts: [{ text }] },
      taskType,
      outputDimensionality: EMBED_DIM,
    })),
  };

  const response = await fetch(`${ENDPOINT_BATCH}?key=${GOOGLE_AI_API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errText = await response.text().catch(() => "");
    throw new Error(
      `Gemini batchEmbedContents ${response.status}: ${errText.slice(0, 300)}`,
    );
  }

  const payload = (await response.json()) as BatchEmbedResponse;
  if (!payload.embeddings || payload.embeddings.length !== texts.length) {
    throw new Error(
      `Gemini returned ${payload.embeddings?.length ?? 0} embeddings for ${texts.length} inputs`,
    );
  }

  for (const e of payload.embeddings) {
    if (!Array.isArray(e.values) || e.values.length !== EMBED_DIM) {
      throw new Error(
        `Gemini returned embedding of length ${e.values?.length}, expected ${EMBED_DIM}`,
      );
    }
  }
  return payload.embeddings.map((e) => e.values);
}

/**
 * Embed an array of texts. Empty/whitespace inputs return a zero vector
 * (so callers can preserve index alignment without filtering).
 */
export async function embedTexts(
  texts: string[],
  taskType: EmbeddingTaskType = "RETRIEVAL_DOCUMENT",
): Promise<number[][]> {
  if (texts.length === 0) return [];

  const indices: number[] = [];
  const cleaned: string[] = [];
  for (let i = 0; i < texts.length; i++) {
    const t = texts[i];
    if (t && t.trim()) {
      indices.push(i);
      cleaned.push(t);
    }
  }

  const result: number[][] = texts.map(() => new Array(EMBED_DIM).fill(0));
  const startedAt = performance.now();

  for (let offset = 0; offset < cleaned.length; offset += BATCH_SIZE) {
    const batch = cleaned.slice(offset, offset + BATCH_SIZE);
    const batchTask = offset === 0 ? taskType : taskType;
    const vectors = await postBatch(batch, batchTask);
    for (let j = 0; j < vectors.length; j++) {
      result[indices[offset + j]] = vectors[j];
    }
  }

  const durationMs = (performance.now() - startedAt).toFixed(0);
  logger.info("Embedded texts", {
    count: cleaned.length,
    skippedEmpty: texts.length - cleaned.length,
    durationMs,
    model: EMBED_MODEL,
    dim: EMBED_DIM,
  });

  return result;
}

/**
 * Embed a single query for retrieval. Uses the RETRIEVAL_QUERY task type,
 * which Gemini's docs say to use for the query side of asymmetric search
 * (documents go in as RETRIEVAL_DOCUMENT).
 */
export async function embedQuery(query: string): Promise<number[]> {
  const [v] = await embedTexts([query], "RETRIEVAL_QUERY");
  return v;
}

export const EMBEDDING_DIM = EMBED_DIM;
export const EMBEDDING_MODEL = EMBED_MODEL;
