/**
 * Gemini LLM-as-judge reranker.
 *
 * Stage 1 (vector search) returns 20 candidates. We pass query + candidate
 * snippets to Gemini Flash with a JSON schema, asking it to score each
 * candidate's relevance to the query on [0.0, 1.0]. Top-N by score wins.
 *
 * Why LLM-as-judge instead of a dedicated reranker:
 *   - No Cohere API key in this stack (user opted out).
 *   - Free Gemini tier. ~500ms extra latency vs ~80ms for a cross-encoder.
 *   - Accuracy is good enough for ≤20 candidates; for larger pools, swap in
 *     a real reranker.
 *
 * The returned `relevance` score is also the confidence signal used by
 * the search route to decide "answer" vs "refuse" — anything below
 * RELEVANCE_THRESHOLD means the bot says it doesn't know.
 */

import { logger } from "./logger";

const GOOGLE_AI_API_KEY = process.env.GOOGLE_AI_API_KEY;
const RERANK_MODEL = process.env.GEMINI_RERANK_MODEL ?? "gemini-2.0-flash";
const ENDPOINT = (model: string) =>
  `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

export const RELEVANCE_THRESHOLD = 0.6;

export interface RerankCandidate {
  id: string;
  text: string;
  pageUrl?: string;
  pageTitle?: string;
}

export interface RerankResult {
  id: string;
  relevance: number;
}

interface GeminiGenerateResponse {
  candidates?: Array<{
    content?: { parts?: Array<{ text?: string }> };
  }>;
}

const RESPONSE_SCHEMA = {
  type: "OBJECT",
  properties: {
    scores: {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: {
          id: { type: "STRING" },
          relevance: { type: "NUMBER" },
        },
        required: ["id", "relevance"],
      },
    },
  },
  required: ["scores"],
} as const;

/**
 * Rerank candidates by relevance to query. Returns `topN` results sorted
 * descending by relevance. Missing candidates (LLM didn't score them)
 * get relevance=0.
 */
export async function rerankChunks(
  query: string,
  candidates: RerankCandidate[],
  topN: number = 3,
): Promise<RerankResult[]> {
  if (!GOOGLE_AI_API_KEY) {
    throw new Error("GOOGLE_AI_API_KEY is not configured");
  }
  if (candidates.length === 0) return [];
  if (candidates.length <= topN) {
    return candidates.map((c) => ({ id: c.id, relevance: 1.0 }));
  }

  const compactCandidates = candidates.map((c) => ({
    id: c.id,
    title: c.pageTitle ?? "",
    url: c.pageUrl ?? "",
    snippet: c.text.slice(0, 2500),
  }));

  const prompt = `You score how well each candidate page passage answers a user's query.

Query: ${JSON.stringify(query)}

Score each candidate on relevance to the query in [0.0, 1.0]:
  1.0 = directly answers the query
  0.7-0.9 = strongly related, useful context
  0.4-0.6 = tangentially related
  0.0-0.3 = unrelated

Candidates:
${JSON.stringify(compactCandidates, null, 2)}

Return JSON: { "scores": [{"id": "...", "relevance": 0.0}, ...] }
You must include EVERY candidate id exactly once.`;

  const body = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      temperature: 0.0,
      responseMimeType: "application/json",
      responseSchema: RESPONSE_SCHEMA,
    },
  };

  const startedAt = performance.now();
  const response = await fetch(
    `${ENDPOINT(RERANK_MODEL)}?key=${GOOGLE_AI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    },
  );

  if (!response.ok) {
    const errText = await response.text().catch(() => "");
    throw new Error(`Gemini rerank ${response.status}: ${errText.slice(0, 300)}`);
  }

  const payload = (await response.json()) as GeminiGenerateResponse;
  const text = payload.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    throw new Error("Gemini rerank returned empty content");
  }

  let parsed: { scores: RerankResult[] };
  try {
    parsed = JSON.parse(text);
  } catch (err) {
    throw new Error(
      `Gemini rerank JSON parse failed: ${err instanceof Error ? err.message : err}`,
    );
  }

  const scoreMap = new Map<string, number>();
  for (const s of parsed.scores ?? []) {
    if (typeof s.id === "string" && typeof s.relevance === "number") {
      scoreMap.set(s.id, Math.max(0, Math.min(1, s.relevance)));
    }
  }

  const result: RerankResult[] = candidates
    .map((c) => ({ id: c.id, relevance: scoreMap.get(c.id) ?? 0 }))
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, topN);

  const durationMs = (performance.now() - startedAt).toFixed(0);
  logger.info("Reranked candidates", {
    candidates: candidates.length,
    topN,
    topRelevance: result[0]?.relevance ?? 0,
    durationMs,
    model: RERANK_MODEL,
  });

  return result;
}
