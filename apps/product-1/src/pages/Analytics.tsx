import { Logger } from "@repo/logger";

const logger = new Logger("product-1:analytics");

export default function Analytics() {
  logger.info("Analytics page rendered");

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Analytics</h1>
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Page Views (Last 7 days)</h3>
        <div className="flex items-end gap-2 h-40">
          {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full bg-blue-500 rounded-t" style={{ height: `${h}%` }} />
              <span className="text-xs text-gray-400">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
