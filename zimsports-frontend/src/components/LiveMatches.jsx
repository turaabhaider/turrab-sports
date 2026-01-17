import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LiveMatches = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow p-8 lg:p-12">
        {/* Main Banner Area */}
        <div className="max-w-7xl mx-auto">
          <div className="relative h-[450px] rounded-[3rem] overflow-hidden shadow-2xl group">
            <img 
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80" 
              className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-700"
              alt="Live Match"
            />
            
            <div className="absolute inset-0 p-12 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full animate-pulse">● LIVE NOW</span>
                <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Championship Final</span>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                  <h2 className="text-5xl lg:text-7xl font-black italic text-white uppercase tracking-tighter leading-none mb-4">
                    UCSB Water Polo <span className="text-blue-400 not-italic">vs</span> USC
                  </h2>
                  <p className="text-gray-300 font-medium max-w-md">Catch the action live from the main arena with professional commentary.</p>
                </div>

                {/* THE FIXED BUTTON */}
                <button 
                  onClick={() => navigate('/live-stream')}
                  className="bg-[#0056b3] text-white px-12 py-5 rounded-full font-black uppercase text-xs tracking-[0.2em] flex items-center gap-3 hover:bg-blue-700 hover:scale-105 transition-all shadow-2xl shadow-blue-600/40 self-start"
                >
                  <span className="text-lg">▶</span> WATCH STREAM
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12">
             <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-6">Upcoming Fixtures</h3>
             <div className="h-1 w-20 bg-[#0056b3] mb-8"></div>
             {/* Add fixture cards here later */}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LiveMatches;