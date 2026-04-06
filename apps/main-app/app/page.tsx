"use client";

import { Logger } from "@repo/logger";

const logger = new Logger("main-app");

export default function Home() {
  logger.info("Home page rendered");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center p-10 bg-white rounded-xl shadow-2xl max-w-2xl mx-4 border border-blue-200 backdrop-blur-sm bg-opacity-95">
        <h1 className="text-6xl font-bold text-blue-900 mb-4">
          {process.env.NEXT_PUBLIC_APP_NAME || "MetaGo Health Platform"}
        </h1>
        <p className="text-lg text-blue-700 mb-2">Healthcare Management Solution</p>
        <p className="text-sm text-blue-600 font-medium">
          Next.js App Router &middot; TypeScript &middot; @repo/logger
        </p>
      </div>
    </main>
  );
}
