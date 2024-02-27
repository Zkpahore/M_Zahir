import React from 'react';
import { motion } from 'framer-motion';

const ProfileCard = () => {
  return (
    <div className="flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg rounded-lg overflow-hidden shadow-lg bg-white"
      >
        {/* Cover Photo */}
        <div className="w-full h-32 bg-blue-500"></div>

        {/* Profile Picture */}
        <div className="flex justify-center mt-px">
          <motion.img
            src="zkpahore.jpg"
            alt="Profile"
            className="rounded-full h-24 w-24 border-4 border-white -mt-12"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5, type: 'spring', stiffness: 100 }}
          />
        </div>

        {/* User Information */}
        <div className="text-center px-6 py-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h1 className="text-xl font-bold text-gray-900">Muhammad Zahir</h1>
            <p className="text-sm text-gray-600">MERN Stack Developer</p>
          </motion.div>

          {/* Social Interactions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex justify-center mt-4"
          >
            <button className="mr-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
              Email
            </button>
            <button className="bg-green-500 hover:bg-green-400 text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
              WhatsApp
            </button>
          </motion.div>
          
        </div>
      </motion.div>

      
    </div>
   
  );
};

export default ProfileCard;
