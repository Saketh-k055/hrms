
"use client";

import { useState } from "react";
import {
  BriefcaseBusiness,
  Users,
  UserCheck,
  Clock,
  Search,
  Check,
  X,
  MapPin,
} from "lucide-react";

import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";

const initialCandidates = [
  {
    id: 1,
    name: "Alex Morgan",
    email: "alex@email.com",
    position: "Frontend Developer",
    department: "Engineering",
    experience: "2 Years",
    appliedDate: "12 Nov 2026",
    status: "Applied",
  },
  {
    id: 2,
    name: "Jessica Taylor",
    email: "jessica@email.com",
    position: "UI/UX Designer",
    department: "Design",
    experience: "3 Years",
    appliedDate: "13 Nov 2026",
    status: "Shortlisted",
  },
  {
    id: 3,
    name: "Daniel Smith",
    email: "daniel@email.com",
    position: "Backend Developer",
    department: "Engineering",
    experience: "4 Years",
    appliedDate: "14 Nov 2026",
    status: "Interview",
  },
  {
    id: 4,
    name: "Sophia Wilson",
    email: "sophia@email.com",
    position: "HR Executive",
    department: "Human Resources",
    experience: "1 Year",
    appliedDate: "15 Nov 2026",
    status: "Applied",
  },
  {
    id: 5,
    name: "Ryan Thomas",
    email: "ryan@email.com",
    position: "Marketing Executive",
    department: "Marketing",
    experience: "2 Years",
    appliedDate: "16 Nov 2026",
    status: "Rejected",
  },
];

export default function Recruitment() {
  const [candidates, setCandidates] = useState(initialCandidates);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const updateStatus = (id: number, status: string) => {
    setCandidates((previous) =>
      previous.map((candidate) =>
        candidate.id === id
          ? { ...candidate, status }
          : candidate
      )
    );
  };

  const filteredCandidates = candidates.filter((candidate) => {
    const matchesSearch =
      candidate.name.toLowerCase().includes(search.toLowerCase()) ||
      candidate.position.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || candidate.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const stats = [
    {
      title: "Open Positions",
      value: 8,
      icon: BriefcaseBusiness,
      color: "text-[#315c43]",
      bg: "bg-[#eaf1eb]",
    },
    {
      title: "Total Candidates",
      value: candidates.length,
      icon: Users,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Shortlisted",
      value: candidates.filter((c) => c.status === "Shortlisted").length,
      icon: UserCheck,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      title: "In Progress",
      value: candidates.filter(
        (c) => c.status === "Applied" || c.status === "Interview"
      ).length,
      icon: Clock,
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
  ];

  const openings = [
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Bangalore",
      type: "Full Time",
      applicants: 24,
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full Time",
      applicants: 18,
    },
    {
      title: "Backend Developer",
      department: "Engineering",
      location: "Chennai",
      type: "Full Time",
      applicants: 32,
    },
  ];

  return (
    <main className="flex min-h-screen bg-[#f7f8f4]">
      <Sidebar />

      <div className="flex-1 min-w-0 flex flex-col">
        <Header
          title="Recruitment"
          description="Manage job openings and candidate applications."
        />

        <div className="p-6 space-y-8 flex-1">

          {/* Page Heading */}
          <div>
            <h2 className="text-2xl font-bold text-[#26382c]">
              Recruitment Overview
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Track hiring progress and manage your candidates.
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

          {/* Job Openings */}
          <section>
            <div className="mb-4">
              <h3 className="text-lg font-bold text-[#26382c]">
                Active Job Openings
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Currently available positions in your organization.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {openings.map((job) => (
                <div
                  key={job.title}
                  className="bg-white rounded-2xl border border-[#e5e7df] p-5 hover:shadow-md transition"
                >
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-[#eaf1eb] rounded-xl">
                      <BriefcaseBusiness
                        size={22}
                        className="text-[#315c43]"
                      />
                    </div>

                    <span className="text-xs font-medium bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full">
                      Active
                    </span>
                  </div>

                  <h4 className="font-bold text-[#26382c] mt-4">
                    {job.title}
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    {job.department}
                  </p>

                  <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
                    <MapPin size={16} />
                    {job.location}
                    <span>•</span>
                    {job.type}
                  </div>

                  <div className="border-t border-[#e5e7df] mt-4 pt-4">
                    <p className="text-sm text-[#315c43] font-semibold">
                      {job.applicants} Applicants
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Candidate Applications */}
          <section className="bg-white rounded-2xl border border-[#e5e7df] overflow-hidden">
            <div className="p-6 border-b border-[#e5e7df]">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
                <div>
                  <h3 className="text-lg font-bold text-[#26382c]">
                    Candidate Applications
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Review and manage candidate applications.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex items-center gap-2 border border-[#e5e7df] rounded-xl px-3 py-2">
                    <Search size={18} className="text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search candidates..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="outline-none text-sm w-full sm:w-48"
                    />
                  </div>

                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="border border-[#e5e7df] rounded-xl px-3 py-2 text-sm outline-none bg-white"
                  >
                    <option value="All">All Status</option>
                    <option value="Applied">Applied</option>
                    <option value="Shortlisted">Shortlisted</option>
                    <option value="Interview">Interview</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-[#fafbf8]">
                  <tr className="text-xs text-gray-500 uppercase">
                    <th className="px-6 py-4">Candidate</th>
                    <th className="px-6 py-4">Position</th>
                    <th className="px-6 py-4">Experience</th>
                    <th className="px-6 py-4">Applied Date</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-[#e5e7df]">
                  {filteredCandidates.map((candidate) => (
                    <tr
                      key={candidate.id}
                      className="hover:bg-[#fafbf8] transition"
                    >
                      <td className="px-6 py-4">
                        <p className="text-sm font-semibold text-[#26382c]">
                          {candidate.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {candidate.email}
                        </p>
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-600">
                        {candidate.position}
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-600">
                        {candidate.experience}
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                        {candidate.appliedDate}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            candidate.status === "Shortlisted"
                              ? "bg-emerald-50 text-emerald-700"
                              : candidate.status === "Interview"
                              ? "bg-blue-50 text-blue-700"
                              : candidate.status === "Rejected"
                              ? "bg-rose-50 text-rose-700"
                              : "bg-amber-50 text-amber-700"
                          }`}
                        >
                          {candidate.status}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        {candidate.status === "Applied" ? (
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                updateStatus(candidate.id, "Shortlisted")
                              }
                              title="Shortlist"
                              className="p-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                            >
                              <Check size={17} />
                            </button>

                            <button
                              onClick={() =>
                                updateStatus(candidate.id, "Rejected")
                              }
                              title="Reject"
                              className="p-2 rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-100"
                            >
                              <X size={17} />
                            </button>
                          </div>
                        ) : (
                          <span className="text-xs text-gray-400">
                            Updated
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}

                  {filteredCandidates.length === 0 && (
                    <tr>
                      <td
                        colSpan={6}
                        className="text-center py-10 text-gray-500 text-sm"
                      >
                        No candidates found.
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
