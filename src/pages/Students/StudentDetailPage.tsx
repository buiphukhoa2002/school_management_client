import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { studentService } from "@/services/studentService";
import { classService } from "@/services/classService";
import Timetable from "@/components/timetable/Timetable";
import type {
  PopulatedStudent,
  PopulatedClass,
  PopulatedTimetableEntry,
} from "@/types";

export default function StudentDetail() {
  const { id } = useParams<{ id: string }>();

  const [student, setStudent] = useState<PopulatedStudent | null>(null);
  const [classInfo, setClassInfo] = useState<PopulatedClass | null>(null);
  const [timetable, setTimetable] = useState<PopulatedTimetableEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (!id) return;
      try {
        setLoading(true);

        const stud = await studentService.getById(id);
        setStudent(stud);

        if (stud.classId?._id) {
          const cls = await classService.getById(stud.classId._id);
          setClassInfo(cls);
          setTimetable(cls.timetable);
        }
      } catch (err) {
        console.error("Failed to load student detail", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading) {
    return <div className="p-6 text-gray-500">Loading...</div>;
  }

  if (!student) {
    return <div className="p-6 text-red-500">Student not found</div>;
  }

  return (
    <div className="p-6 space-y-8">
      {/* Student Info */}
      <div className="bg-white shadow rounded-lg p-4">
        <h1 className="text-2xl font-bold text-indigo-700 mb-2">
          {student.name}
        </h1>
        <p>
          <span className="font-medium">Date of Birth:</span>{" "}
          {new Date(student.dateOfBirth).toLocaleDateString()}
        </p>
        <p>
          <span className="font-medium">Address:</span> {student.address}
        </p>
        <p>
          <span className="font-medium">Class:</span>{" "}
          {student.classId?.className || "—"}
        </p>
      </div>

      {/* Class Info */}
      {classInfo && (
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Class {classInfo.className}
          </h2>
          <p>
            <span className="font-medium">Homeroom Teacher:</span>{" "}
            {classInfo.homeroomTeacher?.name || "N/A"}
          </p>
          <p>
            <span className="font-medium">Leader:</span>{" "}
            {classInfo.leader?.name || "Not elected"}
          </p>
        </div>
      )}

      {/* Timetable */}
      {timetable.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            Timetable
          </h2>
          <Timetable entries={timetable} />
        </div>
      )}
    </div>
  );
}
