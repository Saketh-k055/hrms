import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import AttendanceChart from "@/components/AttendanceChart";
import DepartmentChart from "@/components/DepartmentChart";
import WelcomeSection from "@/components/WelcomeSection";
import StatsCards from "@/components/StatsCard";
import RecentActivity from "@/components/RecentActivity";
import UpcomingEvents from "@/components/UpcomingEvents";
import Footer from "@/components/layout/Footer";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen bg-[#f4f5ef] text-[#26382c]">
      <Sidebar />

      <div className="flex-1 min-w-0">
        <Header
          title="Dashboard"
          description="Here's what's happening in your organization."
        />

        <section className="p-8 space-y-8">
          <WelcomeSection />

          <StatsCards />
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <AttendanceChart />
            <DepartmentChart />
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <RecentActivity />
            <UpcomingEvents />
          </div>
          <Footer />
        </section>
      </div>
    </main>
  );
}
