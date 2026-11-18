"use client";

import { useState } from "react";
import { Search, Users, UserCheck, UserX, CalendarDays } from "lucide-react";

import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

const attendanceData = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah@peoplepulse.com",
    department: "Engineering",
    checkIn: "09:02 AM",
    checkOut: "06:05 PM",
    status: "Present",
  },
  {
    id: 2,
    name: "Michael Brown",
    email: "michael@peoplepulse.com",
    department: "Human Resources",
    checkIn: "09:15 AM",
    checkOut: "06:00 PM",
    status: "Present",
  },
  {
    id: 3,
    name: "Emily Davis",
    email: "emily@peoplepulse.com",
    department: "Marketing",
    checkIn: "--",
    checkOut: "--",
    status: "Absent",
  },
  {
    id: 4,
    name: "David Wilson",
    email: "david@peoplepulse.com",
    department: "Engineering",
    checkIn: "09:30 AM",
    checkOut: "--",
    status: "Late",
  },
  {
    id: 5,
    name: "Olivia Martin",
    email: "olivia@peoplepulse.com",
    department: "Finance",
    checkIn: "--",
    checkOut: "--",
    status: "On Leave",
  },
];

export default function AttendancePage() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  const filteredAttendance = attendanceData.filter((employee) => {
    const matchesSearch = employee.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesDepartment =
      department === "All" || employee.department === department;

    return matchesSearch && matchesDepartment;
  });

  const stats = [
    {
      title: "Total Employees",
      value: "248",
      icon: Users,
      color: "text-[#315c43]",
      bg: "bg-[#eaf1eb]",
    },
    {
      title: "Present Today",
      value: "221",
      icon: UserCheck,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      title: "Absent Today",
      value: "15",
      icon: UserX,
      color: "text-rose-600",
      bg: "bg-rose-50",
    },
    {
      title: "On Leave",
      value: "12",
      icon: CalendarDays,
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
  ];

  return (
    <main className="flex min-h-screen bg-[#f7f8f4]">
      <Sidebar />

      <div className="flex-1 min-w-0">
        <Header
          title="Attendance"
          description="Track employee attendance and working hours."
        />

        <div className="p-8 space-y-8">
          {/* Page heading */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-[#26382c]">
                Attendance Overview
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Track employee attendance and working hours.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-white border border-[#e5e7df] rounded-xl px-4 py-2">
              <CalendarDays size={18} className="text-[#315c43]" />
              <input
                type="date"
                className="text-sm text-[#26382c] outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Statistics cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.title}
                  className="bg-white p-6 rounded-2xl border border-[#e5e7df]"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">{stat.title}</p>
                      <h3 className="text-2xl font-bold text-[#26382c] mt-2">
                        {stat.value}
                      </h3>
                    </div>

                    <div className={`p-3 rounded-xl ${stat.bg}`}>
                      <Icon size={22} className={stat.color} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Attendance table section */}
          <section className="bg-white rounded-2xl border border-[#e5e7df] overflow-hidden">
            <div className="p-6 border-b border-[#e5e7df]">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-[#26382c]">
                    Employee Attendance
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Daily attendance records
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  {/* Search */}
                  <div className="flex items-center gap-2 border border-[#e5e7df] rounded-xl px-3 py-2">
                    <Search size={18} className="text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search employee..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="outline-none text-sm w-full sm:w-48"
                    />
                  </div>

                  {/* Department filter */}
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="border border-[#e5e7df] rounded-xl px-3 py-2 text-sm outline-none bg-white"
                  >
                    <option value="All">All Departments</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Human Resources">Human Resources</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Finance">Finance</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-[#fafbf8]">
                  <tr className="text-xs text-gray-500 uppercase">
                    <th className="px-6 py-4 font-semibold">Employee</th>
                    <th className="px-6 py-4 font-semibold">Department</th>
                    <th className="px-6 py-4 font-semibold">Check In</th>
                    <th className="px-6 py-4 font-semibold">Check Out</th>
                    <th className="px-6 py-4 font-semibold">Status</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-[#e5e7df]">
                  {filteredAttendance.map((employee) => (
                    <tr key={employee.id} className="hover:bg-[#fafbf8]">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-violet-4  00 flex items-center justify-center text-white font-semibold">
                            {employee.name
                              .split(" ")
                              .map((part) => part[0])
                              .join("")}
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-[#26382c]">
                              {employee.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {employee.email}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-600">
                        {employee.department}
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-600">
                        {employee.checkIn}
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-600">
                        {employee.checkOut}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            employee.status === "Present"
                              ? "bg-emerald-50 text-emerald-700"
                              : employee.status === "Absent"
                                ? "bg-rose-50 text-rose-700"
                                : employee.status === "Late"
                                  ? "bg-amber-50 text-amber-700"
                                  : "bg-blue-50 text-blue-700"
                          }`}
                        >
                          {employee.status}
                        </span>
                      </td>
                    </tr>
                  ))}

                  {filteredAttendance.length === 0 && (
                    <tr>
                      <td
                        colSpan={5}
                        className="text-center py-10 text-gray-500 text-sm"
                      >
                        No attendance records found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
