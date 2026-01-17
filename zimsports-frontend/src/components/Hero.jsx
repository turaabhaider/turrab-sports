import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-32 px-8 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <span className="inline-block px-4 py-2 rounded-full bg-[#f0f7ff] text-[#0056b3] font-bold text-[10px] uppercase tracking-widest mb-6">
            The Future of Local Sports
          </span>
          <h1 className="text-7xl lg:text-8xl font-black text-gray-900 leading-[0.9] tracking-tighter mb-8 uppercase italic">
            Play. Stream.<br />
            <span className="text-[#0056b3] not-italic">Win Together.</span>
          </h1>
          <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-lg mb-10">
            Turrab Sports brings professional-grade broadcasting and management tools to your local club.
          </p>
          
          <div className="flex items-center gap-4">
            {/* CHANGED: Link path updated from /login to /signup */}
            <Link to="/signup" className="no-underline">
              <button className="px-8 py-4 bg-[#0056b3] text-white rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#0056b3]/10 to-transparent rounded-[4rem] blur-3xl"></div>
          
          <Link to="/live-matches" className="no-underline block group">
            <div className="relative bg-gray-900 rounded-[3rem] aspect-video shadow-2xl overflow-hidden border-[12px] border-white cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                alt="Live Dashboard"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-[#0056b3] rounded-full flex items-center justify-center text-white text-2xl shadow-2xl animate-pulse group-hover:scale-110 transition-transform">
                  ▶
                </div>
              </div>

              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 min-w-[160px]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black text-[#0056b3] uppercase tracking-tighter">Live Dashboard</span>
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-gray-400 text-[10px] font-bold">Viewers</span>
                  <span className="text-gray-900 font-black text-sm">12.4k</span>
                </div>
                <div className="w-full h-1 bg-gray-100 rounded-full mt-2 overflow-hidden">
                  <div className="w-3/4 h-full bg-[#0056b3]"></div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;