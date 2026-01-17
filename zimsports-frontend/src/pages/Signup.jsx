import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    clubName: ''
  });
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Account created and saved to MySQL!");
        navigate('/login');
      } else {
        const data = await response.json();
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      alert("Make sure your backend terminal is running!");
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20 px-6">
        <div className="max-w-5xl w-full bg-white rounded-[4rem] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 border border-white">
          <div className="bg-[#0056b3] p-16 text-white flex flex-col justify-center">
            <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-6">Join Turrab</h2>
            <p className="text-blue-100 font-medium opacity-80 text-lg">Create your account to start tracking stats and managing your club profiles.</p>
          </div>
          <div className="p-12 lg:p-20">
            <h3 className="text-4xl font-black text-gray-900 uppercase italic mb-8">Register</h3>
            <form onSubmit={handleSignup} className="space-y-4">
              <input name="fullName" placeholder="Full Name" className="w-full px-6 py-4 bg-gray-50 border rounded-2xl" onChange={(e) => setFormData({...formData, fullName: e.target.value})} required />
              <input name="email" type="email" placeholder="Email" className="w-full px-6 py-4 bg-gray-50 border rounded-2xl" onChange={(e) => setFormData({...formData, email: e.target.value})} required />
              <input name="password" type="password" placeholder="Password" className="w-full px-6 py-4 bg-gray-50 border rounded-2xl" onChange={(e) => setFormData({...formData, password: e.target.value})} required />
              <input name="clubName" placeholder="Club Name (Optional)" className="w-full px-6 py-4 bg-gray-50 border rounded-2xl" onChange={(e) => setFormData({...formData, clubName: e.target.value})} />
              <button type="submit" className="w-full py-5 bg-[#0056b3] text-white rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl">Create Account</button>
              <p className="text-center mt-6 text-gray-500 text-xs font-bold uppercase tracking-widest">
                Already have an account? <Link to="/login" className="text-[#0056b3]">Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;