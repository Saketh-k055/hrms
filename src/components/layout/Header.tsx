import { Search, Bell, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
type HeaderProps = {
  title: string;
  description: string;
};
export default function Header({ title, description }: HeaderProps) {
  return (
    <header className="h-20 bg-white border-b border-[#e5e7df] px-8 flex items-center justify-between">
      {/* Left side */}
      <div>
        <h1 className="text-xl font-bold text-[#26382c]">{title}</h1>
        <p className="text-sm text-gray-500">{description}</p>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-6">
        {/* Search bar */}
        <div className="hidden md:flex items-center gap-2 bg-[#fafbf8] border border-[#e5e7df] px-4 py-2 rounded-xl">
          <Search size={18} className="text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm text-[#26382c]"
          />
        </div>

        {/* Notification */}
        <Button className="relative p-2 rounded-full hover:bg-[#f4f5ef]">
          <Bell size={21} className="text-[#315c43]" />
          {/* <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span> */}
        </Button>

        {/* Profile */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
            <span className="text-violet-600 font-semibold">SK</span>
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-[#26382c]">Admin User</p>
            <p className="text-xs text-gray-500">HR Administrator</p>
          </div>

          <ChevronDown size={16} className="text-gray-500" />
        </div>
      </div>
    </header>
  );
}
