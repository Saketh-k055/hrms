import { UserPlus, CalendarCheck, FileText, UserCheck } from "lucide-react";

const activities = [
  {
    id: 1,
    name: "Sarah Johnson",
    action: "joined the Engineering department",
    time: "10 minutes ago",
    icon: UserPlus,
    color: "bg-violet-100 text-violet-600",
  },
  {
    id: 2,
    name: "Michael Brown",
    action: "marked attendance",
    time: "30 minutes ago",
    icon: CalendarCheck,
    color: "bg-[#e8eee8] text-[#315c43]",
  },
  {
    id: 3,
    name: "Emily Davis",
    action: "submitted a leave request",
    time: "1 hour ago",
    icon: FileText,
    color: "bg-violet-100 text-violet-600",
  },
  {
    id: 4,
    name: "David Wilson",
    action: "completed onboarding",
    time: "2 hours ago",
    icon: UserCheck,
    color: "bg-[#e8eee8] text-[#315c43]",
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-[#e5e7df] shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold text-[#26382c]">Recent Activity</h2>
          <p className="text-sm text-gray-500 mt-1">
            Latest updates from your organization
          </p>
        </div>

        <span className="text-sm text-violet-500 font-medium">Today</span>
      </div>

      <div className="space-y-6">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div key={activity.id} className="flex gap-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${activity.color}`}
              >
                <Icon size={18} />
              </div>

              <div className="flex-1">
                <p className="text-sm text-[#26382c]">
                  <span className="font-semibold text-[#26382c]">
                    {activity.name}
                  </span>{" "}
                  {activity.action}
                </p>

                <p className="text-xs text-slate-400 mt-1">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
