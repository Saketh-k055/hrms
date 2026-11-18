"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const departmentData = [
  { name: "Engineering", employees: 85 },
  { name: "Human Resources", employees: 25 },
  { name: "Sales", employees: 55 },
  { name: "Marketing", employees: 40 },
  { name: "Finance", employees: 43 },
];

const COLORS = ["#8b5cf6", "#315c43", "#a78bfa", "#6b8f71", "#c4b5fd"];

export default function DepartmentChart() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-[#e5e7df] shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-[#26382c]">
          Department Distribution
        </h2>

        <p className="text-sm text-gray-500 mt-1">Employees by department</p>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={departmentData}
              dataKey="employees"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={90}
              innerRadius={55}
              paddingAngle={3}
            >
              {departmentData.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
