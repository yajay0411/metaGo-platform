import type { LogLevel, LogEntry } from "./types";

export class Logger {
  private context: string;
  private minLevel: LogLevel;

  private static readonly levels: Record<LogLevel, number> = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  };

  constructor(context: string, minLevel: LogLevel = "info") {
    this.context = context;
    this.minLevel = minLevel;
  }

  private shouldLog(level: LogLevel): boolean {
    return Logger.levels[level] >= Logger.levels[this.minLevel];
  }

  private createEntry(level: LogLevel, message: string, data?: Record<string, unknown>): LogEntry {
    return {
      level,
      message,
      timestamp: new Date().toISOString(),
      context: this.context,
      data,
    };
  }

  debug(message: string, data?: Record<string, unknown>): void {
    if (this.shouldLog("debug")) {
      const entry = this.createEntry("debug", message, data);
      console.debug(`[${entry.timestamp}] [DEBUG] [${entry.context}]`, message, data ?? "");
    }
  }

  info(message: string, data?: Record<string, unknown>): void {
    if (this.shouldLog("info")) {
      const entry = this.createEntry("info", message, data);
      console.info(`[${entry.timestamp}] [INFO] [${entry.context}]`, message, data ?? "");
    }
  }

  warn(message: string, data?: Record<string, unknown>): void {
    if (this.shouldLog("warn")) {
      const entry = this.createEntry("warn", message, data);
      console.warn(`[${entry.timestamp}] [WARN] [${entry.context}]`, message, data ?? "");
    }
  }

  error(message: string, data?: Record<string, unknown>): void {
    if (this.shouldLog("error")) {
      const entry = this.createEntry("error", message, data);
      console.error(`[${entry.timestamp}] [ERROR] [${entry.context}]`, message, data ?? "");
    }
  }
}
