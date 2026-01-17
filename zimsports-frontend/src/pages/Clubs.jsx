import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Clubs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Section */}
      <header className="py-20 px-8 bg-[#f8f9fa] border-b border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-black text-secondary italic uppercase tracking-tighter mb-4">
            The <span className="text-[#0056b3]">Club</span> Network
          </h1>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
            Empowering 250+ Local Sports Organizations
          </p>
        </div>
      </header>

      {/* Rich Information Content */}
      <main className="max-w-5xl mx-auto py-20 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <section>
            <h2 className="text-2xl font-black text-secondary mb-6 italic underline decoration-[#0056b3] decoration-4 underline-offset-8 uppercase">
              Club Ecosystem
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Turrab Sports isn't just a streaming site; it's a digital home for sports clubs. We provide local teams with the same professional-grade tools used by international franchises. Every club in our network receives a dedicated digital profile, player database management, and automated match reporting.
            </p>
            <ul className="space-y-4 font-bold text-gray-700 text-sm">
              <li className="flex gap-3 items-center"><span className="text-[#0056b3]">▶</span> Automated Player Statistics</li>
              <li className="flex gap-3 items-center"><span className="text-[#0056b3]">▶</span> Financial Transparency Tools</li>
              <li className="flex gap-3 items-center"><span className="text-[#0056b3]">▶</span> Fan Engagement Dashboards</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-secondary mb-6 italic underline decoration-[#0056b3] decoration-4 underline-offset-8 uppercase">
              How to Join
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Any registered sports organization can apply to become a Turrab Partner Club. Once verified, clubs gain access to our AI-powered broadcasting hardware and the Turrab Management Suite. Our goal is to digitize 1,000 clubs by the end of 2026.
            </p>
            <div className="bg-[#f0f7ff] p-6 rounded-3xl border border-blue-50">
              <h4 className="font-black text-[#0056b3] text-sm uppercase mb-2">Member Benefit</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Partner clubs retain 70% of all ad revenue generated during their live streams, helping local teams fund better equipment and facilities.
              </p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Clubs;