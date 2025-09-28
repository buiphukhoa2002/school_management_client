import { Link } from "react-router-dom";

type TeacherCardProps = {
  id: string;
  name: string;
  subject: string;
  email: string;
};

export default function TeacherCard({
  id,
  name,
  subject,
  email,
}: TeacherCardProps) {
  return (
    <div
      className="bg-white rounded-xl shadow hover:shadow-lg p-4 transition"
      id={id}
    >
      <h2 className="text-lg font-semibold text-sky-700">{name}</h2>
      <p className="text-sm text-gray-600">Subject: {subject}</p>

      <p className="text-sm text-gray-600">
        <a
          href={`mailto:${email}`}
          className="text-sm text-gray-600 hover:underline"
        >
          {email}
        </a>
      </p>

      <Link
        to={`/teachers`}
        className="mt-3 inline-block text-sky-600 hover:underline text-sm"
      >
        View profile →
      </Link>
    </div>
  );
}
