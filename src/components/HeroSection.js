import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="h-screen bg-[url('./hero-image.jpg')] bg-cover bg-center flex flex-col items-center justify-center text-center text-white p-4">
      <h1 className="text-4xl font-bold mb-4">Empowering Women in Tech</h1>
      <p className="text-xl mb-6">Join our community and build your future in technology</p>
      <a href="#events" className="bg-dark-pink text-white py-2 px-4 rounded hover:bg-hover-pink transition duration-300">Explore Events</a>
    </section>
  );
};

export default HeroSection;
