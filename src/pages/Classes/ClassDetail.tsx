import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { classService } from "@/services/classService";
import { studentService } from "@/services/studentService";
import Timetable from "@/components/timetable/Timetable";
import type {
  PopulatedClass,
  PopulatedStudent,
  PopulatedTimetableEntry,
} from "@/types";

export default function ClassDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [classInfo, setClassInfo] = useState<PopulatedClass | null>(null);
  const [timetable, setTimetable] = useState<PopulatedTimetableEntry[]>([]);
  const [students, setStudents] = useState<PopulatedStudent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        if (!id) return;
        setLoading(true);

        const cls = await classService.getById(id);
        setClassInfo(cls);
        setTimetable(cls.timetable);

        const studs = await studentService.getByClass(id);
        setStudents(studs);
      } catch (err) {
        console.error("Failed to load class detail", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading) {
    return <div className="p-6 text-gray-500">Loading...</div>;
  }

  if (!classInfo) {
    return <div className="p-6 text-red-500">Class not found</div>;
  }

  return (
    <div className="p-6 space-y-8">
      {/* Class Info */}
      <div className="bg-white shadow rounded-lg p-4">
        <h1 className="text-2xl font-bold text-indigo-700 mb-2">
          Class {classInfo.className}
        </h1>
        <p>
          <span className="font-medium">Homeroom Teacher:</span>{" "}
          {classInfo.homeroomTeacher?.name || "N/A"}
        </p>
        <p>
          <span className="font-medium">Leader:</span>{" "}
          {classInfo.leader?.name || "Not elected"}
        </p>
      </div>

      {/* Timetable */}
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-3">Timetable</h2>
        <Timetable entries={timetable} />
      </div>

      {/* Students List */}
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-3">Students</h2>
        <div className="overflow-x-auto shadow rounded-lg">
          <table className="min-w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-3 py-2 text-left">Student ID</th>
                <th className="border px-3 py-2 text-left">Name</th>
                <th className="border px-3 py-2 text-left">Date of Birth</th>
                <th className="border px-3 py-2 text-left">Address</th>
                <th className="border px-3 py-2 text-left">Role</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => {
                const isLeader = classInfo.leader?._id === s._id;
                return (
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
                    <td className="border px-3 py-2 text-center">
                      {isLeader ? "Leader" : "—"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {students.length === 0 && (
            <div className="p-3 text-gray-500">No students found</div>
          )}
        </div>
      </div>
    </div>
  );
}
