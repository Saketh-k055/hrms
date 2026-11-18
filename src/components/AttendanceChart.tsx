"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const attendanceData = [
  { day: "Mon", present: 220, absent: 18 },
  { day: "Tue", present: 225, absent: 13 },
  { day: "Wed", present: 218, absent: 20 },
  { day: "Thu", present: 230, absent: 8 },
  { day: "Fri", present: 221, absent: 15 },
  { day: "Sat", present: 0, absent: 0 },
  { day: "Sun", present: 0, absent: 0 },
];

export default function AttendanceChart() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-[#e5e7df] shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-[#26382c]">Weekly Attendance</h2>
        <p className="text-sm text-gray-500 mt-1">
          Employee attendance overview
        </p>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={attendanceData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />

            <XAxis dataKey="day" />
            <YAxis />

            <Tooltip />
            <Legend />

            <Bar dataKey="present" fill="#8b5cf6" radius={[5, 5, 0, 0]} />

            <Bar dataKey="absent" fill="#315c43" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
