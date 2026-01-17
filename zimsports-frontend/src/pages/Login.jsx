import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // We store the user info so the dashboard knows who just logged in
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate('/dashboard');
      } else {
        alert(data.message || "Invalid email or password");
        setIsLoading(false);
      }
    } catch (err) {
      alert("Error: Is your backend terminal still running?");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-20 px-6">
        <div className="max-w-5xl w-full bg-white rounded-[4rem] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 border border-white">
          
          {/* Brand Panel */}
          <div className="hidden lg:flex bg-[#0056b3] p-16 text-white flex-col justify-center">
            <h2 className="text-5xl font-black italic uppercase tracking-tighter leading-none mb-6">
              The <span className="text-blue-200">Turrab</span> <br /> Network.
            </h2>
            <p className="text-blue-100 font-medium opacity-80">
              Enter your credentials to access your club profile and professional scouting tools.
            </p>
          </div>

          {/* Form Panel */}
          <div className="p-12 lg:p-20">
            <h3 className="text-4xl font-black text-gray-900 uppercase italic tracking-tighter mb-8">Sign In</h3>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="w-full px-8 py-5 bg-gray-50 border rounded-2xl focus:border-[#0056b3] outline-none transition-all"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full px-8 py-5 bg-gray-50 border rounded-2xl focus:border-[#0056b3] outline-none transition-all"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full py-5 bg-[#0056b3] text-white rounded-2xl font-black uppercase text-xs tracking-[0.3em] hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-95 disabled:opacity-70"
              >
                {isLoading ? "Authenticating..." : "Enter Dashboard"}
              </button>

              <div className="pt-8 text-center border-t border-gray-100 mt-6">
                <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">
                  Don't have an account? 
                  <Link to="/signup" className="text-[#0056b3] hover:underline ml-2 font-black">
                    CREATE ONE NOW
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;