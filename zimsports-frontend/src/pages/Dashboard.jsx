import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get the user data we saved during Login
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    } else {
      // If no user is found, kick them back to login
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans">
      <Navbar />

      <div className="flex flex-grow">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 hidden md:block p-8">
          <nav className="space-y-8">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4">Main Menu</p>
              <ul className="space-y-4">
                <li className="text-[#0056b3] font-black text-xs uppercase tracking-widest cursor-pointer">Overview</li>
                <li className="text-gray-400 font-black text-xs uppercase tracking-widest cursor-pointer hover:text-[#0056b3] transition-colors">My Club</li>
                <li className="text-gray-400 font-black text-xs uppercase tracking-widest cursor-pointer hover:text-[#0056b3] transition-colors">Live Streams</li>
              </ul>
            </div>
            <button 
              onClick={handleLogout}
              className="mt-10 text-red-500 font-black text-[10px] uppercase tracking-[0.2em] hover:underline"
            >
              Logout System
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-8 lg:p-12">
          <header className="mb-12">
            <span className="text-[#0056b3] font-black uppercase tracking-[0.3em] text-[10px] bg-blue-50 px-4 py-2 rounded-full">
              Athlete Portal Active
            </span>
            <h1 className="text-5xl font-black italic uppercase tracking-tighter mt-6 text-gray-900">
              Welcome back, <span className="text-[#0056b3]">{user.fullName}</span>!
            </h1>
            <p className="text-gray-500 font-medium mt-2">
              Connected as: <span className="font-bold text-gray-700">{user.email}</span>
            </p>
          </header>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Club Membership</p>
              <p className="text-2xl font-black text-gray-900 uppercase italic">
                {user.clubName || "No Club Joined"}
              </p>
            </div>
            <div className="bg-[#0056b3] p-8 rounded-[2rem] shadow-xl text-white">
              <p className="text-[10px] font-black uppercase tracking-widest opacity-70 mb-2">Accommodation Status</p>
              <p className="text-2xl font-black uppercase italic">Standard Tier</p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Account ID</p>
              <p className="text-2xl font-black text-gray-900 italic">#{user.id}</p>
            </div>
          </div>

          {/* Placeholder for future content */}
          <div className="mt-12 bg-white rounded-[3rem] p-12 border border-dashed border-gray-200 flex flex-col items-center justify-center text-center">
             <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-gray-300">📊</span>
             </div>
             <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">No Recent Activity Found</p>
             <p className="text-gray-300 text-sm max-w-xs mt-2">Start streaming or join a tournament to see your stats here.</p>
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;