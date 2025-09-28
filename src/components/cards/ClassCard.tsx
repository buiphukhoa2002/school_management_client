import { Link } from "react-router-dom";

type ClassCardProps = {
  id: string;
  name: string;
  homeroomTeacher: string;
  studentCount: number;
};

export default function ClassCard({
  id,
  name,
  homeroomTeacher,
  studentCount,
}: ClassCardProps) {
  return (
    <div
      className="bg-white rounded-xl shadow hover:shadow-lg p-4 transition"
      id={id}
    >
      <h2 className="text-lg font-semibold text-sky-700">{name}</h2>
      <p className="text-sm text-gray-600">Homeroom: {homeroomTeacher}</p>
      <p className="text-sm text-gray-600">Students: {studentCount}</p>

      <Link
        to={`/classes`}
        className="mt-3 inline-block text-sky-600 hover:underline text-sm"
      >
        View details →
      </Link>
    </div>
  );
}
