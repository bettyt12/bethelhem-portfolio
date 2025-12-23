import React from 'react';
import { Mail, Phone, Heart } from 'react-feather';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm text-white py-8 border-t border-gray-800/50 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Bethelhem Tarekegn Alemu. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6 text-gray-400">
            <a 
              href="mailto:betitarekegn12@gmail.com" 
              className="flex items-center hover:text-blue-400 transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              <span className="text-sm">Email</span>
            </a>
            <a 
              href="tel:+251984625198" 
              className="flex items-center hover:text-blue-400 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm">Phone</span>
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-1 text-cyan-500 fill-cyan-500" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
