import type { Teacher } from "./teacher";

export type Weekday =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday";

interface BaseTimetableEntry {
  day: Weekday;
  period: number;
  subject: string;
}

export interface TimetableEntry extends BaseTimetableEntry {
  teacher: string;
}

export interface PopulatedTimetableEntry extends BaseTimetableEntry {
  teacher: Teacher;
}
