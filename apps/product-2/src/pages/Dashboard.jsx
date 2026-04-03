import { Logger } from "@repo/logger";

const logger = new Logger("product-2:dashboard");

export default function Dashboard() {
  logger.info("Dashboard page rendered");

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Status</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900">Active</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Version</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900">1.0.0</p>
        </div>
      </div>
    </main>
  );
}
