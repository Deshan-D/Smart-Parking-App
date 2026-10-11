<<<<<<< Updated upstream
=======
"use client";

import { Volume2, Clock, Car, Banknote, LogIn, LogOut as LogOutIcon, History } from "lucide-react";

export default function EmployeeDashboard() {
  return (
    <>
      {/* Sub Header */}
      <div className="flex justify-between items-center px-6 py-3 border-b border-slate-100 bg-[#FAFCFF]">
        <div className="flex items-center gap-2 text-sm">
          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
          <span className="font-bold text-slate-700">Gate 01 Operational Terminal</span>
          <span className="text-slate-400 font-medium hidden md:inline">• Shift 01 (Morning)</span>
        </div>
        <div className="flex items-center gap-4 text-sm font-semibold text-slate-600">
          <div className="flex items-center gap-1.5">
            <Clock size={16} className="text-slate-400" /> 08:29:20 AM
          </div>
          <div className="w-px h-4 bg-slate-300"></div>
          <button className="flex items-center gap-1.5 text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md text-xs">
            <Volume2 size={14} /> Sound ON
          </button>
        </div>
      </div>

      <div className="p-6">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Capacity Card */}
          <div className="border border-slate-100 p-5 rounded-2xl shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xs font-bold text-slate-500 tracking-wider">AVAILABLE CAPACITY</h3>
              <div className="bg-green-100 text-green-700 p-1.5 rounded-lg"><Car size={16} /></div>
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-extrabold text-[#047857]">12</span>
              <span className="text-lg font-bold text-[#047857]">Free Slots</span>
            </div>
            <div className="flex justify-between items-center text-xs text-slate-500 font-medium mb-3">
              <span>out of <strong className="text-slate-700">50</strong> total spaces</span>
              <span className="bg-green-50 text-green-600 px-2 py-0.5 rounded text-[10px] font-bold">24% Open</span>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden flex">
              <div className="h-full bg-[#047857] w-[76%] rounded-full"></div>
            </div>
          </div>

          {/* Traffic Card */}
          <div className="border border-slate-100 p-5 rounded-2xl shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xs font-bold text-slate-500 tracking-wider">TODAY&apos;S TRAFFIC</h3>
              <div className="bg-blue-50 text-blue-600 p-1.5 rounded-lg"><Car size={16} /></div>
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-extrabold text-blue-600">142</span>
              <span className="text-lg font-bold text-slate-800">Entered</span>
            </div>
            <div className="flex justify-between items-center text-xs text-slate-500 font-medium mt-4 pt-1">
              <span>Since shift start 06:00 AM</span>
              <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-[10px] font-bold">+18 / hr</span>
            </div>
          </div>

          {/* Revenue Card */}
          <div className="border border-slate-100 p-5 rounded-2xl shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xs font-bold text-slate-500 tracking-wider">COLLECTED REVENUE</h3>
              <div className="bg-slate-100 text-slate-600 p-1.5 rounded-lg"><Banknote size={16} /></div>
            </div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-sm font-bold text-slate-800">Rs.</span>
              <span className="text-4xl font-extrabold text-slate-900">28,450</span>
            </div>
            <div className="text-xs text-slate-500 font-medium mb-3">Cash drawer active</div>
            <div className="flex justify-between items-center text-[11px] text-slate-500 font-medium mt-3">
              <span>Standard: <strong className="text-slate-700">Rs. 150/hr</strong></span>
              <span>Paid Exits: <strong className="text-slate-700">114</strong></span>
            </div>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <button className="bg-[#047857] hover:bg-[#065f46] transition-colors text-white rounded-2xl p-8 flex flex-col items-center justify-center shadow-md active:scale-[0.98]">
            <div className="w-16 h-16 border-2 border-white/30 rounded-full flex items-center justify-center mb-4">
              <LogIn size={32} />
            </div>
            <h2 className="text-2xl font-bold mb-1 tracking-wide">VEHICLE IN (+1)</h2>
            <p className="text-green-100 text-sm font-medium mb-3">Click when vehicle enters</p>
            <div className="bg-black/10 px-3 py-1 rounded text-xs font-semibold flex items-center gap-1.5">
              <span className="opacity-70">👆 Press or Tap</span> [Key: I]
            </div>
          </button>

          <button className="bg-[#C1121F] hover:bg-[#9f0f19] transition-colors text-white rounded-2xl p-8 flex flex-col items-center justify-center shadow-md active:scale-[0.98]">
            <div className="w-16 h-16 border-2 border-white/30 rounded-full flex items-center justify-center mb-4">
              <LogOutIcon size={32} />
            </div>
            <h2 className="text-2xl font-bold mb-1 tracking-wide">VEHICLE OUT (-1)</h2>
            <p className="text-red-100 text-sm font-medium mb-3">Click when vehicle leaves</p>
            <div className="bg-black/10 px-3 py-1 rounded text-xs font-semibold flex items-center gap-1.5">
              <span className="opacity-70">👆 Press or Tap</span> [Key: O]
            </div>
          </button>
        </div>

        {/* Recent Activity Table */}
        <div className="bg-[#FAFCFF] border border-slate-100 rounded-2xl p-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <History size={18} className="text-blue-600" /> Recent Gate Activity (Latest 4)
            </h3>
            <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-1 rounded">Real-time Stream</span>
          </div>
          
          <div className="w-full overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 bg-slate-100/50">
                <tr>
                  <th className="px-4 py-3 font-semibold rounded-l-lg">Time</th>
                  <th className="px-4 py-3 font-semibold">Vehicle Plate</th>
                  <th className="px-4 py-3 font-semibold">Gate Action</th>
                  <th className="px-4 py-3 font-semibold text-right rounded-r-lg">Fee / Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="px-4 py-4 text-slate-500 font-medium">10:48 AM</td>
                  <td className="px-4 py-4"><span className="bg-slate-100 px-3 py-1 rounded font-bold text-slate-800 tracking-wider">WP CAR-4589</span></td>
                  <td className="px-4 py-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold inline-flex items-center gap-1"><LogIn size={12}/> GATE IN</span></td>
                  <td className="px-4 py-4 text-right">
                    <div className="font-bold text-slate-800">Ticket Issued</div>
                    <div className="text-[11px] text-slate-500">Slot B-08</div>
                  </td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-4 py-4 text-slate-500 font-medium">10:42 AM</td>
                  <td className="px-4 py-4"><span className="bg-slate-100 px-3 py-1 rounded font-bold text-slate-800 tracking-wider">SP KY-1022</span></td>
                  <td className="px-4 py-4"><span className="bg-red-50 text-red-600 px-2 py-1 rounded text-xs font-bold inline-flex items-center gap-1"><LogOutIcon size={12}/> GATE OUT</span></td>
                  <td className="px-4 py-4 text-right">
                    <div className="font-bold text-[#047857]">Rs. 150</div>
                    <div className="text-[11px] text-slate-500">Paid (Cash)</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> Stashed changes
