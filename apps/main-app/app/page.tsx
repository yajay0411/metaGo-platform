"use client";

import { Logger } from "@repo/logger";

const logger = new Logger("main-app");

export default function Home() {
  logger.info("Home page rendered");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-2xl mx-4">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">MetaGo Health Platform</h1>
        <p className="text-lg text-gray-600 mb-2">Healthcare Management Solution</p>
        <p className="text-sm text-gray-400">
          Next.js App Router &middot; TypeScript &middot; @repo/logger
        </p>
      </div>
    </main>
  );
}
