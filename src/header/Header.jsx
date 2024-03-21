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


   <header className="py-4 w-full flex md:hidden lg:hidden relative justify-end items-center bg-gray-800">
  <button onClick={HandleClick} className="text-white mr-4 focus:outline-none focus:bg-gray-700 rounded-lg p-2">
    <RiMenu2Fill className="text-2xl" />
  </button>
</header>

<nav className={`container px-4 bg-white w-full absolute top-16 md:top-20 lg:top-24 z-10 shadow-lg rounded-lg ${isOpen ? 'block' : 'hidden'}`}>
  <ul className="items-center space-y-4 md:space-y-0 md:flex md:justify-end text-center py-4">
    {navLinks.map((link, index) => (
      <li key={index}>
        <Link
          to={link.path}
          className="text-gray-800 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 hover:text-purple-700 transition-colors duration-300 ease-in-out focus:outline-none focus:bg-gray-100 focus:text-purple-700">
          {link.text.toUpperCase()}
        </Link>
      </li>
    ))}
  </ul>
</nav>

    </>
  );
}

export default Header;
