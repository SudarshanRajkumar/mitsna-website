import React, { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon, MitSnaLogo } from './icons';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#programs', label: 'Programs' },
  { href: '#events', label: 'Events' },
  { href: '#members', label: 'Members' },
  { href: '#join-us', label: 'Join Us' },
  { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex-shrink-0 text-mitsna-blue">
            <MitSnaLogo className="h-10 w-auto" />
          </a>
          <div className="hidden md:flex items-center">
            <nav className="flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-medium text-gray-600 hover:text-mitsna-blue transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a 
              href="#donate" 
              className="ml-8 bg-mitsna-light-blue text-white font-bold py-2 px-5 rounded-full text-sm hover:bg-mitsna-blue transition-all duration-300"
            >
              Donate Now
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-mitsna-blue focus:outline-none"
              aria-label="Main menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-mitsna-blue hover:bg-gray-50"
            >
              {link.label}
            </a>
          ))}
           <div className="px-3 py-2">
            <a 
              href="#donate"
              onClick={closeMenu}
              className="block w-full text-center bg-mitsna-light-blue text-white font-bold py-2 px-5 rounded-full hover:bg-mitsna-blue transition-all duration-300"
            >
              Donate Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;