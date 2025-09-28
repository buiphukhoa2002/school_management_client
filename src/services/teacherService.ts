import api from "./api";
import type { Teacher, TeacherWithTimetable } from "@/types";

export const teacherService = {
  async getAll(): Promise<Teacher[]> {
    const res = await api.get<Teacher[]>("/teachers");
    return res.data;
  },

  async getById(id: string): Promise<TeacherWithTimetable> {
    const res = await api.get<TeacherWithTimetable>(`/teachers/${id}`);
    return res.data;
  },
};
