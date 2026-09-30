import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-slate-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm z-10 relative">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="SmartPark Logo" width={40} height={40} className="rounded-md" />
          <span className="font-bold text-xl text-blue-800">SmartPark</span>
        </div>
        <div className="flex items-center gap-8 text-sm font-semibold">
          <Link href="#about" className="text-gray-600 hover:text-gray-900 transition">
            About Us
          </Link>
          <Link href="/auth/login" className="bg-blue-800 text-white px-6 py-2.5 rounded-lg hover:bg-blue-900 transition shadow-sm">
            Login
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-blue-100 to-teal-50 rounded-full blur-[100px] -z-10 opacity-60"></div>

        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-slate-900">
          Smart Parking Made Effortless
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-10 leading-relaxed font-medium">
          SmartPark connects drivers with real-time parking availability across Colombo. 
          Check live bay counts, reserve guaranteed slots, and experience fast, cashless 
          entry and exit at smart parking facilities.
        </p>
        <Link href="/auth/login" className="bg-blue-800 text-white px-8 py-3.5 rounded-lg text-base font-bold hover:bg-blue-900 transition flex items-center gap-2 shadow-md">
          Get Started <span className="text-xl">&rarr;</span>
        </Link>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white pt-10 pb-6 px-8 z-10 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h3 className="font-bold text-slate-900 mb-2 text-lg">Contact Us</h3>
            <p className="text-sm text-gray-500 font-medium">{"We're here to assist drivers and facility partners 24/7."}</p>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-wrap gap-8 text-sm text-gray-600 mt-6 md:mt-0 font-medium">
            <div className="flex items-center gap-2">
              <span className="text-blue-600 text-lg">📞</span> +94 11 234 5678
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600 text-lg">✉️</span> support@smartpark.lk
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600 text-lg">📍</span> Colombo, Sri Lanka
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-xs text-gray-400 mt-8 pt-4 border-t border-gray-50">
          &copy; 2026 SmartPark Technologies. All rights reserved.
        </div>
      </footer>
    </div>
  );
}