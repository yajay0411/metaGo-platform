"use client";

import { Logger } from "@repo/logger";

const logger = new Logger("main-app");

export default function Home() {
  logger.info("Home page rendered");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">MetaGo Health Platform</h1>
        <p className="text-lg text-gray-600 mb-2">Healthcare Management Solution</p>
        <p className="text-sm text-gray-400">
          main-app &middot; Next.js App Router &middot; @repo/logger integrated
        </p>
      </div>
    </main>
  );
}
