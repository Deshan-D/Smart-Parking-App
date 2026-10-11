"use client";

import { Save, RotateCcw, Banknote, TrendingUp, Moon, Building2, Info, CheckCircle2 } from "lucide-react";

export default function PricingRatesPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="text-[10px] font-bold text-blue-600 tracking-wider mb-1 uppercase flex items-center gap-1.5">
            TARIFF SETTINGS
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-1">Pricing & Parking Rates</h1>
          <p className="text-sm text-slate-500">Set standard hourly parking rates and simple peak hours adjustments.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-blue-50 hover:bg-blue-100 text-blue-700 transition-colors px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2">
            Reset Defaults
          </button>
          <button className="bg-[#2563EB] hover:bg-blue-700 transition-colors text-white px-6 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-sm">
            <Save size={18} /> Save Changes
          </button>
        </div>
      </div>

      {/* Top Grid for Rate Settings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Base Standard Rates */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <Banknote size={20} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">Base Standard Rates</h2>
                <p className="text-[11px] text-slate-500 font-medium">Default hourly tariffs applied across standard bays</p>
              </div>
            </div>
            <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded-md text-[10px] font-bold text-center leading-tight">
              Global<br/>rule
            </span>
          </div>

          <div className="space-y-6">
            {/* Standard Hourly Rate */}
            <div>
              <label className="block text-xs font-bold text-slate-900 mb-2">Standard Hourly Rate</label>
              <div className="flex items-center bg-[#F8FAFC] border border-slate-100 rounded-xl px-4 py-3">
                <span className="text-slate-500 font-bold mr-2">Rs.</span>
                <input type="text" defaultValue="100" className="bg-transparent border-none outline-none font-bold text-lg text-slate-900 w-full" />
                <span className="text-slate-400 text-xs font-semibold">/ hour</span>
              </div>
            </div>

            {/* First 15 Minutes Free */}
            <div className="bg-[#F8FAFC] border border-slate-100 rounded-xl p-4 flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-slate-900">First 15 Minutes Free</div>
                <div className="text-[11px] text-slate-500 font-medium">Grace period for quick drop-offs, pickups, and lot transit</div>
              </div>
              {/* Toggle Switch (ON) */}
              <div className="w-12 h-6 bg-[#047857] rounded-full flex items-center p-1 cursor-pointer shrink-0 transition-colors">
                <div className="w-4 h-4 bg-white rounded-full translate-x-6 shadow-sm transition-transform"></div>
              </div>
            </div>

            {/* Daily Maximum Cap */}
            <div>
              <label className="block text-xs font-bold text-slate-900 mb-2">Daily Maximum Cap</label>
              <div className="flex items-center bg-[#F8FAFC] border border-slate-100 rounded-xl px-4 py-3">
                <span className="text-slate-500 font-bold mr-2">Rs.</span>
                <input type="text" defaultValue="800" className="bg-transparent border-none outline-none font-bold text-lg text-slate-900 w-full" />
                <span className="text-slate-400 text-xs font-semibold">/ day</span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium mt-2">Applies after 8 continuous hours of parked duration.</p>
            </div>
            
            <div className="flex items-start gap-2 pt-2">
              <CheckCircle2 size={14} className="text-[#047857] mt-0.5 shrink-0" />
              <p className="text-[10px] text-slate-500 font-medium">Guaranteed transparent billing without hidden processing surcharges.</p>
            </div>
          </div>
        </div>

        {/* Dynamic & Night Rates */}
        <div className="space-y-6">
          
          {/* Automatic Busy Hour Rate */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                  <TrendingUp size={16} />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-slate-900">Automatic Busy Hour Rate</h2>
                  <p className="text-[11px] text-slate-500 font-medium">Dynamic surge trigger based on live lot capacity</p>
                </div>
              </div>
              {/* Toggle Switch (ON) */}
              <div className="w-12 h-6 bg-[#047857] rounded-full flex items-center p-1 cursor-pointer shrink-0 transition-colors">
                <div className="w-4 h-4 bg-white rounded-full translate-x-6 shadow-sm transition-transform"></div>
              </div>
            </div>
            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              When a parking lot becomes more than <strong className="text-slate-900">80% full</strong>, automatically increase the rate to manage demand.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-900 mb-1.5">Additional Amount</label>
                <div className="flex items-center bg-[#F8FAFC] border border-slate-100 rounded-xl px-4 py-2.5">
                  <span className="text-slate-900 font-bold mr-1">+ Rs.</span>
                  <input type="text" defaultValue="50" className="bg-transparent border-none outline-none font-bold text-base text-slate-900 w-full" />
                  <span className="text-slate-400 text-[10px] font-semibold">/ hr</span>
                </div>
              </div>
              <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-3">
                <div className="text-[9px] font-bold text-blue-600 uppercase tracking-wider mb-1">Driver App Notice</div>
                <div className="text-sm font-bold text-[#2563EB]">High Demand - Rs. 150/hr</div>
              </div>
            </div>

            <div className="mt-4 flex gap-2 text-[10px] text-slate-500 font-medium">
              <Info size={14} className="text-blue-500 shrink-0" />
              Drivers are alerted before gate barrier check-in confirmation.
            </div>
          </div>

          {/* Simple Night Discount */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center shrink-0">
                  <Moon size={16} />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-slate-900">Simple Night Discount</h2>
                  <p className="text-[11px] text-slate-500 font-medium">Off-peak resident and overnight visitor incentive</p>
                </div>
              </div>
              {/* Toggle Switch (ON) */}
              <div className="w-12 h-6 bg-[#047857] rounded-full flex items-center p-1 cursor-pointer shrink-0 transition-colors">
                <div className="w-4 h-4 bg-white rounded-full translate-x-6 shadow-sm transition-transform"></div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-1">
                <label className="block text-[10px] font-bold text-slate-900 mb-1.5">Night Hours</label>
                <div className="text-xs font-bold text-slate-700">10:00 PM - 06:00 AM</div>
              </div>
              <div className="flex-1">
                <div className="flex items-center bg-[#F8FAFC] border border-slate-100 rounded-xl px-4 py-2.5">
                  <span className="text-slate-500 font-bold mr-2">Rs.</span>
                  <input type="text" defaultValue="60" className="bg-transparent border-none outline-none font-bold text-base text-slate-900 w-full" />
                  <span className="text-slate-400 text-[10px] font-semibold">/ hour</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Rate by Facility Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        <div className="flex justify-between items-end mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
              <Building2 size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">Rate by Facility</h2>
              <p className="text-[11px] text-slate-500 font-medium">Real-time status and active live hourly charge per location</p>
            </div>
          </div>
          <div className="text-[10px] font-bold text-slate-500">4 Managed Locations</div>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-[10px] text-slate-500 bg-[#F8FAFC] uppercase tracking-wider font-bold">
              <tr>
                <th className="px-6 py-4 rounded-l-xl">Facility Name</th>
                <th className="px-6 py-4">Base Rate</th>
                <th className="px-6 py-4">Occupancy Status</th>
                <th className="px-6 py-4">Current Rate</th>
                <th className="px-6 py-4 text-right rounded-r-xl">Quick Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4 font-bold text-slate-900 flex items-center gap-2">
                  <Building2 size={16} className="text-blue-600" /> City Center Multi-Story
                </td>
                <td className="px-6 py-4 text-slate-600 font-medium">Rs. 100/hr</td>
                <td className="px-6 py-4">
                  <span className="bg-red-50 text-red-600 px-2 py-1 rounded-md text-[10px] font-bold inline-flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div> 86% (Busy)
                  </span>
                </td>
                <td className="px-6 py-4 font-bold text-blue-600">Rs. 150/hr</td>
                <td className="px-6 py-4 text-right">
                  <button className="bg-[#F4F7FB] hover:bg-slate-200 text-slate-700 px-4 py-1.5 rounded-lg text-xs font-bold transition-colors">Change Rate</button>
                </td>
              </tr>

              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4 font-bold text-slate-900 flex items-center gap-2">
                  <Building2 size={16} className="text-blue-600" /> Fort Station
                </td>
                <td className="px-6 py-4 text-slate-600 font-medium">Rs. 100/hr</td>
                <td className="px-6 py-4">
                  <span className="bg-red-50 text-red-600 px-2 py-1 rounded-md text-[10px] font-bold inline-flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div> 92% (Busy)
                  </span>
                </td>
                <td className="px-6 py-4 font-bold text-blue-600">Rs. 150/hr</td>
                <td className="px-6 py-4 text-right">
                  <button className="bg-[#F4F7FB] hover:bg-slate-200 text-slate-700 px-4 py-1.5 rounded-lg text-xs font-bold transition-colors">Change Rate</button>
                </td>
              </tr>

              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4 font-bold text-slate-900 flex items-center gap-2">
                  <Building2 size={16} className="text-blue-600" /> Galle Face Lot
                </td>
                <td className="px-6 py-4 text-slate-600 font-medium">Rs. 100/hr</td>
                <td className="px-6 py-4">
                  <span className="bg-green-50 text-green-700 px-2 py-1 rounded-md text-[10px] font-bold inline-flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div> 42% (Normal)
                  </span>
                </td>
                <td className="px-6 py-4 font-bold text-slate-900">Rs. 100/hr</td>
                <td className="px-6 py-4 text-right">
                  <button className="bg-[#F4F7FB] hover:bg-slate-200 text-slate-700 px-4 py-1.5 rounded-lg text-xs font-bold transition-colors">Change Rate</button>
                </td>
              </tr>

              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4 font-bold text-slate-900 flex items-center gap-2">
                  <Building2 size={16} className="text-blue-600" /> Liberty Plaza Deck
                </td>
                <td className="px-6 py-4 text-slate-600 font-medium">Rs. 100/hr</td>
                <td className="px-6 py-4">
                  <span className="bg-green-50 text-green-700 px-2 py-1 rounded-md text-[10px] font-bold inline-flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div> 65% (Normal)
                  </span>
                </td>
                <td className="px-6 py-4 font-bold text-slate-900">Rs. 100/hr</td>
                <td className="px-6 py-4 text-right">
                  <button className="bg-[#F4F7FB] hover:bg-slate-200 text-slate-700 px-4 py-1.5 rounded-lg text-xs font-bold transition-colors">Change Rate</button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}