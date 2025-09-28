import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { teacherService } from "@/services/teacherService";
import TeacherTimetable from "@/components/timetable/TeacherTimetable";
import type { TeacherWithTimetable } from "@/types";

export default function TeacherDetail() {
  const { id } = useParams<{ id: string }>();
  const [teacher, setTeacher] = useState<TeacherWithTimetable | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTeacher() {
      try {
        if (!id) return;
        setLoading(true);
        const data = await teacherService.getById(id);
        setTeacher(data);
      } catch (err) {
        console.error("Failed to fetch teacher", err);
      } finally {
        setLoading(false);
      }
    }
    fetchTeacher();
  }, [id]);

  if (loading) {
    return <div className="p-6 text-gray-500">Loading teacher...</div>;
  }

  if (!teacher) {
    return <div className="p-6 text-red-500">Teacher not found.</div>;
  }

  return (
    <div className="p-6 space-y-6">
      {/* Teacher Info */}
      <div className="bg-white rounded-xl shadow p-6 space-y-2">
        <h1 className="text-3xl font-bold text-indigo-700">{teacher.name}</h1>
        <p className="text-gray-600">
          📧
          <a href={`mailto:${teacher.email}`} className="hover:underline">
            {teacher.email}
          </a>
        </p>
        <p className="text-gray-700">
          📚 Subjects:{" "}
          <span className="font-medium text-indigo-600">
            {teacher.subjects.join(", ")}
          </span>
        </p>
      </div>

      {/* Teacher Timetable */}
      <div>
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">Timetable</h2>
        <TeacherTimetable entries={teacher.timetable} />
      </div>
    </div>
  );
}
