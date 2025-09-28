import api from "./api";
import type { PopulatedStudent } from "@/types";

export const studentService = {
  async getAll(): Promise<PopulatedStudent[]> {
    const res = await api.get<PopulatedStudent[]>("/students");
    return res.data;
  },

  async getById(id: string): Promise<PopulatedStudent> {
    const res = await api.get<PopulatedStudent>(`/students/${id}`);
    return res.data;
  },

  async searchByName(name: string): Promise<PopulatedStudent[]> {
    const res = await api.get<PopulatedStudent[]>(
      `/students/search/name/${name}`
    );
    return res.data;
  },

  async getByClass(classId: string): Promise<PopulatedStudent[]> {
    const res = await api.get<PopulatedStudent[]>(`/students/class/${classId}`);
    return res.data;
  },
};
