import { Link } from "react-router-dom";
import { ClassCard, TeacherCard } from "../../components/cards";

export default function HomePage() {
  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="bg-sky-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Welcome to Nguyen Van To School
          </h1>
          <p className="mt-4 text-lg md:text-xl text-sky-100">
            Inspiring knowledge, creativity, and growth since 1995.
          </p>
          <Link
            to="/classes"
            className="mt-6 inline-block bg-white text-sky-600 px-6 py-3 rounded-lg font-semibold hover:bg-sky-50 transition"
          >
            Explore Classes
          </Link>
        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
          About Our School
        </h2>
        <p className="text-center max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Nguyen Van To Secondary School is dedicated to academic excellence and
          the holistic development of students. With a strong team of teachers,
          modern facilities, and a nurturing environment, we prepare students to
          thrive in life and contribute meaningfully to society.
        </p>
      </section>

      {/* Classes Preview */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">
            Our Classes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example static cards */}
            <ClassCard
              id="6-1"
              name="Class 6/1"
              homeroomTeacher="Nguyễn Văn An"
              studentCount={40}
            />
            <ClassCard
              id="7-3"
              name="Class 7/3"
              homeroomTeacher="Trần Thị Hoa"
              studentCount={42}
            />
            <ClassCard
              id="9-5"
              name="Class 9/5"
              homeroomTeacher="Lê Văn Bình"
              studentCount={39}
            />
          </div>
          <div className="text-center mt-8">
            <Link
              to="/classes"
              className="text-sky-600 hover:underline font-medium"
            >
              View all classes →
            </Link>
          </div>
        </div>
      </section>

      {/* Teachers Preview */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">
            Meet Our Teachers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example static cards */}
            <TeacherCard
              id="t1"
              name="Nguyễn Văn An"
              subject="Mathematics"
              email="van.an.01@nvt.edu.vn"
            />
            <TeacherCard
              id="t2"
              name="Trần Thị Hoa"
              subject="English"
              email="thi.hoa.07@nvt.edu.vn"
            />
            <TeacherCard
              id="t3"
              name="Phạm Quang Minh"
              subject="History"
              email="quang.minh.11@nvt.edu.vn"
            />
          </div>
          <div className="text-center mt-8">
            <Link
              to="/teachers"
              className="text-sky-600 hover:underline font-medium"
            >
              Meet all teachers →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-sky-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="mt-3 text-sky-100">
            Have questions? Reach out to us anytime.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block bg-white text-sky-600 px-6 py-3 rounded-lg font-semibold hover:bg-sky-50 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
