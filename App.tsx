
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import EventsSection from './components/EventsSection';
import MembersSection from './components/MembersSection';
import JoinTeamSection from './components/JoinTeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-mitsna-dark font-sans">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <EventsSection />
        <MembersSection />
        <JoinTeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
