"use client";

import Image from "next/image";
import { useState } from "react";
import { User, Shield, Lock, Eye, Building2, HeadphonesIcon } from "lucide-react";

export default function LoginPage() {
  const [role, setRole] = useState("staff");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] p-4 font-sans text-slate-900">
      <div className="bg-white p-8 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full max-w-[420px]">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-12 h-12 mb-4 bg-blue-800 rounded-xl flex items-center justify-center overflow-hidden">
             <Image src="/logo.png" alt="SmartPark Logo" width={48} height={48} className="object-cover" />
          </div>
          
          <div className="flex items-center gap-2 mb-1.5">
            <h1 className="font-bold text-xl">SmartPark</h1>
            <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-md border border-blue-100 tracking-wide">
              STAFF ACCESS
            </span>
          </div>
          <h2 className="text-2xl font-semibold mb-2 text-slate-800">Terminal Sign In</h2>
          <p className="text-center text-xs text-gray-500 leading-relaxed max-w-[280px]">
            Authorized parking lot attendants and cashier terminal access
          </p>
        </div>

        {/* Role Toggle (Staff/Admin) */}
        <div className="flex bg-slate-100 p-1.5 rounded-xl mb-6 text-xs font-semibold">
          <button 
            onClick={() => setRole("staff")} 
            className={`flex-1 flex justify-center items-center gap-2 py-2.5 rounded-lg transition-all ${
              role === "staff" ? "bg-white text-blue-700 shadow-sm" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <User size={15} /> Staff / Attendant
          </button>
          <button 
            onClick={() => setRole("admin")} 
            className={`flex-1 flex justify-center items-center gap-2 py-2.5 rounded-lg transition-all ${
              role === "admin" ? "bg-white text-blue-700 shadow-sm" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <Shield size={15} /> Admin / Management
          </button>
        </div>

        {/* Login Form */}
        <form className="space-y-4">
          <div>
            <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 mb-1.5">
              <User size={14} className="text-slate-500" /> Employee ID or Mobile Number
            </label>
            <input 
              type="text" 
              placeholder="e.g. SP-4921 or (+94) XX XXX XXXX" 
              className="w-full bg-[#F4F7FB] border border-transparent text-sm rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:bg-white transition-all placeholder:text-slate-400" 
            />
          </div>

          <div>
            <div className="flex justify-between items-end mb-1.5">
              <label className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <Lock size={14} className="text-slate-500" /> 4-Digit PIN or Password
              </label>
              <a href="#" className="text-[10px] font-semibold text-blue-600 hover:underline">
                Forgot PIN / Password?
              </a>
            </div>
            <div className="relative">
              <input 
                type="password" 
                placeholder="Enter 4-digit PIN or password" 
                className="w-full bg-[#F4F7FB] border border-transparent text-sm rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:bg-white transition-all placeholder:text-slate-400" 
              />
              <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                <Eye size={18} />
              </button>
            </div>
          </div>

          {/* Shows only for Staff */}
          {role === "staff" && (
            <div>
              <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 mb-1.5 mt-2">
                <Building2 size={14} className="text-slate-500" /> Assigned Facility Gate
              </label>
              <div className="relative">
                <select className="w-full bg-[#F4F7FB] border border-transparent text-sm rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:bg-white transition-all appearance-none text-slate-700 font-medium">
                  <option>Main Terminal Gate 03 (Cashier)</option>
                  <option>North Gate 01</option>
                  <option>Basement Level 2</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </div>
              </div>
            </div>
          )}

          <button type="button" className="w-full bg-[#0033A0] text-white font-semibold py-3.5 rounded-xl hover:bg-blue-900 transition-colors flex justify-center items-center gap-2 mt-2">
            Log In to Gate Terminal <span className="text-lg">&rarr;</span>
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-100 flex justify-center">
          <button className="flex items-center gap-2 text-[11px] font-semibold text-slate-500 bg-[#F4F7FB] px-4 py-2 rounded-full hover:bg-slate-200 transition-colors">
            <HeadphonesIcon size={14} className="text-[#0033A0]" /> Contact Operations Support <span className="text-[#0033A0]">Ext 402</span>
          </button>
        </div>

      </div>
    </div>
  );
}