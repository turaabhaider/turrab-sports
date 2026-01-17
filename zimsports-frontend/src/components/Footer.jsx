import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-secondary overflow-hidden pt-20 pb-10 px-8">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Section: Branding & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-16 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(0,86,179,0.5)]">
                <span className="text-white font-black text-2xl">T</span>
              </div>
              <h1 className="text-3xl font-black text-white tracking-tighter">
                TURRAB<span className="text-primary">SPORTS</span>
              </h1>
            </div>
            <p className="text-gray-400 max-w-md text-lg leading-relaxed">
              Elevating local sports through professional broadcasting and advanced management technology. 
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10">
            <h4 className="text-white font-bold mb-4">Stay in the Game</h4>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 bg-secondary/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all"
              />
              <button className="bg-primary hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-16">
          <div>
            <h5 className="text-white font-black mb-6 uppercase tracking-widest text-xs">Navigation</h5>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Live Matches</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Schedule</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Clubs</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-black mb-6 uppercase tracking-widest text-xs">Resources</h5>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Live Support</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-black mb-6 uppercase tracking-widest text-xs">Connect</h5>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">YouTube</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-black mb-6 uppercase tracking-widest text-xs">App Store</h5>
            <div className="space-y-4">
              <div className="group bg-white/5 hover:bg-primary transition-all p-3 rounded-2xl border border-white/10 flex items-center gap-3 cursor-pointer">
                <div className="text-2xl text-white"></div>
                <div>
                  <p className="text-[10px] text-gray-400 group-hover:text-white/80">Download on the</p>
                  <p className="text-sm font-bold text-white">App Store</p>
                </div>
              </div>
              <div className="group bg-white/5 hover:bg-primary transition-all p-3 rounded-2xl border border-white/10 flex items-center gap-3 cursor-pointer">
                <div className="text-2xl text-white">▶</div>
                <div>
                  <p className="text-[10px] text-gray-400 group-hover:text-white/80">Get it on</p>
                  <p className="text-sm font-bold text-white">Google Play</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © 2026 <span className="text-white font-bold">Turrab Sports</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">System Operational</span>
            </div>
            <p className="text-gray-500 text-sm">Made with ❤️ in Pakistan</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;