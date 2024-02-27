// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="section p-4 bg-gray-100 rounded-lg shadow-md w-3/4"
    >
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="card flex items-center"
      >
        <div className="profile-image mr-4">
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5, type: 'spring', stiffness: 100 }}
            src="https://media.licdn.com/dms/image/D4D03AQH-WDctQw5jGw/profile-displayphoto-shrink_800_800/0/1706357365959?e=2147483647&v=beta&t=veY8RUuWQ0rmyn81wkeH5GLdbPBNqhYOiwBSGJ7i8GI"
            alt="Profile"
            className="rounded-full w-24 h-24 object-cover"
          />
        </div>
        <div className="details">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-lg font-bold mb-1"
          >
            John Doe
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-gray-600"
          >
            MERN Stack Developer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="social-icons flex mt-2"
          >
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2"
            >
              <i className="fab fa-linkedin-in text-blue-500"></i>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2"
            >
              <i className="fab fa-github text-gray-800"></i>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter text-blue-400"></i>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
