import { Logger } from "@repo/logger";

const logger = new Logger("product-1");

export default function Home() {
  logger.info("Home page rendered");

  return (
    <main className="flex min-h-[calc(100vh-53px)] flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {import.meta.env.VITE_APP_NAME || "Hello World — React"}
        </h1>
        <p className="text-lg text-gray-600 mb-2">MetaGo Health — Product 1</p>
        <p className="text-sm text-gray-400">
          product-1 &middot; React + Vite &middot; @repo/logger integrated
        </p>
      </div>
    </main>
  );
}
