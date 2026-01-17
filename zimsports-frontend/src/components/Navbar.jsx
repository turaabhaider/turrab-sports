import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 lg:px-20 py-4 bg-white border-b border-gray-100">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 no-underline">
        <div className="bg-[#0056b3] p-2 rounded-lg">
          <span className="text-white font-black text-xl">T</span>
        </div>
        <span className="text-2xl font-black italic text-[#0056b3] uppercase tracking-tighter">
          Turrab<span className="text-gray-900">Sports</span>
        </span>
      </Link>

      {/* Center Links */}
      <div className="hidden md:flex items-center gap-10">
        <Link to="/" className="font-black text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-[#0056b3] no-underline transition-colors">Home</Link>
        <Link to="/fixtures" className="font-black text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-[#0056b3] no-underline transition-colors">Fixtures</Link>
        <Link to="/live-matches" className="font-black text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-[#0056b3] no-underline transition-colors">Live Streams</Link>
        <Link to="/clubs" className="font-black text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-[#0056b3] no-underline transition-colors">Clubs</Link>
      </div>

      {/* Right Buttons */}
      <div className="flex items-center gap-6">
        <Link to="/login" className="font-black text-[10px] uppercase tracking-[0.2em] text-gray-900 hover:text-[#0056b3] no-underline transition-colors">
          Login
        </Link>
        <Link to="/signup" className="no-underline">
          <button className="bg-[#0056b3] text-white px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-[0.2em] hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-95">
            Get Started
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;