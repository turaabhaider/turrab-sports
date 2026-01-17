import React from 'react';

const MVPGallery = () => {
  const players = [
    {
      id: 1,
      name: "Turaab Ali",
      stats: "24 Goals • 12 Assists",
      club: "Harare City FC",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      name: "Blessing Moyo",
      stats: "15 Clean Sheets",
      club: "Bulawayo Chiefs",
      image: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      name: "Kelvin Madzongwe",
      stats: "92% Tackle Rate",
      club: "FC Platinum",
      image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-24 px-8 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-black text-gray-900 uppercase italic tracking-tighter mb-4">
            Top <span className="text-[#0056b3] not-italic">Performers</span>
          </h2>
          <p className="text-gray-500 font-medium max-w-xl">
            Highlighting the elite talent within the Turrab network. These athletes 
            represent the highest level of discipline and skill across our partner clubs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {players.map((player) => (
            <div key={player.id} className="group cursor-pointer">
              <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                {/* Player Image */}
                <img 
                  src={player.image} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={player.name}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                {/* Player Info */}
                <div className="absolute bottom-10 left-10 right-10">
                  <span className="text-[#0056b3] bg-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-3 inline-block">
                    {player.club}
                  </span>
                  <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-1">
                    {player.name}
                  </h3>
                  <p className="text-gray-300 text-xs font-bold uppercase tracking-[0.2em]">
                    {player.stats}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MVPGallery;