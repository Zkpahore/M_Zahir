import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu2Fill } from "react-icons/ri";

function Header() {
  const [isOpen, SetIsOpen] = useState(false);
  const HandleClick = () => {
    SetIsOpen(!isOpen);
  }

  const navLinks = [
    { path: '/', text: 'Home' },
    { path: '/about', text: 'About' },
    { path: '/My_Projects', text: 'Projects' },
    { path: '/Contact_Us', text: 'Contact' }
    
  ];

  return (
    <>
    <header className="hidden md:flex lg:flex bg-gray-800 py-4 w-full">
    <nav className="container mx-auto px-4">
    <ul className="flex items-center">
    {navLinks.map((link, index) => (
    <li key={index}>
    <Link
    to={link.path}
    className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
    {link.text}
    </Link>
    </li>
    ))}
   </ul>
  </nav>
  </header>
   {/* Mobile Menu */}
  <header className="bg-gray-800 py-4 w-full flex md:hidden lg:hidden relative">
 <button onClick={HandleClick} className='text-white'><RiMenu2Fill className='text-2xl'/></button>
  </header>
  { isOpen &&
    <nav className="container px-4 bg-gray-300 w-1/3 h-screen absolute">
    <ul className="items-center space-y-8 text-center py-4">
    {navLinks.map((link, index) => (
    <li key={index}>
    <Link
    to={link.path}
    className="text-black  px-3 py-2 rounded-lg text-sm font-bold hover:bg-yellow-400">
    {link.text}
    </Link>
    </li>
    ))}
   </ul>
  </nav>
   }
    </>
  );
}

export default Header;
