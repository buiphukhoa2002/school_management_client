import type { Weekday } from "./timetable";

export type Subject =
  | "Math"
  | "Literature"
  | "English"
  | "Physics"
  | "Chemistry"
  | "Biology"
  | "History"
  | "Geography"
  | "PE"
  | "Art"
  | "Technology"
  | "Greetings"
  | "Rest";

export interface TeacherTimetableEntry {
  className: string;
  day: Weekday;
  period: number;
  subject: Subject;
}

export interface Teacher {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  subjects: Subject[];
}

export interface TeacherWithTimetable extends Teacher {
  timetable: TeacherTimetableEntry[];
}
