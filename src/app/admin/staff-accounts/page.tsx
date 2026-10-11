"use client";

import { UserPlus, Users, UserCheck, Clock, Building2, ParkingCircle, KeyRound, RefreshCw, Download, MoreHorizontal } from "lucide-react";
import Image from "next/image";

export default function StaffAccountsPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="text-[10px] font-bold text-blue-600 tracking-wider mb-1 uppercase flex items-center gap-1.5">
            PERSONNEL DIRECTORY <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-1">Staff & Employee Accounts</h1>
          <p className="text-sm text-slate-500">Manage gate attendants, enforce access PINs, and assign duty to smart parking locations.</p>
        </div>
        <button className="bg-[#0033A0] hover:bg-blue-900 transition-colors text-white px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-sm">
          <UserPlus size={18} /> Add New Employee
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex justify-between items-center">
          <div>
            <h3 className="text-[11px] font-bold text-slate-500 tracking-wider mb-1 uppercase">Total Staff</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-extrabold text-slate-900">8</span>
              <span className="text-xs font-semibold text-slate-500">Attendants</span>
            </div>
          </div>
          <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
            <Users size={20} />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex justify-between items-center">
          <div>
            <h3 className="text-[11px] font-bold text-slate-500 tracking-wider mb-1 uppercase">On Duty Now</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-extrabold text-green-600">4</span>
              <span className="text-xs font-semibold text-slate-500">Staff Active</span>
            </div>
          </div>
          <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
            <UserCheck size={20} />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex justify-between items-center">
          <div>
            <h3 className="text-[11px] font-bold text-slate-500 tracking-wider mb-1 uppercase">Off Duty / Standby</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-extrabold text-slate-900">4</span>
              <span className="text-xs font-semibold text-slate-500">Staff</span>
            </div>
          </div>
          <div className="w-10 h-10 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center">
            <Clock size={20} />
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Roster Table */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Assigned Duty Roster</h2>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Real-time gateway credentials & shifts across all facilities</p>
            </div>
            <div className="bg-[#F4F7FB] text-slate-500 px-3 py-1 rounded-lg text-[10px] font-bold">5 of 8 Showing</div>
          </div>

          <div className="w-full overflow-x-auto flex-1">
            <table className="w-full text-sm text-left whitespace-nowrap">
              <thead className="text-xs text-slate-500 bg-[#F8FAFC]">
                <tr>
                  <th className="px-4 py-3 font-semibold rounded-l-xl">Staff Member</th>
                  <th className="px-4 py-3 font-semibold">Role</th>
                  <th className="px-4 py-3 font-semibold">Assigned Lot</th>
                  <th className="px-4 py-3 font-semibold">Shift Window</th>
                  <th className="px-4 py-3 font-semibold rounded-r-xl">Auth / PIN</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {/* Row 1 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden shrink-0">
                        <Image src="/logo.png" alt="Kasun" width={32} height={32} className="opacity-50 object-cover" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-xs">Kasun Perera</div>
                        <div className="text-[10px] font-medium text-slate-400">ID: SP-082</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-[10px] font-bold">Senior Attendant</span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                      <Building2 size={14} className="text-blue-600" /> City Center Multi-Story
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-xs font-semibold text-slate-700">Morning</div>
                    <div className="text-[10px] font-medium text-slate-400">06:00 - 14:00</div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                      <span className="text-xs font-bold text-green-700">Active</span>
                      <span className="text-slate-300 tracking-[0.2em] font-bold ml-1">••••</span>
                    </div>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden shrink-0">
                        <Image src="/logo.png" alt="Nimal" width={32} height={32} className="opacity-50 object-cover" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-xs">Nimal Silva</div>
                        <div className="text-[10px] font-medium text-slate-400">ID: SP-114</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-[10px] font-bold">Gate Operator</span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                      <ParkingCircle size={14} className="text-blue-600" /> Fort Station Park
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-xs font-semibold text-slate-700">Morning</div>
                    <div className="text-[10px] font-medium text-slate-400">06:00 - 14:00</div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                      <span className="text-xs font-bold text-green-700">Active</span>
                      <span className="text-slate-300 tracking-[0.2em] font-bold ml-1">••••</span>
                    </div>
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden shrink-0">
                        <Image src="/logo.png" alt="Dinesh" width={32} height={32} className="opacity-50 object-cover" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-xs">Dinesh Kumara</div>
                        <div className="text-[10px] font-medium text-slate-400">ID: SP-201</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-[10px] font-bold">Gate Operator</span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                      <ParkingCircle size={14} className="text-blue-600" /> Galle Face Urban Lot
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-xs font-semibold text-slate-700">Evening</div>
                    <div className="text-[10px] font-medium text-slate-400">14:00 - 22:00</div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2 text-slate-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                      <span className="text-xs font-bold">Scheduled</span>
                      <span className="tracking-[0.2em] font-bold ml-1 opacity-50">••••</span>
                    </div>
                  </td>
                </tr>

                {/* Row 4 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#F4F7FB] text-blue-600 flex items-center justify-center font-bold text-xs shrink-0">
                        SJ
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-xs">Sunil Jayawardena</div>
                        <div className="text-[10px] font-medium text-slate-400">ID: SP-049</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-[10px] font-bold">Cashier & Guard</span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                      <Building2 size={14} className="text-blue-600" /> Liberty Plaza Deck
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-xs font-semibold text-slate-700">Night</div>
                    <div className="text-[10px] font-medium text-slate-400">22:00 - 06:00</div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2 text-slate-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                      <span className="text-xs font-bold">Scheduled</span>
                      <span className="tracking-[0.2em] font-bold ml-1 opacity-50">••••</span>
                    </div>
                  </td>
                </tr>

                {/* Row 5 */}
                <tr className="hover:bg-slate-50/50 transition-colors opacity-60">
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center font-bold text-xs shrink-0">
                        DR
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-xs">Dilan Rajapaksa</div>
                        <div className="text-[10px] font-medium text-slate-400">ID: SP-138</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded-md text-[10px] font-bold">Assistant Attendant</span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                      <Building2 size={14} /> City Center Multi-Story
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-xs font-semibold text-slate-500">Off Duty</div>
                    <div className="text-[10px] font-medium text-slate-400">Roster Rest</div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2 text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                      <span className="text-xs font-bold">Inactive</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100">
            <button className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1.5">
              Export Staff Roster <Download size={14} />
            </button>
          </div>
        </div>

        {/* Quick Add Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#0033A0] text-white rounded-xl flex items-center justify-center shadow-sm">
              <UserPlus size={20} />
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-900">Quick Add Employee</h2>
              <p className="text-[10px] text-slate-500 font-medium">Instant gate login provision</p>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name</label>
              <input 
                type="text" 
                placeholder="e.g. Ruwan Perera" 
                className="w-full bg-[#F4F7FB] border-none text-sm rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-400" 
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Phone Number</label>
              <input 
                type="text" 
                placeholder="077 123 4567" 
                className="w-full bg-[#F4F7FB] border-none text-sm rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-400" 
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Assign to Lot</label>
              <div className="relative">
                <select className="w-full bg-[#F4F7FB] border-none text-sm rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-100 transition-all appearance-none text-slate-700">
                  <option>City Center Multi-Story</option>
                  <option>Fort Station Park</option>
                  <option>Galle Face Urban Lot</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  ▼
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Assign Role</label>
              <div className="relative">
                <select className="w-full bg-[#F4F7FB] border-none text-sm rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-100 transition-all appearance-none text-slate-700">
                  <option>Gate Attendant</option>
                  <option>Senior Attendant</option>
                  <option>Cashier</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  ▼
                </div>
              </div>
            </div>

            <div className="pt-2">
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">4-Digit Terminal Login PIN</label>
              <div className="flex gap-2">
                <div className="flex-1 bg-blue-50 text-blue-700 border border-blue-100 rounded-xl px-4 py-3 flex items-center justify-between font-bold text-lg tracking-wider">
                  4821
                  <KeyRound size={16} className="text-blue-400 opacity-50" />
                </div>
                <button type="button" className="bg-[#F4F7FB] hover:bg-slate-200 text-slate-600 px-4 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5">
                  <RefreshCw size={14} /> New
                </button>
              </div>
              <p className="text-[9px] text-slate-400 font-medium mt-2 leading-relaxed">
                Staff uses this PIN to unlock the entry tablet barcode scanners
              </p>
            </div>

            <button type="button" className="w-full bg-[#0033A0] hover:bg-blue-900 transition-colors text-white font-semibold py-3.5 rounded-xl flex justify-center items-center gap-2 mt-4 shadow-sm">
              <UserPlus size={18} /> Create Account
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}