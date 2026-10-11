"use client";

import { MapPin, Plus, Search, Building2, Train, Sun, Store, CheckCircle2, AlertTriangle, Edit3, LayoutGrid } from "lucide-react";

export default function ParkingLotsPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="text-[10px] font-bold text-blue-600 tracking-wider mb-1 uppercase flex items-center gap-1">
            <MapPin size={12} /> Facility Fleet Control
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-1">Parking Lots Management</h1>
          <p className="text-sm text-slate-500">Add, edit, and view capacities of your parking facilities across central hubs.</p>
        </div>
        <button className="bg-[#0033A0] hover:bg-blue-900 transition-colors text-white px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-sm">
          <Plus size={18} /> Add New Parking Lot
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-4">
        <div className="relative flex-1 w-full">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search parking lot by name, road..." 
            className="w-full bg-[#F4F7FB] border-none text-sm rounded-xl pl-12 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-400"
          />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shadow-sm">All Lots (4)</button>
          <button className="bg-[#F4F7FB] text-slate-600 hover:bg-slate-200 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors">Colombo City (3)</button>
          <button className="bg-[#F4F7FB] text-slate-600 hover:bg-slate-200 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors">Suburbs (1)</button>
        </div>
        <div className="hidden md:flex items-center gap-2 pl-4 border-l border-slate-100 text-xs font-bold text-slate-700">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div> Fleet Occupancy: 71%
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Card 1: City Center */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <Building2 size={24} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-lg font-bold text-slate-900">City Center Multi-Story</h2>
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold">Active</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                  <MapPin size={12} /> 45 Galle Road, Colombo 03
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-blue-600">Rs. 150</div>
              <div className="text-[10px] text-slate-500 font-semibold">per hour</div>
            </div>
          </div>

          <div className="bg-[#F8FAFC] rounded-xl p-4 mb-6">
            <div className="flex justify-between items-end mb-2">
              <div className="text-sm"><strong className="text-slate-900">38 Parked</strong> <span className="text-slate-500">/ 50 Slots</span></div>
              <div className="text-xs font-bold text-green-600 flex items-center gap-1"><CheckCircle2 size={14}/> 12 Available</div>
            </div>
            <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden mb-3">
              <div className="h-full bg-blue-700 w-[76%] rounded-full"></div>
            </div>
            <div className="flex gap-4 text-[10px] font-semibold text-slate-500">
              <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div> Std: 40</div>
              <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> EV Chargers: 6</div>
              <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Priority: 4</div>
            </div>
          </div>

          <div className="flex justify-between items-center text-xs text-slate-500 font-medium mb-6">
            <div className="flex items-center gap-1.5">Manager: <strong className="text-slate-700">Kasun Perera</strong></div>
            <div className="flex items-center gap-1.5">Fast EV Ready</div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-auto">
            <button className="border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm">
              <Edit3 size={16} /> Edit Details
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm shadow-sm">
              <LayoutGrid size={16} /> View Slots
            </button>
          </div>
        </div>

        {/* Card 2: Fort Station */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center shrink-0">
                <Train size={24} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-lg font-bold text-slate-900">Fort Station Park</h2>
                  <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-[10px] font-bold">Busy!</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                  <MapPin size={12} /> Station Road, Colombo 01
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-blue-600">Rs. 120</div>
              <div className="text-[10px] text-slate-500 font-semibold">per hour</div>
            </div>
          </div>

          <div className="bg-[#F8FAFC] rounded-xl p-4 mb-6">
            <div className="flex justify-between items-end mb-2">
              <div className="text-sm"><strong className="text-slate-900">45 Parked</strong> <span className="text-slate-500">/ 50 Slots</span></div>
              <div className="text-xs font-bold text-red-600 flex items-center gap-1"><AlertTriangle size={14}/> 5 Available - Busy!</div>
            </div>
            <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden mb-3">
              <div className="h-full bg-red-600 w-[90%] rounded-full"></div>
            </div>
            <div className="flex gap-4 text-[10px] font-semibold text-slate-500">
              <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div> Standard: 45</div>
              <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> EV: 5</div>
            </div>
          </div>

          <div className="flex justify-between items-center text-xs text-slate-500 font-medium mb-6">
            <div className="flex items-center gap-1.5">Manager: <strong className="text-slate-700">Nimal Silva</strong></div>
            <div className="flex items-center gap-1.5">Smart Sensor Active</div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-auto">
            <button className="border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm">
              <Edit3 size={16} /> Edit Details
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm shadow-sm">
              <LayoutGrid size={16} /> View Slots
            </button>
          </div>
        </div>

        {/* Card 3: Galle Face */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center shrink-0">
                <Sun size={24} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-lg font-bold text-slate-900">Galle Face Urban Lot</h2>
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold">Active</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                  <MapPin size={12} /> Main Promenade, Colombo 01
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-blue-600">Rs. 100</div>
              <div className="text-[10px] text-slate-500 font-semibold">per hour</div>
            </div>
          </div>

          <div className="bg-[#F8FAFC] rounded-xl p-4 mb-6">
            <div className="flex justify-between items-end mb-2">
              <div className="text-sm"><strong className="text-slate-900">29 Parked</strong> <span className="text-slate-500">/ 50 Slots</span></div>
              <div className="text-xs font-bold text-green-600 flex items-center gap-1"><CheckCircle2 size={14}/> 21 Available</div>
            </div>
            <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden mb-3">
              <div className="h-full bg-[#047857] w-[58%] rounded-full"></div>
            </div>
            <div className="flex gap-4 text-[10px] font-semibold text-slate-500">
              <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div> Total Capacity: 50 Spaces</div>
            </div>
          </div>

          <div className="flex justify-between items-center text-xs text-slate-500 font-medium mb-6">
            <div className="flex items-center gap-1.5">Manager: <strong className="text-slate-700">Dinesh K.</strong></div>
            <div className="flex items-center gap-1.5">Open Deck</div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-auto">
            <button className="border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm">
              <Edit3 size={16} /> Edit Details
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm shadow-sm">
              <LayoutGrid size={16} /> View Slots
            </button>
          </div>
        </div>

        {/* Card 4: Liberty Plaza */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <Store size={24} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-lg font-bold text-slate-900">Liberty Plaza Deck</h2>
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold">Active</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                  <MapPin size={12} /> R. A. De Mel Mawatha, Colombo 03
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-blue-600">Rs. 100</div>
              <div className="text-[10px] text-slate-500 font-semibold">per hour</div>
            </div>
          </div>

          <div className="bg-[#F8FAFC] rounded-xl p-4 mb-6">
            <div className="flex justify-between items-end mb-2">
              <div className="text-sm"><strong className="text-slate-900">30 Parked</strong> <span className="text-slate-500">/ 50 Slots</span></div>
              <div className="text-xs font-bold text-green-600 flex items-center gap-1"><CheckCircle2 size={14}/> 20 Available</div>
            </div>
            <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden mb-3">
              <div className="h-full bg-blue-700 w-[60%] rounded-full"></div>
            </div>
            <div className="flex gap-4 text-[10px] font-semibold text-slate-500">
              <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div> Total Capacity: 50 Spaces</div>
            </div>
          </div>

          <div className="flex justify-between items-center text-xs text-slate-500 font-medium mb-6">
            <div className="flex items-center gap-1.5">Manager: <strong className="text-slate-700">Sunil Jayawardena</strong></div>
            <div className="flex items-center gap-1.5">Lift Access</div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-auto">
            <button className="border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm">
              <Edit3 size={16} /> Edit Details
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm shadow-sm">
              <LayoutGrid size={16} /> View Slots
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}