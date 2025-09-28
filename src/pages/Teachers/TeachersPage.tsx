import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { teacherService } from "@/services/teacherService";
import TeacherCard from "@/components/cards/TeacherCard";
import type { Teacher, Subject } from "@/types";

const subjects: Subject[] = [
  "Math",
  "Literature",
  "English",
  "Physics",
  "Chemistry",
  "Biology",
  "History",
  "Geography",
  "PE",
  "Art",
  "Technology",
];

export default function Teachers() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [filtered, setFiltered] = useState<Teacher[]>([]);
  const [subjectFilter, setSubjectFilter] = useState<Subject | "All">("All");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchTeachers() {
      try {
        setLoading(true);
        const data = await teacherService.getAll();
        setTeachers(data);
        setFiltered(data);
      } catch (err) {
        console.error("Failed to fetch teachers", err);
      } finally {
        setLoading(false);
      }
    }
    fetchTeachers();
  }, []);

  useEffect(() => {
    let list = [...teachers];

    if (subjectFilter !== "All") {
      list = list.filter((t) => t.subjects.includes(subjectFilter));
    }

    if (search.trim() !== "") {
      list = list.filter((t) =>
        t.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltered(list);
  }, [subjectFilter, search, teachers]);

  if (loading) {
    return <div className="p-6 text-gray-500">Loading teachers...</div>;
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-indigo-700">Our Teachers</h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded-lg w-full md:w-1/3"
        />

        <select
          value={subjectFilter}
          onChange={(e) => setSubjectFilter(e.target.value as Subject | "All")}
          className="border p-2 rounded-lg w-full md:w-1/4"
        >
          <option value="All">All Subjects</option>
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Teacher Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((teacher) => (
          <div
            key={teacher._id}
            onClick={() => navigate(`/teachers/${teacher._id}`)}
            className="cursor-pointer hover:scale-[1.02] transition"
          >
            <TeacherCard
              id={teacher._id}
              name={teacher.name}
              subject={teacher.subjects[0]}
              email={teacher.email}
            />
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-gray-500">No teachers found.</p>
      )}
    </div>
  );
}
