import React from 'react';

const Schedule = () => {
  const games = [
    { date: "Oct 24", time: "15:00", league: "Premier League", home: "Harare City", away: "Lions FC" },
    { date: "Oct 25", time: "18:30", league: "Champions Cup", home: "Turrab Stars", away: "Titans SC" },
    { date: "Oct 25", time: "20:00", league: "Youth League", home: "Rising Eagles", away: "Bulawayo SC" }
  ];

  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-black text-secondary uppercase italic">Upcoming Fixtures</h2>
            <p className="text-gray-500 mt-2">Sync your calendar and never miss a match.</p>
          </div>
          <button className="px-6 py-3 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all">
            Full Schedule
          </button>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-gray-100 shadow-xl">
          <table className="w-full text-left bg-white border-collapse">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="p-6 font-bold text-secondary">DATE & TIME</th>
                <th className="p-6 font-bold text-secondary">LEAGUE</th>
                <th className="p-6 font-bold text-secondary text-center">MATCHUP</th>
                <th className="p-6 font-bold text-secondary text-right">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {games.map((g, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-blue-50/30 transition-colors group">
                  <td className="p-6">
                    <p className="font-black text-secondary">{g.date}</p>
                    <p className="text-sm text-gray-400">{g.time}</p>
                  </td>
                  <td className="p-6">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-500 group-hover:bg-primary group-hover:text-white transition-all">
                      {g.league}
                    </span>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center justify-center gap-6">
                      <span className="font-bold text-secondary">{g.home}</span>
                      <span className="text-primary font-black">VS</span>
                      <span className="font-bold text-secondary">{g.away}</span>
                    </div>
                  </td>
                  <td className="p-6 text-right">
                    <button className="text-sm font-bold text-primary bg-primary/10 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-all">
                      Set Reminder
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Schedule;