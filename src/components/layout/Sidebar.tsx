"use client";
import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  Wallet,
  BriefcaseBusiness,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { name: "Employees", icon: Users, path: "/employees" },
  { name: "Attendance", icon: CalendarCheck, path: "/attendance" },
  { name: "Leave", icon: CalendarCheck, path: "/leave" },
  { name: "Payroll", icon: Wallet, path: "/payroll" },
  { name: "Recruitment", icon: BriefcaseBusiness, path: "/recruitment" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-64 min-h-screen bg-white border-r border-[#e5e7df] p-5">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-violet-500 mb-10">PeoplePulse.</h1>

      {/* Menu */}
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.name}
              href={item.path}
              // className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition
              //     text-[#315c43] font-medium hover:bg-violet-500 hover:text-white
              // }`}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-violet-500 text-white shadow-sm"
                  : "text-[#526257] hover:bg-violet-100 hover:text-[#315c43]"
              }`}
            >
              <Icon size={20} />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
