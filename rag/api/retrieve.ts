import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { logger } from "@/lib/logger";
import { searchBotKnowledge } from "@/lib/search";

/**
 * POST /api/widget/:botId/retrieve  { query, topN? }
 *
 * Lean retrieval endpoint for the voice agent. Returns RAW chunks (no LLM
 * synthesis) and skips the reranker for ~500ms latency savings.
 *
 *   {
 *     chunks: [{ pageUrl, pageTitle, chunkText }],
 *     refused: boolean,
 *     confidence: number,
 *     durationMs: number,
 *   }
 *
 * Designed to be called server-to-server from voice-agent. No CORS needed
 * on the happy path, but headers are added for safety.
 */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ botId: string }> },
) {
  const origin = request.headers.get("origin");
  try {
    const { botId } = await params;
    const body = (await request.json().catch(() => ({}))) as {
      query?: string;
      topN?: number;
    };
    const query = body.query?.trim();
    const topN = Math.min(Math.max(body.topN ?? 3, 1), 10);

    if (!query) {
      return withCors(
        NextResponse.json({ error: "query is required" }, { status: 400 }),
        origin,
      );
    }

    const bot = await prisma.botConfig.findUnique({
      where: { id: botId },
      select: { id: true },
    });
    if (!bot) {
      return withCors(
        NextResponse.json({ error: "Bot not found" }, { status: 404 }),
        origin,
      );
    }

    const result = await searchBotKnowledge(botId, query, {
      topN,
      skipRerank: true,
    });

    const chunks = result.chunks.map((c) => ({
      pageUrl: c.pageUrl,
      pageTitle: c.pageTitle,
      chunkText: c.chunkText,
    }));

    logger.info("Voice retrieve", {
      botId,
      chunksReturned: chunks.length,
      refused: result.refused,
      confidence: result.confidence,
      durationMs: result.durationMs,
    });

    return withCors(
      NextResponse.json({
        chunks,
        refused: result.refused,
        confidence: result.confidence,
        durationMs: result.durationMs,
      }),
      origin,
    );
  } catch (error) {
    logger.error("Voice retrieve failed", { error: String(error) });
    return withCors(
      NextResponse.json({ error: "Retrieve failed" }, { status: 500 }),
      origin,
    );
  }
}

export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get("origin");
  return withCors(new NextResponse(null, { status: 204 }), origin);
}

function withCors(response: NextResponse, origin: string | null): NextResponse {
  response.headers.set("Access-Control-Allow-Origin", origin || "*");
  response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
}
