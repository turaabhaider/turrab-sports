import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Matches = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* 1. THE BIG UPPER BANNER */}
        <div className="relative w-full h-[380px] rounded-[3rem] overflow-hidden mb-8 shadow-2xl group">
          <img 
            src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            alt="Main Featured"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
          
          <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-red-600 text-white px-3 py-1 rounded-md text-[10px] font-black flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span> LIVE NOW
                </span>
                <span className="text-white/70 font-bold tracking-widest text-[10px] uppercase italic">Championship Final</span>
              </div>
              <h1 className="text-5xl font-black text-white italic uppercase tracking-tighter">
                UCSB Water Polo <span className="text-gray-400 text-3xl mx-2 font-normal lowercase">vs</span> USC
              </h1>
              <p className="text-gray-300 text-xs mt-2 font-medium">Catch the action live from the main arena.</p>
            </div>
            <button className="bg-[#0056b3] hover:bg-blue-700 text-white px-10 py-3.5 rounded-full font-black flex items-center gap-3 transition-all mb-2 shadow-lg shadow-blue-600/30">
              <span className="text-lg">▶</span> WATCH STREAM
            </button>
          </div>
        </div>

        {/* 2. THE SMALLER WIDE BOX (Directly under the big one) */}
       =
      </main>

      <Footer />
    </div>
  );
};

export default Matches;