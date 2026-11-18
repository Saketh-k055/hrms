import {
  Users,
  CalendarCheck,
  Wallet,
  BarChart3,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Clock,
  UserX,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Users,
    title: "Employee Management",
    description:
      "Keep all your employee information organized in one convenient place.",
  },
  {
    icon: Wallet,
    title: "Payroll Management",
    description:
      "Make payroll management simpler and keep salary information organized.",
  },
  {
    icon: CalendarCheck,
    title: "Attendance Management",
    description:
      "Track attendance, working hours, and employee availability easily.",
  },
  {
    icon: UserX,
    title: "Leave Management",
    description: "Track Leave of the Employees.",
  },
  {
    icon: BarChart3,
    title: "HR Analytics",
    description:
      "Get meaningful insights into your workforce and organizational growth.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f5ef] text-[#26382c]">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-16 py-5 bg-white border-b border-[#e5e7df]">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-violet-500 p-2 rounded-xl text-white">
            <Users size={24} />
          </div>

          <h1 className="text-2xl font-bold">
            People<span className="text-violet-500">Pulse</span>
          </h1>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/sign-in"
            className="px-5 py-2.5 rounded-xl font-semibold text-[#315c43] hover:bg-[#f4f5ef] transition"
          >
            Sign In
          </Link>

          <Link
            href="/sign-up"
            className="px-5 py-2.5 rounded-xl bg-violet-500 text-white font-semibold hover:bg-violet-600 shadow-md transition"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 md:px-16 py-20 md:py-28 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-600 px-4 py-2 rounded-full text-sm font-semibold mb-7">
            <Sparkles size={16} />
            Smarter HR. Happier People.
          </div>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Manage Your
            <span className="text-violet-500"> People.</span>
            <br />
            Simplify Your
            <span className="text-violet-500"> Work.</span>
          </h2>

          <p className="mt-7 text-gray-600 text-lg leading-8 max-w-xl">
            Welcome to PeoplePulse, your modern Human Resource Management
            System. Manage your workforce, simplify everyday HR activities, and
            create a better workplace experience.
          </p>

          <div className="flex flex-wrap gap-4 mt-9">
            <Link
              href="/sign-up"
              className="bg-violet-500 text-white px-7 py-4 rounded-xl font-semibold hover:bg-violet-600 transition shadow-md flex items-center gap-2"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/sign-in"
              className="border border-violet-500 text-violet-500 px-7 py-4 rounded-xl font-semibold hover:bg-violet-100 transition "
            >
              Sign In
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 mt-12 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-violet-500" size={20} />
              Secure Platform
            </div>

            <div className="flex items-center gap-2">
              <Clock className="text-violet-500" size={20} />
              Efficient Management
            </div>
          </div>
        </div>

        {/* Hero Illustration */}
        <div className="relative">
          <div className="absolute inset-0 bg-violet-200 rounded-[2rem] rotate-3" />

          <div className="relative bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border border-[#e5e7df]">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500 text-sm">Welcome to</p>

                <h3 className="text-3xl font-bold mt-1">PeoplePulse</h3>
              </div>

              <div className="bg-violet-100 p-4 rounded-2xl">
                <Users size={30} className="text-violet-500" />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-violet-50 p-5 rounded-2xl">
                <Users size={28} className="text-violet-500" />
                <h4 className="font-bold text-lg mt-4">People First</h4>
                <p className="text-sm text-gray-500 mt-1">
                  Better employee experiences
                </p>
              </div>
              <div className="bg-violet-50 p-5 rounded-2xl">
                <CalendarCheck size={28} className="text-violet-500" />
                <h4 className="font-bold text-lg mt-4">Work Smarter</h4>
                <p className="text-sm text-gray-500 mt-1">
                  Simplified HR processes
                </p>
              </div>
            </div>

            <div className="mt-5 bg-violet-500 text-white p-6 rounded-2xl">
              <Sparkles size={25} className="text-violet-200" />

              <h4 className="text-xl font-bold mt-3">
                People are our priority.
              </h4>

              <p className="text-green-100 text-sm mt-2">
                Building better workplaces, one step at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-16 py-20 bg-white">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-violet-500 font-bold uppercase tracking-widest text-sm">
            Our Features
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Everything HR Needs in One Place
          </h2>

          <p className="text-gray-500 mt-5 leading-7">
            PeoplePulse helps organizations manage their everyday HR activities
            through a simple and organized platform.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="p-7 rounded-2xl border border-[#e5e7df] bg-[#fafbf8] hover:shadow-xl hover:-translate-y-2 transition duration-300"
              >
                <div className="bg-violet-100 w-14 h-14 rounded-xl flex items-center justify-center">
                  <Icon size={27} className="text-violet-500" />
                </div>

                <h3 className="text-lg font-bold mt-6">{feature.title}</h3>

                <p className="text-gray-500 text-sm leading-6 mt-3">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-16 py-20">
        <div className="bg-violet-500 rounded-[2rem] p-10 md:p-16 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to simplify your HR management?
          </h2>

          <p className="text-green-100 mt-5 max-w-xl mx-auto leading-7">
            Join PeoplePulse and experience a smarter, simpler approach to
            workforce management.
          </p>

          <Link
            href="/sign-up"
            className="inline-flex items-center gap-2 mt-8 bg-white text-violet-500 px-8 py-4 rounded-xl font-semibold hover:bg-violet-100 transition shadow-lg"
          >
            Create Your Account
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-16 py-8 bg-white border-t border-[#e5e7df] flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-500">
        <p>© 2026 PeoplePulse. All rights reserved.</p>

        <div className="flex gap-5">
          <Link href="/sign-in" className="hover:text-violet-500">
            Sign In
          </Link>

          <Link href="/sign-up" className="hover:text-violet-500">
            Sign Up
          </Link>
        </div>
      </footer>
    </main>
  );
}
