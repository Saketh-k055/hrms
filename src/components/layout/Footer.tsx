import { Copyright } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#e5e7df] py-4 px-6 text-sm text-gray-500 flex items-center justify-center">
      <Copyright size={16} />
      <p className="ml-2">2026 PeoplePulse HRMS. All rights reserved</p>
      <span className="mx-2">|</span>
      <p className="ml-2">Contact: info@peoplepulse.com</p>

    </footer>
  );
}
