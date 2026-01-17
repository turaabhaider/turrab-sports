import React from 'react';

const Stats = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Active Clubs", value: "250+" },
            { label: "Live Streams", value: "1.2k" },
            { label: "Athletes", value: "15k+" },
            { label: "Global Fans", value: "1M+" }
          ].map((stat, i) => (
            <div key={i} className="text-center p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all">
              <h3 className="text-4xl font-black text-primary mb-2">{stat.value}</h3>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;