# Voice Agent - Dockerfile
# LiveKit Agents with Groq (STT + LLM + TTS) and Silero VAD

FROM python:3.12-slim

WORKDIR /app

# Build deps + ffmpeg (audio) + curl (healthcheck)
RUN apt-get update && apt-get install -y --no-install-recommends \
        build-essential \
        libffi-dev \
        libssl-dev \
        ffmpeg \
        curl \
    && rm -rf /var/lib/apt/lists/*

# Install Python deps first for layer caching
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy agent code
COPY agent.py .

# Note: model files (Silero VAD, turn detector) are downloaded on first
# session use. Skipping pre-download here keeps the image build fast
# (~30s vs ~5 min) at the cost of a few extra seconds on the very first call.

# Values come from .env at runtime via docker-compose env_file.
ENV LIVEKIT_URL=""
ENV LIVEKIT_API_KEY=""
ENV LIVEKIT_API_SECRET=""
ENV GROQ_API_KEY=""

HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --retries=3 \
    CMD python -c "import sys; sys.exit(0)" || exit 1

# `start` runs the worker in production mode (no file-watching)
CMD ["python", "agent.py", "start"]
