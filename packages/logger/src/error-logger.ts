import { Logger } from "./logger";

export class ErrorLogger extends Logger {
  constructor(context: string) {
    super(context, "error");
  }

  captureException(error: Error, data?: Record<string, unknown>): void {
    this.error(error.message, {
      ...data,
      stack: error.stack,
      name: error.name,
    });
  }

  captureMessage(message: string, data?: Record<string, unknown>): void {
    this.error(message, data);
  }
}
