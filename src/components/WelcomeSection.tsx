export default function WelcomeSection() {
  return (
    <section className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h2 className="text-2xl font-bold text-[#26382c]">
          Welcome back, Admin! 👋
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Here's what's happening with your organization today.
        </p>
      </div>

      <div className="bg-violet-100 text-violet-600 px-4 py-2 rounded-xl text-sm font-semibold w-fit">
        Organization Overview
      </div>
    </section>
  );
}
