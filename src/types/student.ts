import type { Class } from "./class";

interface BaseStudent {
  _id: string;
  name: string;
  studentCode: string;
  dateOfBirth: string; // ISO date string
  address: string;
  createdAt?: string;
  updateAt?: string;
}

export interface Student extends BaseStudent {
  classId: string;
}

export interface PopulatedStudent extends BaseStudent {
  classId: Class;
}
