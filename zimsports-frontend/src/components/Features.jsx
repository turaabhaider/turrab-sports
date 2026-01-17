import React from 'react';

const Features = () => {
  return (
    <section className="py-24 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1">
          <img 
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1000" 
            alt="Sports Analytics" 
            className="rounded-[3rem] shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-4xl font-black text-secondary leading-tight mb-8">
            ADVANCED ANALYTICS FOR <br/>
            <span className="text-primary italic underline uppercase">EVERY PERFORMANCE</span>
          </h2>
          <div className="space-y-8">
            {[
              { t: "AI Video Breakdowns", d: "Automatic highlight generation for every goal and key moment." },
              { t: "Real-time Stat Tracking", d: "Track possession, player heatmaps, and accuracy instantly." },
              { t: "Fan Monetization", d: "Sell tickets and digital passes directly through your stream." }
            ].map((f, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex-shrink-0 flex items-center justify-center text-white font-bold">
                  0{i + 1}
                </div>
                <div>
                  <h4 className="font-bold text-xl text-secondary">{f.t}</h4>
                  <p className="text-gray-500 mt-1">{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;