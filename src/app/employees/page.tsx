"use client";

import { useState } from "react";
import { Search, Users, UserCheck, UserX, Plus, Filter } from "lucide-react";

import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

const employees = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah@peoplepulse.com",
    department: "Engineering",
    position: "Frontend Developer",
    status: "Active",
  },
  {
    id: 2,
    name: "Michael Brown",
    email: "michael@peoplepulse.com",
    department: "Human Resources",
    position: "HR Manager",
    status: "Active",
  },
  {
    id: 3,
    name: "Emily Davis",
    email: "emily@peoplepulse.com",
    department: "Marketing",
    position: "Marketing Executive",
    status: "On Leave",
  },
  {
    id: 4,
    name: "David Wilson",
    email: "david@peoplepulse.com",
    department: "Engineering",
    position: "Backend Developer",
    status: "Active",
  },
  {
    id: 5,
    name: "Olivia Martin",
    email: "olivia@peoplepulse.com",
    department: "Finance",
    position: "Accountant",
    status: "Inactive",
  },
];

export default function EmployeesPage() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.email.toLowerCase().includes(search.toLowerCase());

    const matchesDepartment =
      department === "All" || employee.department === department;

    return matchesSearch && matchesDepartment;
  });

  return (
    <main className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="flex-1 min-w-0">
        <Header title="Employees" description="Manage and view your organization's employees." />

        <section className="p-8 space-y-8">
          {/* Page heading */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Manage Employees</h1>

             
            </div>

            <button className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-4 py-3 rounded-lg text-sm font-medium transition">
              <Plus size={18} />
              Add Employee
            </button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="bg-white p-5 rounded-xl border border-slate-200">
              <div className="flex justify-between">
                <p className="text-sm text-slate-500">Total Employees</p>
                <Users className="text-violet-600" />
              </div>

              <h2 className="text-2xl font-bold mt-4">248</h2>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200">
              <div className="flex justify-between">
                <p className="text-sm text-slate-500">Active Employees</p>
                <UserCheck className="text-emerald-600" />
              </div>

              <h2 className="text-2xl font-bold mt-4">235</h2>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200">
              <div className="flex justify-between">
                <p className="text-sm text-slate-500">Inactive Employees</p>
                <UserX className="text-rose-600" />
              </div>

              <h2 className="text-2xl font-bold mt-4">13</h2>
            </div>
          </div>

          {/* Search and filter */}
          <div className="bg-white p-5 rounded-xl border border-slate-200">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center gap-3 border border-slate-200 rounded-lg px-4 py-3 flex-1">
                <Search size={18} className="text-slate-400" />

                <input
                  type="text"
                  placeholder="Search employees..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="outline-none w-full text-sm"
                />
              </div>

              <div className="flex items-center gap-3 border border-slate-200 rounded-lg px-4 py-3">
                <Filter size={18} className="text-slate-400" />

                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="outline-none bg-transparent text-sm"
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

          {/* Employee table */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="p-5 border-b border-slate-200">
              <h2 className="font-bold text-slate-800">Employee Directory</h2>

              <p className="text-sm text-slate-500 mt-1">
                {filteredEmployees.length} employees found
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-slate-500 text-xs uppercase">
                  <tr>
                    <th className="px-6 py-4">Employee</th>
                    <th className="px-6 py-4">Department</th>
                    <th className="px-6 py-4">Position</th>
                    <th className="px-6 py-4">Status</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {filteredEmployees.map((employee) => (
                    <tr
                      key={employee.id}
                      className="hover:bg-slate-50 transition"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center font-semibold">
                            {employee.name
                              .split(" ")
                              .map((part) => part[0])
                              .join("")}
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-slate-800">
                              {employee.name}
                            </p>

                            <p className="text-xs text-slate-500">
                              {employee.email}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-sm text-slate-600">
                        {employee.department}
                      </td>

                      <td className="px-6 py-4 text-sm text-slate-600">
                        {employee.position}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            employee.status === "Active"
                              ? "bg-emerald-100 text-emerald-700"
                              : employee.status === "On Leave"
                                ? "bg-amber-100 text-amber-700"
                                : "bg-rose-100 text-rose-700"
                          }`}
                        >
                          {employee.status}
                        </span>
                      </td>
                    </tr>
                  ))}

                  {filteredEmployees.length === 0 && (
                    <tr>
                      <td
                        colSpan={4}
                        className="text-center py-10 text-slate-500 text-sm"
                      >
                        No employees found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
