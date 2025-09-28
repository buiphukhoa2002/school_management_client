import api from "./api";
import type { Class, PopulatedClass } from "@/types";

export const classService = {
  async getAll(): Promise<Class[]> {
    const res = await api.get<Class[]>("/classes");
    return res.data;
  },

  async getById(id: string): Promise<PopulatedClass> {
    const res = await api.get<PopulatedClass>(`/classes/${id}`);
    return res.data;
  },
};
