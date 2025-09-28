import type { PopulatedTimetableEntry, Weekday } from "@/types";

interface TimetableProps {
  entries: PopulatedTimetableEntry[];
}

const weekdays: Weekday[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];
const periods = Array.from({ length: 8 }, (_, i) => i + 1);

// 🎨 subject → color mapping
const subjectColors: Record<string, string> = {
  Math: "from-blue-100 to-blue-200 text-blue-800",
  Literature: "from-pink-100 to-pink-200 text-pink-800",
  English: "from-green-100 to-green-200 text-green-800",
  Physics: "from-purple-100 to-purple-200 text-purple-800",
  Chemistry: "from-yellow-100 to-yellow-200 text-yellow-800",
  Biology: "from-emerald-100 to-emerald-200 text-emerald-800",
  History: "from-orange-100 to-orange-200 text-orange-800",
  Geography: "from-teal-100 to-teal-200 text-teal-800",
  PE: "from-red-100 to-red-200 text-red-800",
  Art: "from-fuchsia-100 to-fuchsia-200 text-fuchsia-800",
  Technology: "from-cyan-100 to-cyan-200 text-cyan-800",
  Greetings: "from-indigo-100 to-indigo-200 text-indigo-800",
  Rest: "from-gray-100 to-gray-200 text-gray-600",
};

const times = [
  "07:30 - 08:15",
  "08:15 - 09:00",
  "9:30 - 10:15",
  "10:15 - 11:00",
  "11:00 - 11:45",
  "13:30 - 14:15",
  "14:15 - 15:00",
  "15:00 - 15:45",
];

export default function Timetable({ entries }: TimetableProps) {
  // 🔎 quick lookup map
  const lookup = new Map<string, PopulatedTimetableEntry>();
  entries.forEach((e) => {
    lookup.set(`${e.day}-${e.period}`, e);
  });

  return (
    <div className="overflow-x-auto shadow rounded-lg mt-6">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-200 bg-gray-100 px-4 py-2">
              Period
            </th>
            {weekdays.map((day) => (
              <th
                key={day}
                className="border border-gray-200 bg-gray-100 px-4 py-2 text-center"
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {periods.map((period) => (
            <>
              {/* normal period row */}
              <tr key={period}>
                <td className="border border-gray-200 bg-gray-50 px-4 py-2 text-center font-semibold">
                  {period}
                  <span className="block text-xs font-normal text-gray-500">
                    {times[period - 1]}
                  </span>
                </td>
                {weekdays.map((day) => {
                  const entry = lookup.get(`${day}-${period}`);
                  return (
                    <td
                      key={`${day}-${period}`}
                      className="border border-gray-200 px-3 py-2 text-center align-top"
                    >
                      {entry && entry.subject !== "Rest" ? (
                        <div
                          className={`p-2 rounded-xl shadow-sm bg-gradient-to-br ${
                            subjectColors[entry.subject] ||
                            "from-gray-50 to-gray-100 text-gray-800"
                          }`}
                        >
                          <div className="font-bold">{entry.subject}</div>
                          <div className="text-sm">{entry.teacher.name}</div>
                        </div>
                      ) : (
                        <div className="text-gray-400 text-sm italic">—</div>
                      )}
                    </td>
                  );
                })}
              </tr>

              {/* insert break time after Period 2 */}
              {period === 2 && (
                <tr key="break">
                  <td
                    colSpan={weekdays.length + 1}
                    className="bg-yellow-50 text-yellow-700 font-semibold text-center py-2"
                  >
                    ☕ Break Time
                  </td>
                </tr>
              )}

              {/* insert lunch time after Period 5 */}
              {period === 5 && (
                <tr key="lunch">
                  <td
                    colSpan={weekdays.length + 1}
                    className="bg-green-50 text-green-700 font-semibold text-center py-2"
                  >
                    🍱 Lunch Time
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
