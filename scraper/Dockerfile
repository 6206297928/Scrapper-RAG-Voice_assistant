FROM mcr.microsoft.com/playwright/python:v1.55.0-jammy

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt \
 && playwright install --with-deps chromium

COPY universal_crawler/ ./universal_crawler/
COPY scrapy.cfg ./
COPY server.py ./

ENV PYTHONPATH=/app \
    SCRAPY_SETTINGS_MODULE=universal_crawler.settings \
    LOG_LEVEL=INFO \
    CRAWL_TIMEOUT_SECONDS=120

EXPOSE 8080
CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8080"]
