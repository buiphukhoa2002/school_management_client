import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { studentService } from "@/services/studentService";
import type { PopulatedStudent } from "@/types";

export default function Students() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<PopulatedStudent[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      setLoading(true);
      const students = await studentService.searchByName(query);
      setResults(students);
    } catch (err) {
      console.error("Search failed", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-6 space-y-8">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex gap-3">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search student by name..."
          className="flex-1 border rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Search
        </button>
      </form>

      {/* Results Table */}
      <div className="overflow-x-auto shadow rounded-lg">
        <table className="min-w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left">Student ID</th>
              <th className="border px-3 py-2 text-left">Name</th>
              <th className="border px-3 py-2 text-left">Date of Birth</th>
              <th className="border px-3 py-2 text-left">Address</th>
              <th className="border px-3 py-2 text-left">Class</th>
            </tr>
          </thead>
          <tbody>
            {results.map((s) => (
              <tr
                key={s._id}
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => navigate(`/students/${s._id}`)}
              >
                <td className="border px-3 py-2">{s.studentCode}</td>
                <td className="border px-3 py-2 text-indigo-600 font-medium hover:underline">
                  {s.name}
                </td>
                <td className="border px-3 py-2">
                  {new Date(s.dateOfBirth).toLocaleDateString()}
                </td>
                <td className="border px-3 py-2">{s.address}</td>
                <td className="border px-3 py-2">
                  {s.classId?.className || "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!loading && results.length === 0 && query && (
          <div className="p-3 text-gray-500">No students found</div>
        )}
      </div>

      {loading && <div className="text-gray-500">Searching...</div>}
    </div>
  );
}
