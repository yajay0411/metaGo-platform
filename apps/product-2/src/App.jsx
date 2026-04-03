import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <div className='min-h-screen bg-white'>
      <nav className="border-b border-gray-200 px-6 py-3">
        <div className="flex items-center gap-6">
          <span className="font-semibold text-gray-900">Product-2 (No TS)</span>
          <Link to="/" className="text-sm text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link to="/dashboard" className="text-sm text-gray-600 hover:text-gray-900">
            Dashboard
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
