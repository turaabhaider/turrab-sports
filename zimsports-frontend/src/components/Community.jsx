import React from 'react';

const Community = () => {
  return (
    <section className="py-24 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-5xl font-black text-secondary leading-tight">
            TRUSTED BY <br/> 
            <span className="text-primary">1,000+ CLUBS</span> WORLDWIDE
          </h2>
          <p className="text-gray-500 mt-6 text-lg">
            From youth leagues to professional divisions, Turrab Sports is the backbone of modern sports management and broadcasting.
          </p>
          <div className="mt-10 flex -space-x-4">
            {[1,2,3,4,5].map(i => (
              <div key={i} className="w-14 h-14 rounded-full border-4 border-white bg-gray-300"></div>
            ))}
            <div className="w-14 h-14 rounded-full border-4 border-white bg-primary text-white flex items-center justify-center font-bold text-xs">
              +2k
            </div>
          </div>
          <p className="mt-4 text-sm font-bold text-secondary italic">"The best streaming tool for local clubs!" - Coach Mike</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="h-40 bg-white rounded-3xl shadow-sm border border-gray-100 p-6 flex items-center justify-center text-primary font-black text-2xl italic">#WINNER</div>
            <div className="h-64 bg-primary rounded-3xl shadow-lg p-6 text-white flex flex-col justify-end">
               <p className="font-bold">Live Broadcasting</p>
               <p className="text-xs opacity-70">HD Quality 4K</p>
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="h-64 bg-secondary rounded-3xl shadow-lg p-6 text-white flex flex-col justify-end">
               <p className="font-bold">Team Management</p>
               <p className="text-xs opacity-70">Everything in one app</p>
            </div>
            <div className="h-40 bg-white rounded-3xl shadow-sm border border-gray-100 p-6 flex items-center justify-center text-primary font-black text-2xl italic">#TURRAB</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;