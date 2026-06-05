import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { ingestBotKnowledge } from "@/lib/ingest";

export const maxDuration = 300; // Vercel/Next: allow up to 5 min for the crawl

/**
 * POST /api/bots/:botId/ingest  { url }
 *
 * Crawls the seed URL via crawler-service, embeds each chunk via Gemini,
 * and upserts into BotKnowledgeChunk for later vector retrieval at chat time.
 *
 * Runs synchronously — for sites ≤50 pages this completes in 2–4 minutes.
 * For a larger-scale deploy this should move behind a queue (Inngest /
 * BullMQ / a worker container) and the route should return 202 + ingestId.
 */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ botId: string }> },
) {
  const session = await auth();
  if (!session?.user?.companyId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { botId } = await params;

  let body: { url?: string };
  try {
    body = (await request.json()) as { url?: string };
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const url = body.url?.trim();
  if (!url) {
    return NextResponse.json({ error: "url is required" }, { status: 400 });
  }
  try {
    new URL(url);
  } catch {
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
  }

  const bot = await prisma.botConfig.findFirst({
    where: { id: botId, companyId: session.user.companyId },
    select: { id: true },
  });
  if (!bot) {
    return NextResponse.json({ error: "Bot not found" }, { status: 404 });
  }

  const summary = await ingestBotKnowledge(botId, url);

  const statusCode = summary.status === "SUCCEEDED" ? 200 : 500;
  return NextResponse.json(summary, { status: statusCode });
}

/**
 * GET /api/bots/:botId/ingest
 *
 * Returns the recent ingest history for this bot, so the dashboard can
 * show "last crawl: 47 pages, 3 minutes ago".
 */
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ botId: string }> },
) {
  const session = await auth();
  if (!session?.user?.companyId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { botId } = await params;
  const bot = await prisma.botConfig.findFirst({
    where: { id: botId, companyId: session.user.companyId },
    select: { id: true },
  });
  if (!bot) {
    return NextResponse.json({ error: "Bot not found" }, { status: 404 });
  }

  const [ingests, chunkCount] = await Promise.all([
    prisma.botKnowledgeIngest.findMany({
      where: { botId },
      orderBy: { startedAt: "desc" },
      take: 10,
    }),
    prisma.botKnowledgeChunk.count({ where: { botId } }),
  ]);

  return NextResponse.json({ chunkCount, ingests });
}
