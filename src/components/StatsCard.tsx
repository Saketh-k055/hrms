import { Users, UserCheck, UserX, CalendarDays } from "lucide-react";

const stats = [
  {
    title: "Total Employees",
    value: "248",
    change: "+12%",
    description: "from last month",
    icon: Users,
    iconColor: "text-violet-500",
    iconBg: "bg-violet-100",
  },
  {
    title: "Present Today",
    value: "221",
    change: "89.1%",
    description: "of total employees",
    icon: UserCheck,
    iconColor: "text-[#315c43]",
    iconBg: "bg-[#e8eee8]",
  },
  {
    title: "Absent Today",
    value: "15",
    change: "6.0%",
    description: "of total employees",
    icon: UserX,
    iconColor: "text-violet-600",
    iconBg: "bg-violet-100",
  },
  {
    title: "On Leave",
    value: "12",
    change: "4.8%",
    description: "of total employees",
    icon: CalendarDays,
    iconColor: "text-[#315c43]",
    iconBg: "bg-[#e8eee8]",
  },
];

export default function StatsCards() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 ">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="bg-white p-5 rounded-2xl border border-[#e5e7df] shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-500">
                  {item.title}
                </p>

                <div className={`p-3 rounded-xl ${item.iconBg}`}>
                  <Icon size={21} className={item.iconColor} />
                </div>
              </div>

              <div className="mt-5">
                <h3 className="text-3xl font-bold text-[#26382c]">
                  {item.value}
                </h3>

                <p className="mt-2 text-xs text-gray-500">
                  <span className="font-semibold text-[#315c43]">
                    {item.change}
                  </span>{" "}
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
