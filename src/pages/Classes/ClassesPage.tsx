import { useFetch } from "@/hooks/useFetch";
import { classService } from "@/services/classService";
import type { Class } from "@/types";
import { useNavigate } from "react-router-dom";

export default function Classes() {
  const {
    data: classes,
    loading,
    error,
  } = useFetch<Class[]>(() => classService.getAll(), []);
  const navigate = useNavigate();

  if (loading) return <p className="text-center mt-8">Loading classes...</p>;
  if (error)
    return <p className="text-center mt-8 text-red-500">Error: {error}</p>;
  if (!classes || classes.length === 0)
    return <p className="text-center mt-8">No classes found</p>;

  const handleRowClick = (id: string) => {
    navigate(`/classes/${id}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Classes</h1>

      <div className="overflow-x-auto shadow rounded-lg">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Class Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Homeroom Teacher
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Leader
              </th>
            </tr>
          </thead>
          <tbody>
            {classes.map((cls) => (
              <tr
                key={cls._id}
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => handleRowClick(cls._id)}
              >
                <td className="border border-gray-300 px-4 py-2">
                  {cls.className}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {cls.homeroomTeacher?.name || "—"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {cls.leader?.name || "Not elected"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
