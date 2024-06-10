import React, { useState } from 'react';
import { Menu, User, Code, Briefcase, Mail } from 'react-feather';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Bethelhem Tarekegn</h1>
        <div className="hidden md:flex md:items-center md:justify-end">
          <nav  className="flex flex-row items-center">
            <a href="#about" className="md:mr-4 flex items-center">
              <User className="mr-2" />
              About
            </a>
            <a href="#skills" className="md:mr-4 flex items-center">
              <Code className="mr-2" />
              Skills
            </a>
            <a href="#projects" className="md:mr-4 flex items-center">
              <Briefcase className="mr-2" />
              Projects
            </a>
            <a href="#contact" className="flex items-center">
              <Mail className="mr-2" />
              Contact
            </a>
          </nav>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
      {isOpen && (
          <div className="md:hidden bg-gray-800 fixed  right-0 w-[40%]">
          <nav className="flex flex-col items-center py-4 ">
            <a href="#about" className="py-2 text-white flex items-center">
              <User className="mr-2" />
              About
            </a>
            <a href="#skills" className="py-2 text-white flex items-center">
              <Code className="mr-2" />
              Skills
            </a>
            <a href="#projects" className="py-2 text-white flex items-center">
              <Briefcase className="mr-2" />
              Projects
            </a>
            <a href="#contact" className="py-2 text-white flex items-center">
              <Mail className="mr-2" />
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
