import Image from "next/image";
import Link from "next/link";
import { LogOut, MapPin, User } from "lucide-react";

export default function EmployeeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F4F7FB] font-sans text-slate-900 p-2 md:p-4">
      <div className="max-w-6xl mx-auto bg-white rounded-[20px] shadow-sm overflow-hidden border border-slate-200">
        
        {/* Top Navbar */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-slate-100">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center overflow-hidden">
                <Image src="/logo.png" alt="SmartPark" width={32} height={32} className="object-cover" />
              </div>
              <span className="font-bold text-lg">SmartPark</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
              <MapPin size={12} /> City Center - Gate 01 <span className="w-1.5 h-1.5 bg-green-500 rounded-full ml-1"></span> Active
            </div>
          </div>

          <div className="hidden md:flex bg-slate-50 p-1 rounded-xl text-sm font-semibold border border-slate-100">
            <Link href="/employee" className="bg-blue-700 text-white px-4 py-1.5 rounded-lg shadow-sm">Live Gate</Link>
            <button className="text-slate-500 px-4 py-1.5 hover:text-slate-700">Verify Booking</button>
            <button className="text-slate-500 px-4 py-1.5 hover:text-slate-700">Shift Summary</button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-right">
              <div className="hidden md:block">
                <div className="text-sm font-bold leading-none">Kasun P.</div>
                <div className="text-[10px] text-slate-500 font-medium">Attendant</div>
              </div>
              <div className="w-8 h-8 bg-slate-200 rounded-full overflow-hidden flex items-center justify-center">
                <User size={16} className="text-slate-500" />
              </div>
            </div>
            <Link href="/auth/login" className="flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-red-600 transition-colors">
              <LogOut size={16} /> Logout
            </Link>
          </div>
        </div>

        {/* පිටුවේ අන්තර්ගතය පෙන්වන කොටස */}
        {children}

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 text-[10px] text-slate-400 font-medium flex justify-between items-center bg-[#FAFCFF]">
          <span>&copy; 2026 SmartPark Operational Console</span>
          <span>• High Reliability Mode</span>
        </div>

      </div>
    </div>
  );
}