import type { Student } from "./student";
import type { Teacher } from "./teacher";
import type { PopulatedTimetableEntry, TimetableEntry } from "./timetable";

interface BaseClass {
  _id: string;
  className: string;
  homeroomTeacher: Teacher;
  leader: Student;
}

export interface Class extends BaseClass {
  timetable: TimetableEntry[];
}

export interface PopulatedClass extends BaseClass {
  timetable: PopulatedTimetableEntry[];
}
