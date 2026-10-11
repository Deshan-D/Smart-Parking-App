"use client";

import { Download, Banknote, Car, ParkingCircle, UserCheck, CheckCircle2, LogIn, Settings2, ArrowLeftRight, ChevronRight, History, Building2, ArrowRight } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-slate-500 mb-1">• Monday, September 28, 2026</div>
          <h1 className="text-3xl font-bold text-slate-900">Welcome back, Admin</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> All 4 Parking Lots Operational
          </div>
          <button className="bg-white border border-slate-200 text-slate-700 px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-slate-50 transition shadow-sm flex items-center gap-2">
            <Download size={16} /> Daily Report (PDF)
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xs font-bold text-slate-500">Today&apos;s Total Revenue</h3>
            <div className="bg-blue-50 text-blue-600 p-1.5 rounded-lg"><Banknote size={16} /></div>
          </div>
          <div className="text-2xl font-extrabold text-slate-900 mb-2">Rs. 48,250</div>
          <div className="text-xs font-bold text-green-600 bg-green-50 inline-flex items-center px-2 py-0.5 rounded">
            ~ +12% from yesterday
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xs font-bold text-slate-500">Current Vehicles Parked</h3>
            <div className="bg-blue-50 text-blue-600 p-1.5 rounded-lg"><Car size={16} /></div>
          </div>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-2xl font-extrabold text-slate-900">142</span>
            <span className="text-sm font-medium text-slate-500">/ 200 Slots</span>
          </div>
          <div className="flex justify-between items-center text-[10px] text-slate-500 font-semibold mb-1">
            <span>Occupancy load</span>
            <span className="text-blue-600">71%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 w-[71%] rounded-full"></div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xs font-bold text-slate-500">Available Slots Now</h3>
            <div className="bg-green-50 text-green-600 p-1.5 rounded-lg"><ParkingCircle size={16} /></div>
          </div>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-2xl font-extrabold text-green-600">58</span>
            <span className="text-lg font-bold text-green-600">Slots</span>
          </div>
          <div className="text-xs text-slate-500 font-medium">Instant entry clearance enabled</div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xs font-bold text-slate-500">Active Staff on Duty</h3>
            <div className="bg-blue-50 text-blue-600 p-1.5 rounded-lg"><UserCheck size={16} /></div>
          </div>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-2xl font-extrabold text-slate-900">6</span>
          </div>
          <div className="text-lg font-bold text-slate-900 mb-1 leading-none">Attendants</div>
          <div className="text-[10px] text-slate-500 font-semibold flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Coverage across 4 locations
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Parking Lots Overview */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-slate-900">Parking Lots Quick Overview</h2>
            <p className="text-xs text-slate-500 font-medium">Real-time capacity distribution</p>
          </div>
          
          <div className="space-y-3">
            {/* Lot 1 */}
            <div className="bg-[#F8FAFC] rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-slate-600">
                  <Building2 size={20} />
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900">City Center Lot</div>
                  <div className="text-xs text-slate-500 font-medium">38 / 50 spots filled</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-sm font-bold text-slate-700">76%</div>
                <div className="bg-slate-200 text-slate-600 px-2 py-1 rounded text-[10px] font-bold">Normal</div>
                <button className="text-xs font-bold text-slate-700 hover:text-blue-600 transition">View Details</button>
              </div>
            </div>

            {/* Lot 2 */}
            <div className="bg-[#F8FAFC] rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-slate-600">
                  <Building2 size={20} />
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900">Fort Station Lot</div>
                  <div className="text-xs text-slate-500 font-medium">45 / 50 spots filled</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-sm font-bold text-red-600">90%</div>
                <div className="bg-red-100 text-red-600 px-2 py-1 rounded text-[10px] font-bold">High</div>
                <button className="text-xs font-bold text-slate-700 hover:text-blue-600 transition">View Details</button>
              </div>
            </div>

            {/* Lot 3 */}
            <div className="bg-[#F8FAFC] rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-slate-600">
                  <Building2 size={20} />
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900">Galle Face Lot</div>
                  <div className="text-xs text-slate-500 font-medium">29 / 50 spots filled</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-sm font-bold text-slate-700">58%</div>
                <div className="bg-slate-200 text-slate-600 px-2 py-1 rounded text-[10px] font-bold">Normal</div>
                <button className="text-xs font-bold text-slate-700 hover:text-blue-600 transition">View Details</button>
              </div>
            </div>

            {/* Lot 4 */}
            <div className="bg-[#F8FAFC] rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-slate-600">
                  <Building2 size={20} />
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900">Liberty Plaza</div>
                  <div className="text-xs text-slate-500 font-medium">30 / 50 spots filled</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-sm font-bold text-slate-700">60%</div>
                <div className="bg-slate-200 text-slate-600 px-2 py-1 rounded text-[10px] font-bold">Normal</div>
                <button className="text-xs font-bold text-slate-700 hover:text-blue-600 transition">View Details</button>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-xs">
            <span className="text-slate-500 font-medium">Need to scale lot allocations?</span>
            <button className="font-bold text-blue-600 flex items-center gap-1 hover:underline">
              Manage All Parking Structures <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Recent System Activity */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col">
          <div className="mb-6 flex justify-between items-start">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Recent System Activity</h2>
              <p className="text-xs text-slate-500 font-medium">Audited live operational log</p>
            </div>
            <History size={18} className="text-slate-400" />
          </div>

          <div className="flex-1 space-y-6">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                <CheckCircle2 size={16} />
              </div>
              <div className="text-xs">
                <div className="text-slate-700 font-medium leading-relaxed">
                  <strong className="text-slate-900">Kasun Perera</strong> verified <span className="font-bold text-blue-600 bg-blue-50 px-1 rounded">WP CAR-4589</span> at Gate 1
                </div>
                <div className="text-slate-400 mt-1">10:45 AM</div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <LogIn size={16} />
              </div>
              <div className="text-xs">
                <div className="text-slate-700 font-medium leading-relaxed">
                  New staff login: <strong className="text-slate-900">Nimal Silva</strong> at Fort Station
                </div>
                <div className="text-slate-400 mt-1">10:32 AM</div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                <Settings2 size={16} />
              </div>
              <div className="text-xs">
                <div className="text-slate-700 font-medium leading-relaxed">
                  Automated rate switched to <strong className="text-red-600">Peak</strong> for Fort Station (+Rs. 50)
                </div>
                <div className="text-slate-400 mt-1">10:15 AM</div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                <ArrowLeftRight size={16} />
              </div>
              <div className="text-xs">
                <div className="text-slate-700 font-medium leading-relaxed">
                  Shift change completed for <strong className="text-slate-900">Morning shift</strong>
                </div>
                <div className="text-slate-400 mt-1">09:50 AM</div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 text-right">
            <button className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1 justify-end w-full">
              View Full System Logs <ChevronRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}