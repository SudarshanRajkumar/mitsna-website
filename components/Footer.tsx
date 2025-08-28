
import React from 'react';
import { InstagramIcon, YouTubeIcon, FacebookIcon, MitSnaLogo } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-mitsna-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <MitSnaLogo className="h-12 w-auto text-white mb-4" />
            <p className="max-w-md text-gray-400">
              Empowering Lives, Educating the Youth. MitSna Foundation is a Section 8 non-profit dedicated to promoting quality education in Manipur.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-mitsna-light-blue transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-mitsna-light-blue transition-colors">Programs</a></li>
              <li><a href="#events" className="hover:text-mitsna-light-blue transition-colors">Events</a></li>
              <li><a href="#join-us" className="hover:text-mitsna-light-blue transition-colors">Join Our Team</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-wider uppercase mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/mitsna.foundation/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href="https://www.youtube.com/@mitsnafoundation" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
                <YouTubeIcon className="h-6 w-6" />
              </a>
              <a href="https://www.facebook.com/mitsna.foundation" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <FacebookIcon className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-4 text-gray-400 space-y-1">
                <p>Email: <a href="mailto:office@mitsna.org" className="hover:text-white">office@mitsna.org</a></p>
                <p>Phone: <a href="tel:03853544588" className="hover:text-white">0385-3544588</a></p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} MitSna Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
