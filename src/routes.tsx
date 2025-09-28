import { Route, Routes } from "react-router";

import HomePage from "./pages/Home/HomePage.tsx";
import ClassesPage from "./pages/Classes/ClassesPage.tsx";
import TeachersPage from "./pages/Teachers/TeachersPage.tsx";
import TeacherDetailPage from "./pages/Teachers/TeacherDetailPage.tsx";
import StudentsPage from "./pages/Students/StudentsPage.tsx";
import StudentDetailPage from "./pages/Students/StudentDetailPage.tsx";
import ContactPage from "./pages/Contact/ContactPage.tsx";
import ClassDetail from "./pages/Classes/ClassDetail.tsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/school_management_client" element={<HomePage />} />
      <Route path="/classes" element={<ClassesPage />} />
      <Route path="/classes/:id" element={<ClassDetail />} />
      <Route path="/teachers" element={<TeachersPage />} />
      <Route path="/teachers/:id" element={<TeacherDetailPage />} />
      <Route path="/students" element={<StudentsPage />} />
      <Route path="/students/:id" element={<StudentDetailPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default AppRoutes;
