import { Logger } from "./logger";

export class ConsoleLogger extends Logger {
  constructor(context: string) {
    super(context, "debug");
  }

  table(data: Record<string, unknown>[] | Record<string, unknown>): void {
    console.table(data);
  }

  group(label: string): void {
    console.group(label);
  }

  groupEnd(): void {
    console.groupEnd();
  }

  time(label: string): void {
    console.time(label);
  }

  timeEnd(label: string): void {
    console.timeEnd(label);
  }
}
