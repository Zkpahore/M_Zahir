import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const navLinks = [
    { path: '/', text: 'Profile' },
    { path: '/about', text: 'About' },
    { path: '/profileCard', text: 'Profile Card' },
    { path: '/users', text: 'Users' }
    
  ];

  return (
    <header className="bg-gray-800 py-4 w-full">
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
  );
}

export default Header;
