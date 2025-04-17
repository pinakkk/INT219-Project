import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle scroll to section
  const scrollToSection = (id) => {
    setIsOpen(false); // Close mobile menu when a link is clicked
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#FFFF00] flex items-center justify-center p-4">
      <div className="bg-white rounded-full shadow-md border-2 border-black px-6 py-3 flex items-center justify-between w-[90%] max-w-6xl">
        {/* Navigation Links - Hidden on mobile */}
        <div className="hidden md:flex gap-8 text-lg font-medium">
          <a href="#" onClick={() => scrollToSection('hero')} className="hover:underline transition-all duration-300">Home</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="hover:underline transition-all duration-300">About</a>
          <a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }} className="hover:underline transition-all duration-300">How it works</a>
          <Link to="/contactpage" className="hover:underline transition-all duration-300">Contact</Link>
        </div>

        {/* Hamburger Menu Button - Visible only on mobile */}
        <button 
          className="md:hidden focus:outline-none transition-transform duration-300 ease-in-out"
          onClick={toggleMenu}
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Login/Signup Button - Visible on all screens */}
        <Link to="/login" className="bg-[#FFFF00] text-black font-medium px-6 py-2 rounded-xl border-2 border-black hover:scale-105 transition-all duration-300 ml-auto md:ml-0">
          Login/Signup
        </Link>
      </div>

      {/* Mobile Menu - Dropdown with Animation */}
      <div 
        className={`absolute top-20 left-0 right-0 bg-white border-2 border-black mt-2 mx-4 rounded-xl shadow-lg md:hidden z-10 transition-all duration-300 ease-in-out transform origin-top ${
          isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-4 space-y-3 text-lg">
          <a href="#" onClick={() => scrollToSection('hero')} className="hover:bg-yellow-100 p-2 rounded transition-all duration-200 transform hover:translate-x-1">Home</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="hover:bg-yellow-100 p-2 rounded transition-all duration-200 transform hover:translate-x-1">About</a>
          <a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }} className="hover:bg-yellow-100 p-2 rounded transition-all duration-200 transform hover:translate-x-1">How it works</a>
          <Link to="/contactpage" className="hover:bg-yellow-100 p-2 rounded transition-all duration-200 transform hover:translate-x-1">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
