import React from 'react';
import { MitSnaLogo } from './icons';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 p-8 max-w-4xl mx-auto">
        <MitSnaLogo className="h-20 md:h-28 w-auto text-white mx-auto" />
        <h1 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight text-white italic">
          Empowering Lives, Educating the Youth
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
          The MitSna Foundation is dedicated to fostering quality education to global standards for the youth of Manipur, creating opportunities for a brighter future.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#about" 
            className="inline-block bg-mitsna-light-blue text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-mitsna-blue transition-all duration-300 transform hover:scale-105"
          >
            Learn More About Our Mission
          </a>
          <a 
            href="#donate" 
            className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-mitsna-blue transition-all duration-300 transform hover:scale-105"
          >
            Donate Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;