import React, { useState, useEffect } from 'react';
import { Menu, X, User, Code, Briefcase, Mail, BookOpen } from 'react-feather';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      closeMenu();
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a 
            href="#about" 
            onClick={(e) => smoothScroll(e, '#about')}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            Bethelhem Tarekegn
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#about" 
              onClick={(e) => smoothScroll(e, '#about')}
              className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
            >
              <User className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>About</span>
            </a>
            <a 
              href="#skills" 
              onClick={(e) => smoothScroll(e, '#skills')}
              className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
            >
              <Code className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Skills</span>
            </a>
            <a 
              href="#experience" 
              onClick={(e) => smoothScroll(e, '#experience')}
              className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
            >
              <Briefcase className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Experience</span>
            </a>
            <a 
              href="#projects" 
              onClick={(e) => smoothScroll(e, '#projects')}
              className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
            >
              <Briefcase className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Projects</span>
            </a>
            <a 
              href="#education" 
              onClick={(e) => smoothScroll(e, '#education')}
              className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
            >
              <BookOpen className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Education</span>
            </a>
            <a 
              href="#contact" 
              onClick={(e) => smoothScroll(e, '#contact')}
              className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
            >
              <Mail className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Contact</span>
            </a>
          </nav>
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-white focus:outline-none hover:text-blue-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-900/98 backdrop-blur-md border-t border-gray-800">
          <nav className="flex flex-col py-4 px-4 space-y-4">
            <a 
              href="#about" 
              onClick={(e) => smoothScroll(e, '#about')}
              className="flex items-center text-gray-300 hover:text-blue-400 transition-colors py-2"
            >
              <User className="mr-3 w-5 h-5" />
              <span>About</span>
            </a>
            <a 
              href="#skills" 
              onClick={(e) => smoothScroll(e, '#skills')}
              className="flex items-center text-gray-300 hover:text-blue-400 transition-colors py-2"
            >
              <Code className="mr-3 w-5 h-5" />
              <span>Skills</span>
            </a>
            <a 
              href="#experience" 
              onClick={(e) => smoothScroll(e, '#experience')}
              className="flex items-center text-gray-300 hover:text-blue-400 transition-colors py-2"
            >
              <Briefcase className="mr-3 w-5 h-5" />
              <span>Experience</span>
            </a>
            <a 
              href="#projects" 
              onClick={(e) => smoothScroll(e, '#projects')}
              className="flex items-center text-gray-300 hover:text-blue-400 transition-colors py-2"
            >
              <Briefcase className="mr-3 w-5 h-5" />
              <span>Projects</span>
            </a>
            <a 
              href="#education" 
              onClick={(e) => smoothScroll(e, '#education')}
              className="flex items-center text-gray-300 hover:text-blue-400 transition-colors py-2"
            >
              <BookOpen className="mr-3 w-5 h-5" />
              <span>Education</span>
            </a>
            <a 
              href="#contact" 
              onClick={(e) => smoothScroll(e, '#contact')}
              className="flex items-center text-gray-300 hover:text-blue-400 transition-colors py-2"
            >
              <Mail className="mr-3 w-5 h-5" />
              <span>Contact</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
