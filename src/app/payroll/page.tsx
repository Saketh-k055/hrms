"use client";

import { useState } from "react";
import {
  Wallet,
  Users,
  CheckCircle,
  Clock,
  Search,
  IndianRupee,
} from "lucide-react";

import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";

const initialPayroll = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah@peoplepulse.com",
    department: "Engineering",
    salary: 65000,
    bonus: 5000,
    status: "Paid",
  },
  {
    id: 2,
    name: "Michael Brown",
    email: "michael@peoplepulse.com",
    department: "HR",
    salary: 55000,
    bonus: 3000,
    status: "Paid",
  },
  {
    id: 3,
    name: "Emily Davis",
    email: "emily@peoplepulse.com",
    department: "Marketing",
    salary: 48000,
    bonus: 2000,
    status: "Pending",
  },
  {
    id: 4,
    name: "David Wilson",
    email: "david@peoplepulse.com",
    department: "Engineering",
    salary: 70000,
    bonus: 5000,
    status: "Paid",
  },
  {
    id: 5,
    name: "Olivia Martin",
    email: "olivia@peoplepulse.com",
    department: "Finance",
    salary: 52000,
    bonus: 2500,
    status: "Pending",
  },
];

export default function Payroll() {
  const [payroll, setPayroll] = useState(initialPayroll);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  const filteredPayroll = payroll.filter((employee) => {
    const matchesSearch = employee.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesDepartment =
      department === "All" || employee.department === department;

    return matchesSearch && matchesDepartment;
  });

  const totalSalary = payroll.reduce(
    (total, employee) => total + employee.salary + employee.bonus,
    0,
  );

  const paidEmployees = payroll.filter(
    (employee) => employee.status === "Paid",
  ).length;

  const pendingEmployees = payroll.filter(
    (employee) => employee.status === "Pending",
  ).length;

  const stats = [
    {
      title: "Total Payroll",
      value: totalSalary,
      icon: Wallet,
      color: "text-[#315c43]",
      bg: "bg-[#eaf1eb]",
    },
    {
      title: "Total Employees",
      value: payroll.length,
      icon: Users,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Paid Employees",
      value: paidEmployees,
      icon: CheckCircle,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      title: "Pending Payments",
      value: pendingEmployees,
      icon: Clock,
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
  ];

  const markAsPaid = (id: number) => {
    setPayroll((previous) =>
      previous.map((employee) =>
        employee.id === id ? { ...employee, status: "Paid" } : employee,
      ),
    );
  };

  return (
    <main className="flex min-h-screen bg-[#f7f8f4]">
      <Sidebar />

      <div className="flex-1 min-w-0 flex flex-col">
        <Header
          title="Payroll"
          description="Manage employee salaries and monthly payroll."
        />

        <div className="p-6 space-y-8 flex-1">
          {/* Page Heading */}
          <div>
            <h2 className="text-2xl font-bold text-[#26382c]">
              Payroll Overview
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Monitor salary distribution and payment status.
            </p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.title}
                  className="bg-white p-5 rounded-2xl border border-[#e5e7df]"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">{stat.title}</p>

                      <h3 className="text-2xl font-bold text-[#26382c] mt-2">
                        {stat.title === "Total Payroll"
                          ? `₹${stat.value.toLocaleString("en-IN")}`
                          : stat.value}
                      </h3>
                    </div>

                    <div className={`p-3 rounded-xl ${stat.bg}`}>
                      <Icon size={23} className={stat.color} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Payroll Period */}
          <div className="bg-violet-500 text-white rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-sm text-white/70">Current Payroll Period</p>
              <h3 className="text-xl font-bold mt-1">November 2026</h3>
              <p className="text-sm text-white/70 mt-2">
                Monthly salary overview
              </p>
            </div>

            <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-3">
              <IndianRupee size={20} />
              <span className="text-xl font-bold">
                {totalSalary.toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          {/* Employee Payroll Table */}
          <section className="bg-white rounded-2xl border border-[#e5e7df] overflow-hidden">
            <div className="p-6 border-b border-[#e5e7df]">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-[#26382c]">
                    Employee Payroll
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Salary and payment records.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex items-center gap-2 border border-[#e5e7df] rounded-xl px-3 py-2">
                    <Search size={18} className="text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search employee..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="outline-none text-sm w-full sm:w-44"
                    />
                  </div>

                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="border border-[#e5e7df] rounded-xl px-3 py-2 text-sm outline-none bg-white"
                  >
                    <option value="All">All Departments</option>
                    <option value="Engineering">Engineering</option>
                    <option value="HR">HR</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Finance">Finance</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-[#fafbf8]">
                  <tr className="text-xs text-gray-500 uppercase">
                    <th className="px-6 py-4">Employee</th>
                    <th className="px-6 py-4">Department</th>
                    <th className="px-6 py-4">Base Salary</th>
                    <th className="px-6 py-4">Bonus</th>
                    <th className="px-6 py-4">Total Salary</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Action</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-[#e5e7df]">
                  {filteredPayroll.map((employee) => (
                    <tr
                      key={employee.id}
                      className="hover:bg-[#fafbf8] transition"
                    >
                      <td className="px-6 py-4">
                        <p className="text-sm font-semibold text-[#26382c]">
                          {employee.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {employee.email}
                        </p>
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-600">
                        {employee.department}
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-600">
                        ₹{employee.salary.toLocaleString("en-IN")}
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-600">
                        ₹{employee.bonus.toLocaleString("en-IN")}
                      </td>

                      <td className="px-6 py-4 text-sm font-semibold text-[#26382c]">
                        ₹
                        {(employee.salary + employee.bonus).toLocaleString(
                          "en-IN",
                        )}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            employee.status === "Paid"
                              ? "bg-emerald-50 text-emerald-700"
                              : "bg-amber-50 text-amber-700"
                          }`}
                        >
                          {employee.status}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        {employee.status === "Pending" ? (
                          <button
                            onClick={() => markAsPaid(employee.id)}
                            className="text-xs font-semibold text-[#315c43] bg-[#eaf1eb] hover:bg-[#dce9dd] px-3 py-2 rounded-lg transition"
                          >
                            Mark as Paid
                          </button>
                        ) : (
                          <span className="text-xs text-gray-400">
                            Completed
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}

                  {filteredPayroll.length === 0 && (
                    <tr>
                      <td
                        colSpan={7}
                        className="text-center py-10 text-gray-500 text-sm"
                      >
                        No payroll records found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </main>
  );
}
