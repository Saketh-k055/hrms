"use client";

import { useState } from "react";
import {
  CalendarDays,
  CheckCircle,
  Clock,
  XCircle,
  Search,
  Check,
  X,
} from "lucide-react";

import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const initialRequests = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah@peoplepulse.com",
    department: "Engineering",
    leaveType: "Casual Leave",
    from: "18 Nov 2026",
    to: "19 Nov 2026",
    days: 2,
    status: "Pending",
  },
  {
    id: 2,
    name: "Michael Brown",
    email: "michael@peoplepulse.com",
    department: "HR",
    leaveType: "Sick Leave",
    from: "17 Nov 2026",
    to: "17 Nov 2026",
    days: 1,
    status: "Approved",
  },
  {
    id: 3,
    name: "Emily Davis",
    email: "emily@peoplepulse.com",
    department: "Marketing",
    leaveType: "Annual Leave",
    from: "20 Nov 2026",
    to: "23 Nov 2026",
    days: 4,
    status: "Pending",
  },
  {
    id: 4,
    name: "David Wilson",
    email: "david@peoplepulse.com",
    department: "Engineering",
    leaveType: "Casual Leave",
    from: "15 Nov 2026",
    to: "15 Nov 2026",
    days: 1,
    status: "Rejected",
  },
  {
    id: 5,
    name: "Olivia Martin",
    email: "olivia@peoplepulse.com",
    department: "Finance",
    leaveType: "Annual Leave",
    from: "25 Nov 2026",
    to: "27 Nov 2026",
    days: 3,
    status: "Approved",
  },
];

export default function Leave() {
  const [requests, setRequests] = useState(initialRequests);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");



  const updateStatus = (id: number, newStatus: string) => {
    setRequests((previousRequests) =>
      previousRequests.map((request) =>
        request.id === id ? { ...request, status: newStatus } : request,
      ),
    );
  };

  const filteredRequests = requests.filter((request) => {
    const matchesSearch = request.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || request.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const stats = [
    {
      title: "Total Requests",
      value: requests.length,
      icon: CalendarDays,
      color: "text-[#315c43]",
      bg: "bg-[#eaf1eb]",
    },
    {
      title: "Approved",
      value: requests.filter((r) => r.status === "Approved").length,
      icon: CheckCircle,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      title: "Pending",
      value: requests.filter((r) => r.status === "Pending").length,
      icon: Clock,
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
    {
      title: "Rejected",
      value: requests.filter((r) => r.status === "Rejected").length,
      icon: XCircle,
      color: "text-rose-600",
      bg: "bg-rose-50",
    },
  ];

  return (
    <main className="flex min-h-screen bg-[#f7f8f4]">
      <Sidebar />

      <div className="flex-1 min-w-0 flex flex-col">
        <Header
          title="Leave Management"
          description="Manage and view your organization's leave requests and policies."
        />

        <div className="p-6 space-y-7 flex-1">
          {/* Page Heading */}
          <div>
            <h2 className="text-2xl font-bold text-[#26382c]">
              Leave Overview
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Track, review and manage employee leave requests.
            </p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.title}
                  className="bg-white rounded-2xl border border-[#e5e7df] p-5"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">{stat.title}</p>
                      <h3 className="text-3xl font-bold text-[#26382c] mt-2">
                        {stat.value}
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

          {/* Leave Balance */}
          <section>
            <h3 className="text-lg font-bold text-[#26382c] mb-4">
              Leave Balance Overview
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  name: "Annual Leave",
                  used: 8,
                  total: 20,
                  color: "bg-[#315c43]",
                },
                {
                  name: "Sick Leave",
                  used: 3,
                  total: 10,
                  color: "bg-amber-500",
                },
                {
                  name: "Casual Leave",
                  used: 4,
                  total: 12,
                  color: "bg-sky-500",
                },
              ].map((leave) => (
                <div
                  key={leave.name}
                  className="bg-white rounded-2xl border border-[#e5e7df] p-5"
                >
                  <p className="font-semibold text-[#26382c]">{leave.name}</p>

                  <div className="flex justify-between mt-4 mb-2">
                    <span className="text-sm text-gray-500">
                      {leave.used} days used
                    </span>
                    <span className="text-sm font-semibold text-[#26382c]">
                      {leave.total - leave.used} days left
                    </span>
                  </div>

                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${leave.color}`}
                      style={{
                        width: `${(leave.used / leave.total) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Leave Requests */}
          <section className="bg-white rounded-2xl border border-[#e5e7df] overflow-hidden">
            <div className="p-6 border-b border-[#e5e7df]">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
                <div>
                  <h3 className="text-lg font-bold text-[#26382c]">
                    Leave Requests
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Review and manage employee leave applications.
                  </p>
                </div>

                {/* Search and Filter */}
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
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="border border-[#e5e7df] rounded-xl px-3 py-2 text-sm outline-none bg-white"
                  >
                    <option value="All">All Status</option>
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-[#fafbf8]">
                  <tr className="text-xs text-gray-500 uppercase">
                    <th className="px-6 py-4">Employee</th>
                    <th className="px-6 py-4">Leave Type</th>
                    <th className="px-6 py-4">Duration</th>
                    <th className="px-6 py-4">Days</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-[#e5e7df]">
                  {filteredRequests.map((request) => (
                    <tr
                      key={request.id}
                      className="hover:bg-[#fafbf8] transition"
                    >
                      <td className="px-6 py-4">
                        <p className="text-sm font-semibold text-[#26382c]">
                          {request.name}
                        </p>
                        <p className="text-xs text-gray-500">{request.email}</p>
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-600">
                        {request.leaveType}
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                        {request.from}
                        <p className="text-xs text-gray-400">to {request.to}</p>
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-600">
                        {request.days}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            request.status === "Approved"
                              ? "bg-emerald-50 text-emerald-700"
                              : request.status === "Pending"
                                ? "bg-amber-50 text-amber-700"
                                : "bg-rose-50 text-rose-700"
                          }`}
                        >
                          {request.status}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        {request.status === "Pending" ? (
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                updateStatus(request.id, "Approved")
                              }
                              title="Approve"
                              className="p-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                            >
                              <Check size={17} />
                            </button>

                            <button
                              onClick={() =>
                                updateStatus(request.id, "Rejected")
                              }
                              title="Reject"
                              className="p-2 rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-100"
                            >
                              <X size={17} />
                            </button>
                          </div>
                        ) : (
                          <span className="text-xs text-gray-400">
                            No actions
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}

                  {filteredRequests.length === 0 && (
                    <tr>
                      <td
                        colSpan={6}
                        className="text-center py-10 text-gray-500 text-sm"
                      >
                        No leave requests found.
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
