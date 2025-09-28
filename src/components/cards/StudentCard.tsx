import { Link } from "react-router-dom";

type StudentCardProps = {
  id: string;
  name: string;
  dateOfBirth: string;
  className: string;
};

export default function StudentCard({
  id,
  name,
  dateOfBirth,
  className,
}: StudentCardProps) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg p-4 transition">
      <h2 className="text-lg font-semibold text-sky-700">{name}</h2>
      <p className="text-sm text-gray-600">Class: {className}</p>
      <p className="text-sm text-gray-600">DOB: {dateOfBirth}</p>

      <Link
        to={`/students/${id}`}
        className="mt-3 inline-block text-sky-600 hover:underline text-sm"
      >
        View details →
      </Link>
    </div>
  );
}
