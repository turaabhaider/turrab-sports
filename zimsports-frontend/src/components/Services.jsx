import React from 'react';

const services = [
  {
    title: "For Coaches",
    desc: "Streamline coaching with video analysis, practice planning, and player development tools.",
    icon: "📋"
  },
  {
    title: "For Teams",
    desc: "United & Organized. Manage rosters, schedules, updates, and team payments in one hub.",
    icon: "👥"
  },
  {
    title: "For Families & Fans",
    desc: "Stay connected with live game updates, score tracking, and instant team notifications.",
    icon: "📣"
  }
];

const Services = () => {
  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#1e293b] mb-4">Core Services</h2>
        <p className="text-gray-500 mb-16 max-w-2xl mx-auto">
          Unlock the full potential of your sports journey with our specialized management tools.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="p-10 rounded-3xl border border-gray-100 hover:border-[#0056b3]/20 hover:shadow-2xl transition-all group text-left">
              <div className="text-5xl mb-6 bg-gray-50 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#1e293b] mb-4 group-hover:text-[#0056b3] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;