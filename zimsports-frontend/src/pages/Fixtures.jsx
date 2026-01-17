import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Fixtures = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="py-40 text-center">
        <h1 className="text-5xl font-black text-secondary uppercase italic">
          Match <span className="text-primary">Fixtures</span>
        </h1>
        <p className="mt-4 text-gray-500 font-bold tracking-widest uppercase">Upcoming Schedule</p>
      </div>
      <Footer />
    </div>
  );
};

export default Fixtures; // This must match the name above