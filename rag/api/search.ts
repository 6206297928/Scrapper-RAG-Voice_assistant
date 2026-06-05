import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { logger } from "@/lib/logger";
import { createChatCompletion } from "@/lib/groq";
import { searchBotKnowledge } from "@/lib/search";

/**
 * POST /api/widget/:botId/search  { query }
 *
 * Public widget endpoint. Returns:
 *   {
 *     answer: string | null,        // null when refused
 *     citations: [{url, title, relevance}],
 *     confidence: number,           // top reranker score, [0,1]
 *     refused: boolean,             // true if confidence < threshold
 *     durationMs: number,
 *   }
 *
 * No auth — the widget runs on customer sites. In production this should be
 * gated by allowedDomains + per-bot rate limit; left as a follow-up.
 */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ botId: string }> },
) {
  const origin = request.headers.get("origin");
  try {
    const { botId } = await params;
    const body = (await request.json().catch(() => ({}))) as { query?: string };
    const query = body.query?.trim();

    if (!query) {
      return withCors(
        NextResponse.json({ error: "query is required" }, { status: 400 }),
        origin,
      );
    }

    const bot = await prisma.botConfig.findUnique({
      where: { id: botId },
      select: { id: true, isActive: true, botName: true },
    });
    if (!bot) {
      return withCors(
        NextResponse.json({ error: "Bot not found" }, { status: 404 }),
        origin,
      );
    }
    if (!bot.isActive) {
      return withCors(
        NextResponse.json({ error: "Bot is not active" }, { status: 403 }),
        origin,
      );
    }

    const result = await searchBotKnowledge(botId, query);

    // Refusal path: confidence below threshold OR empty knowledge base.
    if (result.refused) {
      logger.info("Search refused (low confidence)", {
        botId,
        confidence: result.confidence,
        threshold: result.threshold,
      });
      return withCors(
        NextResponse.json({
          answer: null,
          citations: [],
          confidence: result.confidence,
          refused: true,
          durationMs: result.durationMs,
        }),
        origin,
      );
    }

    // Synthesize answer using top chunks as context.
    const answer = await synthesizeAnswer(query, result.chunks);

    const citations = result.pages.slice(0, 3).map((p) => ({
      url: p.pageUrl,
      title: p.pageTitle,
      relevance: p.bestRelevance,
    }));

    return withCors(
      NextResponse.json({
        answer,
        citations,
        confidence: result.confidence,
        refused: false,
        durationMs: result.durationMs,
      }),
      origin,
    );
  } catch (error) {
    logger.error("Search failed", { error: String(error) });
    return withCors(
      NextResponse.json({ error: "Search failed" }, { status: 500 }),
      origin,
    );
  }
}

/**
 * Single-shot Groq call: given query + retrieved chunks, write a short
 * answer that cites pages by URL. Constraint in the prompt forbids using
 * information outside the provided chunks.
 */
async function synthesizeAnswer(
  query: string,
  chunks: { pageUrl: string; pageTitle: string; chunkText: string }[],
): Promise<string> {
  const context = chunks
    .map(
      (c, i) =>
        `[Source ${i + 1}] ${c.pageTitle} — ${c.pageUrl}\n${c.chunkText.slice(0, 1500)}`,
    )
    .join("\n\n---\n\n");

  const prompt = `You are answering a website visitor's question using ONLY the
provided source passages. Do not invent facts.

VISITOR QUESTION:
${query}

SOURCE PASSAGES (cite by [Source N] when relevant):
${context}

RULES:
- Answer in 2-4 sentences.
- Use markdown links to source URLs in the answer when natural, e.g. [pricing page](https://...).
- If the passages don't contain the answer, say so honestly in one sentence.
- Never fabricate information that isn't in the passages.

Answer:`;

  const { content } = await createChatCompletion({
    messages: [{ role: "user", content: prompt }],
    temperature: 0.2,
    maxTokens: 400,
  });

  return content.trim();
}

export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get("origin");
  const response = new NextResponse(null, { status: 204 });
  return withCors(response, origin);
}

function withCors(response: NextResponse, origin: string | null): NextResponse {
  response.headers.set("Access-Control-Allow-Origin", origin || "*");
  response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  response.headers.set("Access-Control-Max-Age", "86400");
  return response;
}
