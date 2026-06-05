type LogLevel = "debug" | "info" | "warn" | "error";

interface LogContext {
  [key: string]: unknown;
}

const isDevelopment = process.env.environment === "development";

const colors = {
  debug: "\x1b[36m", // cyan
  info: "\x1b[32m",  // green
  warn: "\x1b[33m",  // yellow
  error: "\x1b[31m", // red
  reset: "\x1b[0m",
};

function formatTimestamp(): string {
  return new Date().toISOString();
}

function formatContext(context?: LogContext): string {
  if (!context || Object.keys(context).length === 0) return "";
  return " " + JSON.stringify(context);
}

function log(level: LogLevel, message: string, context?: LogContext): void {
  // Always log errors, only log other levels in development
  if (level !== "error" && !isDevelopment) return;

  const timestamp = formatTimestamp();
  const color = colors[level];
  const reset = colors.reset;
  const contextStr = formatContext(context);

  const formattedMessage = `${color}[${timestamp}] [${level.toUpperCase()}]${reset} ${message}${contextStr}`;

  switch (level) {
    case "debug":
      console.debug(formattedMessage);
      break;
    case "info":
      console.info(formattedMessage);
      break;
    case "warn":
      console.warn(formattedMessage);
      break;
    case "error":
      console.error(formattedMessage);
      break;
  }
}

export const logger = {
  debug: (message: string, context?: LogContext) => log("debug", message, context),
  info: (message: string, context?: LogContext) => log("info", message, context),
  warn: (message: string, context?: LogContext) => log("warn", message, context),
  error: (message: string, context?: LogContext) => log("error", message, context),

  // Helper for API request logging
  api: (method: string, path: string, context?: LogContext) => {
    log("info", `${method} ${path}`, context);
  },

  // Helper for timing operations
  time: async <T>(label: string, fn: () => Promise<T>): Promise<T> => {
    const start = performance.now();
    try {
      const result = await fn();
      const duration = (performance.now() - start).toFixed(2);
      log("debug", `${label} completed`, { durationMs: duration });
      return result;
    } catch (error) {
      const duration = (performance.now() - start).toFixed(2);
      log("error", `${label} failed`, { durationMs: duration, error: String(error) });
      throw error;
    }
  },
};

export default logger;
