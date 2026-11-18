import { Cake, Award, CalendarDays, ArrowRight } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Olivia Martin",
    description: "Birthday celebration",
    date: "Today",
    day: "16",
    month: "NOV",
    icon: Cake,
    color: "bg-violet-100 text-violet-600",
  },
  {
    id: 2,
    title: "James Anderson",
    description: "5 years work anniversary",
    date: "Nov 18",
    day: "18",
    month: "NOV",
    icon: Award,
    color: "bg-[#e8eee8] text-[#315c43]",
  },
  {
    id: 3,
    title: "Monthly Town Hall",
    description: "Company-wide meeting",
    date: "Nov 20",
    day: "20",
    month: "NOV",
    icon: CalendarDays,
    color: "bg-violet-100 text-violet-600",
  },
];

export default function UpcomingEvents() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-[#e5e7df] shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold text-[#26382c]">Upcoming Events</h2>

          <p className="text-sm text-gray-500 mt-1">
            Important dates to remember
          </p>
        </div>

        <CalendarDays size={20} className="text-violet-500" />
      </div>

      <div className="space-y-4">
        {events.map((event) => {
          const Icon = event.icon;

          return (
            <div
              key={event.id}
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#fafbf8] transition"
            >
              {/* Date */}
              <div className="w-12 h-14 rounded-xl bg-[#f4f5ef] flex flex-col items-center justify-center shrink-0">
                <span className="text-lg font-bold text-[#26382c]">
                  {event.day}
                </span>

                <span className="text-[10px] font-semibold text-gray-500">
                  {event.month}
                </span>
              </div>

              {/* Event details */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-[#26382c]">
                  {event.title}
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  {event.description}
                </p>
              </div>

              {/* Event icon */}
              <div className={`p-2 rounded-lg ${event.color}`}>
                <Icon size={18} />
              </div>
            </div>
          );
        })}
      </div>

      <button className="mt-5 w-full flex items-center justify-center gap-2 text-sm font-semibold text-violet-500 hover:bg-violet-50 transition rounded-lg py-2">
        View all events
        <ArrowRight size={16} />
      </button>
    </div>
  );
}
