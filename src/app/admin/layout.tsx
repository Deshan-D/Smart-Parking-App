import Image from "next/image";
import Link from "next/link";
import { LayoutDashboard, SquareParking, Users, CircleDollarSign, Building2, Bell } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F4F7FB] font-sans flex text-slate-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col h-screen sticky top-0">
        <div className="p-6 flex items-center gap-3 border-b border-slate-100">
          <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center overflow-hidden">
            <Image src="/logo.png" alt="SmartPark" width={40} height={40} className="object-cover" />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight">SmartPark</h1>
            <span className="text-[11px] font-semibold text-slate-500">Admin Console</span>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-1.5">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-xl font-medium shadow-sm">
            <LayoutDashboard size={18} /> Overview
          </Link>
          <Link href="/admin/parking-lots" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl font-medium transition-colors">
            <SquareParking size={18} /> Parking Lots
          </Link>
          <Link href="/admin/staff-accounts" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl font-medium transition-colors">
            <Users size={18} /> Staff Accounts
          </Link>
          <Link href="/admin/pricing" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl font-medium transition-colors">
            <CircleDollarSign size={18} /> Pricing & Rates
          </Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
        {/* Topbar */}
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
            <Building2 size={16} /> Central Operations
          </div>
          <div className="flex items-center gap-6">
            <button className="text-slate-400 hover:text-slate-600">
              <Bell size={20} />
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
              <div className="text-right">
                <div className="text-sm font-bold text-slate-800">Admin Officer</div>
                <div className="text-[11px] text-slate-500 font-medium">HQ Control</div>
              </div>
              <div className="w-9 h-9 bg-slate-200 rounded-full overflow-hidden flex items-center justify-center">
                <Image src="/logo.png" alt="Profile" width={36} height={36} className="opacity-50" />
              </div>
            </div>
          </div>
        </header>
        
        {/* Page Content */}
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}