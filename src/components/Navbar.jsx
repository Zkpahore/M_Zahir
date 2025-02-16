import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { id: 1, name: 'Home', href: '#home' },
    { id: 2, name: 'Projects', href: '#project' },
    { id: 3, name: 'Skills', href: '#skills' },
    { id: 4, name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-4 sticky top-0 z-50 shadow-lg'>
      <div className='container mx-auto flex justify-between items-center'>
        <img 
          className='w-28 transform transition-transform duration-300 hover:scale-105 cursor-pointer' 
          src='logo.png' 
          alt='Logo'
        />
        
        {/* Desktop Navigation */}
        <div className='hidden lg:flex space-x-8'>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className='relative text-white text-lg font-medium group transition-all duration-300'
            >
              <span className='group-hover:text-blue-200'>{link.name}</span>
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-300 group-hover:w-full'></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu} 
          className='lg:hidden text-white focus:outline-none transition-transform duration-300 hover:scale-125'
        >
          {isMobileMenuOpen ? (
            <HiX className='w-8 h-8' />
          ) : (
            <HiMenuAlt3 className='w-8 h-8' />
          )}
        </button>

        {/* Mobile Navigation */}
        <div className={`
          lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm
          transition-all duration-300 ease-out overflow-hidden
          ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <ul className='py-4 px-6 space-y-4'>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className='block text-white text-xl py-3 px-4 rounded-lg
                    transition-all duration-300 hover:bg-white/10 hover:pl-6
                    border-b-2 border-white/10 last:border-0'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;