import React from 'react';
import { FiMail, FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
  const handleIconHover = (event) => {
    event.target.style.color = '#EF4444'; 
    event.target.style.transform = 'scale(1.2)'; 
  };

  const handleIconLeave = (event) => {
    event.target.style.color = '#3B82F6'; 
    event.target.style.transform = 'scale(1)'; 
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-800">
      <div className="max-w-4xl bg-white rounded-lg p-8 shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-center">Get in Touch</h2>
        <p className="text-gray-700 mb-6 text-center">
          Empower your digital aspirations with personalized web development solutions tailored just for you. As a dedicated freelancer,
          I bring a wealth of expertise to elevate your project to new heights. From crafting seamless user experiences to optimizing functionality.
        </p>
        <div className="flex items-center justify-center mb-4">
          <FiMail className="text-red-500" size={24} />
          <p className="text-gray-700 ml-2">Zahirpahore@gmail.com</p>
        </div>
        <div className="flex items-center justify-center space-x-8">
          <a href="https://web.facebook.com/profile.php?id=100088421584668" target="_blank" rel="noopener noreferrer">
            <FiFacebook className="text-blue-500 hover:text-red-500 transform hover:scale-125 transition duration-300" size={24} />
          </a>
          <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FMuhamma22385581" target="_blank" rel="noopener noreferrer">
            <FiTwitter className="text-blue-500 hover:text-red-500 transform hover:scale-125 transition duration-300" size={24} />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-zahir-pahore-720049184/" target="_blank" rel="noopener noreferrer">
            <FiLinkedin className="text-blue-500 hover:text-red-500 transform hover:scale-125 transition duration-300" size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
