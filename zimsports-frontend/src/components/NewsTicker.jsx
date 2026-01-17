import React from 'react';

const NewsTicker = () => {
  return (
    <div className="bg-secondary py-3 overflow-hidden border-b border-white/10">
      <div className="flex whitespace-nowrap animate-marquee">
        {[
          "TRANSFER: Turrab FC signs new striker from City Lions",
          "RESULT: United SC wins the Champions Cup 2026",
          "BREAKING: New training facilities opening in Harare next week",
          "LIVE: Youth League playoffs start in 2 hours"
        ].map((news, i) => (
          <span key={i} className="text-white/80 text-xs font-bold uppercase tracking-widest mx-10 flex items-center gap-4">
            <span className="w-2 h-2 bg-primary rounded-full"></span> {news}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default NewsTicker;