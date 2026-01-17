import React from 'react';

const Contact = () => {
  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-4xl mx-auto bg-[#1e293b] rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Club?</h2>
          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
            Join the growing community of athletes and coaches using Zim Sports to elevate their game.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-4 rounded-xl text-gray-900 focus:outline-none w-full sm:w-80"
            />
            <button className="bg-[#0056b3] px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all">
              Join Newsletter
            </button>
          </div>
          <div className="mt-8 flex justify-center gap-8 text-sm text-gray-400">
            <p>📧 support@zimsports.com</p>
            <p>📞 00 263 770 000 000</p>
          </div>
        </div>
        {/* Decorative background circle */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#0056b3] opacity-20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Contact;