import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import logoImg from '../assets/general/logo-maxfm.png'; 

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Inicio', 'Programación', 'Locutores', 'Interacción'];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-mx-green shadow-md ${
        isScrolled ? 'py-1' : 'py-3'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Left: Logo Area */}
        <div className="flex items-center gap-2">
          {/* Using uploaded logo-maxfm.png */}
          <img src={logoImg} alt="MaxFM Logo" className="h-16 md:h-20 w-auto object-contain drop-shadow-sm transition-all duration-300" />
        </div>

        {/* Center: Navigation (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="font-bold text-sm text-gray-900 hover:text-white transition-colors relative group uppercase tracking-widest"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Right: ON AIR Indicator */}
        <div className="hidden md:flex items-center gap-3 bg-gray-900 border border-gray-800 px-4 py-2 rounded-full relative overflow-hidden group shadow-sm">
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
          
          <span className="font-racing text-sm text-white tracking-widest uppercase">
            On Air <span className="text-mx-green ml-1 drop-shadow-sm">Live</span>
          </span>
          
          {/* Animated Equalizer */}
          <div className="flex items-end gap-1 h-4 ml-2">
            {[1, 2, 3, 4].map((bar) => (
              <motion.div
                key={bar}
                className="w-1 bg-mx-green"
                animate={{ height: ['40%', '100%', '30%', '80%', '40%'] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  delay: bar * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-900 hover:text-white z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-mx-green py-6 flex flex-col items-center gap-6 md:hidden shadow-lg border-t border-green-700"
        >
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="font-racing text-lg text-gray-900 hover:text-white uppercase tracking-widest"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <div className="flex items-center gap-2 mt-4 bg-gray-900 px-4 py-2 rounded-full border border-gray-800 shadow-inner">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></div>
            <span className="font-racing text-white">EN VIVO AHORA</span>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
