"""
Voice Agent - LiveKit + Groq (STT + LLM + TTS)

This agent enables real-time voice conversations with the Voice-RAG Assistant chatbot.
It uses:
- Groq for STT, LLM, and TTS (single API key, fastest inference)
- LiveKit for WebRTC audio transport
"""

import asyncio
import json
import logging
import os
from typing import Optional

import aiohttp
from dotenv import load_dotenv

from livekit.agents import (
    Agent,
    AgentSession,
    JobContext,
    WorkerOptions,
    cli,
    llm,
)
from livekit.plugins import groq, silero

load_dotenv()

logger = logging.getLogger("voice-agent")
logger.setLevel(logging.INFO)


# ISO language code → display name (used in the system prompt so the LLM
# replies in the right language). Groq Llama 3.3 70B is natively multilingual.
LANGUAGE_NAMES = {
    "en": "English",
    "es": "Spanish",
    "fr": "French",
    "de": "German",
    "it": "Italian",
    "pt": "Portuguese",
    "ja": "Japanese",
    "ko": "Korean",
    "zh": "Chinese",
    "ar": "Arabic",
    "hi": "Hindi",
}

# Groq Orpheus has English + Arabic models. Pick the closest TTS model for the
# requested language. Non-English-non-Arabic languages fall back to English
# Orpheus — STT and LLM are multilingual, but the spoken voice will be English-
# accented. Swap in a different TTS provider (ElevenLabs multilingual) when
# this becomes a hard requirement.
def tts_model_for_language(language: str, requested_model: str | None) -> str:
    if language and language.lower().startswith("ar"):
        return "canopylabs/orpheus-arabic-saudi"
    return requested_model or "canopylabs/orpheus-v1-english"


# Groq Orpheus voices grouped by model. If the resolved model doesn't support
# the requested voice (e.g., user picked autumn but model switched to Arabic),
# fall back to the first valid voice.
ORPHEUS_ENGLISH_VOICES = {"autumn", "diana", "hannah", "austin", "daniel", "troy"}
ORPHEUS_ARABIC_VOICES = {"fahad", "sultan", "lulwa", "noura"}


def tts_voice_for_model(tts_model: str, requested_voice: str | None) -> str:
    if "arabic" in tts_model:
        if requested_voice in ORPHEUS_ARABIC_VOICES:
            return requested_voice
        return "fahad"
    if requested_voice in ORPHEUS_ENGLISH_VOICES:
        return requested_voice
    return "autumn"


# Backend base URL for RAG retrieval calls. In docker-compose this is
# `http://app:3000` (internal hostname). Falls back for local dev.
RAG_API_URL = os.environ.get("RAG_API_URL", "http://app:3000")

# Cap retrieval latency. If the API is slow we'd rather answer ungrounded
# than block voice for 5 seconds.
RETRIEVE_TIMEOUT_SECONDS = 2.5


async def retrieve_site_knowledge(
    bot_id: str,
    query: str,
    top_n: int = 3,
) -> list[dict]:
    """Fetch top-N raw chunks from /api/widget/:botId/retrieve.

    Returns [] on any failure — voice path is best-effort, never blocks.
    """
    if not bot_id or not query.strip():
        return []
    url = f"{RAG_API_URL}/api/widget/{bot_id}/retrieve"
    payload = {"query": query, "topN": top_n}
    try:
        timeout = aiohttp.ClientTimeout(total=RETRIEVE_TIMEOUT_SECONDS)
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.post(url, json=payload) as resp:
                if resp.status != 200:
                    logger.warning(
                        f"retrieve returned {resp.status} for bot {bot_id}"
                    )
                    return []
                data = await resp.json()
                if data.get("refused"):
                    return []
                return data.get("chunks") or []
    except asyncio.TimeoutError:
        logger.warning(f"retrieve timed out after {RETRIEVE_TIMEOUT_SECONDS}s")
        return []
    except Exception as e:
        logger.warning(f"retrieve failed: {e}")
        return []


def format_knowledge_block(chunks: list[dict]) -> str:
    """Pack retrieved chunks into a system-message block for the LLM."""
    if not chunks:
        return ""
    blocks = []
    for i, c in enumerate(chunks, start=1):
        title = c.get("pageTitle", "")
        url = c.get("pageUrl", "")
        text = (c.get("chunkText") or "").strip()[:1500]
        blocks.append(f"[Source {i}] {title} — {url}\n{text}")
    body = "\n\n---\n\n".join(blocks)
    return (
        "SITE KNOWLEDGE (use as ground truth for site-specific facts):\n\n"
        f"{body}\n\n"
        "Rules: Answer ONLY from these passages for site-specific questions "
        "(company, people, products, pricing, contact). If the passages don't "
        "contain the answer, say you don't have that information from the site. "
        "Never invent facts, names, URLs, or contact info."
    )


class VoiceAgent(Agent):
    """LiveKit Agent subclass that injects RAG context per turn."""

    def __init__(
        self,
        bot_id: str = "",
        bot_config: Optional[dict] = None,
        voice_config: Optional[dict] = None,
        instructions: str = "",
    ):
        super().__init__(instructions=instructions)
        self.bot_id = bot_id
        self.bot_config = bot_config or {}
        self.voice_config = voice_config or {}

    async def on_user_turn_completed(
        self,
        turn_ctx: llm.ChatContext,
        new_message: llm.ChatMessage,
    ) -> None:
        """Fired after STT, before LLM. Inject RAG chunks into the context."""
        # new_message.content is usually a list; flatten to a query string.
        content = new_message.content
        if isinstance(content, list):
            query = " ".join(c for c in content if isinstance(c, str)).strip()
        else:
            query = str(content or "").strip()
        if not query:
            return

        chunks = await retrieve_site_knowledge(self.bot_id, query, top_n=3)
        if not chunks:
            return

        knowledge = format_knowledge_block(chunks)
        turn_ctx.add_message(role="system", content=knowledge)
        logger.info(f"injected {len(chunks)} RAG chunks for turn")


class _VoiceConfigResolver:
    """Voice STT/TTS picker (extracted from VoiceAgent so the Agent
    subclass stays focused on per-turn behavior)."""

    def __init__(
        self,
        bot_config: Optional[dict] = None,
        voice_config: Optional[dict] = None,
    ):
        self.bot_config = bot_config or {}
        self.voice_config = voice_config or {}

        # Extract voice settings
        self.stt_model = self.voice_config.get("stt_model", "whisper-large-v3-turbo")
        self.language = self.voice_config.get("language", "en")
        # TTS model + voice depend on the language (Orpheus has separate
        # English and Arabic models with non-overlapping voice catalogs).
        self.tts_model = tts_model_for_language(
            self.language, self.voice_config.get("tts_model")
        )
        self.tts_voice = tts_voice_for_model(
            self.tts_model, self.voice_config.get("tts_voice")
        )

    def get_system_prompt(self) -> str:
        """Generate system prompt from bot configuration"""
        org = self.bot_config.get("organization", {})
        persona = self.bot_config.get("persona", {})
        target = self.bot_config.get("acquisition_target", {})
        guardrails = self.bot_config.get("guardrails", {})

        org_name = org.get("name", "the company")
        persona_name = persona.get("name", "Assistant")
        persona_role = persona.get("role", "Customer Service Representative")
        persona_tone = persona.get("tone", "Friendly")
        entity_name = target.get("entity_name", "customer")

        forbidden = guardrails.get("forbidden_topics", [])
        forbidden_str = ", ".join(forbidden) if forbidden else "none specified"

        knowledge_base = org.get("knowledge_base", "")

        return f"""You are {persona_name}, a {persona_role} at {org_name}.

Your personality:
- Tone: {persona_tone}
- You are helping potential {entity_name}s

Organization context:
{org.get('context', '')}

Static knowledge base (fallback only — prefer SITE KNOWLEDGE blocks when present):
{knowledge_base}

VOICE OUTPUT RULES (strict — this is spoken aloud):
- Reply in 1-2 short sentences. Never more than 3.
- NO markdown. No asterisks, no bullet points, no brackets, no URLs read aloud.
- Speak naturally as you would on a phone call.
- Numbers: speak them out ("ninety-nine dollars", not "$99").
- If you mention a page, just say "on our pricing page" — don't speak the URL.

ANSWERING SITE QUESTIONS:
- A SITE KNOWLEDGE block may appear at the end of the conversation context with retrieved passages from the company's website.
- Treat that block as the ONLY source of truth for facts about the company, products, pricing, people, and contact info.
- If a SITE KNOWLEDGE block is present but doesn't contain the answer, say: "I don't have that detail handy — would you like me to pass your question along?"
- If NO SITE KNOWLEDGE block is present, handle small talk and lead capture only. Refuse to answer site-specific factual questions.
- Never invent names, prices, emails, or URLs.

Lead capture: ask for the user's name, email, or other relevant info naturally during conversation.

Forbidden topics: {forbidden_str}
{guardrails.get('sensitive_info_policy', '')}

Language: Respond in {LANGUAGE_NAMES.get(self.language, self.language.upper())}. Match the user's language if they speak in something different."""


async def entrypoint(ctx: JobContext):
    """Main entry point for the voice agent"""
    import json

    logger.info(f"Voice agent starting for room: {ctx.room.name}")

    # Connect FIRST so the room object is fully populated (metadata, etc.)
    await ctx.connect()

    # Read config from room metadata (set by the Next.js token route via
    # RoomServiceClient.createRoom). If empty, fall back to job metadata
    # or defaults.
    bot_id = ""
    bot_config = {}
    voice_config = {}

    raw_room_meta = ctx.room.metadata or ""
    raw_job_meta = getattr(ctx.job, "metadata", "") or ""
    logger.info(
        f"metadata sources: room_metadata_len={len(raw_room_meta)}, "
        f"job_metadata_len={len(raw_job_meta)}"
    )

    for source_name, raw in (("room", raw_room_meta), ("job", raw_job_meta)):
        if not raw:
            continue
        try:
            parsed = json.loads(raw)
            bot_id = parsed.get("bot_id", bot_id) or bot_id
            bot_config = parsed.get("bot_config", bot_config) or bot_config
            voice_config = parsed.get("voice_config", voice_config) or voice_config
            logger.info(f"loaded config from {source_name} metadata")
            break
        except json.JSONDecodeError:
            logger.warning(f"Could not parse {source_name} metadata: {raw[:80]}")

    logger.info(
        f"resolved: bot_id={bot_id or '<missing>'}, "
        f"tts_voice={voice_config.get('tts_voice', '<default>')}, "
        f"tts_model={voice_config.get('tts_model', '<default>')}, "
        f"stt_model={voice_config.get('stt_model', '<default>')}, "
        f"language={voice_config.get('language', '<default>')}"
    )

    # Resolver picks STT/TTS models and builds the base system prompt.
    resolver = _VoiceConfigResolver(bot_config=bot_config, voice_config=voice_config)

    # Initialize plugins
    # Groq STT (Speech-to-Text)
    stt = groq.STT(
        model=resolver.stt_model,
        language=resolver.language,
    )

    # Groq TTS (Text-to-Speech)
    tts = groq.TTS(
        model=resolver.tts_model,
        voice=resolver.tts_voice,
    )

    # Groq Llama LLM
    llm_engine = groq.LLM(
        model="llama-3.3-70b-versatile",
        temperature=0.7,
    )

    # Voice Activity Detection
    vad = silero.VAD.load()

    # Custom Agent subclass: injects RAG context per turn via
    # on_user_turn_completed.
    agent = VoiceAgent(
        bot_id=bot_id,
        bot_config=bot_config,
        voice_config=voice_config,
        instructions=resolver.get_system_prompt(),
    )

    session = AgentSession(
        stt=stt,
        llm=llm_engine,
        tts=tts,
        vad=vad,
    )

    # ----- Live transcript forwarding -----
    # Publish each transcript event as JSON over LiveKit's data channel so the
    # client can render captions in the chat window.
    async def _publish_data(payload: dict) -> None:
        try:
            await ctx.room.local_participant.publish_data(
                json.dumps(payload).encode("utf-8"),
                reliable=True,
                topic="transcript",
            )
        except Exception as e:
            logger.warning(f"failed to publish transcript: {e}")

    def _on_user_transcribed(ev):
        # Emitted with is_final=False (interim) and is_final=True (final).
        asyncio.create_task(
            _publish_data(
                {
                    "role": "user",
                    "text": ev.transcript,
                    "final": bool(ev.is_final),
                }
            )
        )

    def _on_conversation_item_added(ev):
        item = ev.item
        role = getattr(item, "role", None)
        content = getattr(item, "content", None)
        if role != "assistant" or not content:
            return
        # content can be a list of strings/parts or a single string; coerce safely.
        if isinstance(content, str):
            text = content.strip()
        elif isinstance(content, (list, tuple)):
            text = " ".join(c for c in content if isinstance(c, str)).strip()
        else:
            text = str(content).strip()
        if not text:
            return
        asyncio.create_task(
            _publish_data(
                {
                    "role": "agent",
                    "text": text,
                    "final": True,
                }
            )
        )

    session.on("user_input_transcribed", _on_user_transcribed)
    session.on("conversation_item_added", _on_conversation_item_added)
    # ----- end transcript forwarding -----

    # Start the agent
    await session.start(
        room=ctx.room,
        agent=agent,
    )

    # Send initial greeting if configured
    persona = bot_config.get("persona", {})
    first_message = persona.get("first_message")
    if first_message:
        await session.say(first_message)
    else:
        persona_name = persona.get("name", "Assistant")
        await session.say(f"Hi! I'm {persona_name}. How can I help you today?")

    logger.info("Voice agent started successfully")


def main():
    """Run the voice agent worker"""
    cli.run_app(
        WorkerOptions(
            entrypoint_fnc=entrypoint,
            # Agent can handle multiple concurrent sessions
            max_retry=3,
        ),
    )


if __name__ == "__main__":
    main()
