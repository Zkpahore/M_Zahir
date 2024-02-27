import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Lottie from 'react-lottie';
import animation from '../assets/Animation - 1708086450320.json';
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const Users = () => {
  return (
    <div className="flex flex-wrap w-full lg:w-3/4">
      <div className='flex flex-shrink-0 w-full lg:w-1/3 h-screen'>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg rounded-lg overflow-hidden shadow-lg bg-white m-2"
      >
        
        <div className="w-full h-32 bg-blue-500"><h1 className='text-center font-semibold text-3xl pt-6 text-white'>Mern Stack Developer</h1></div>
    

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
            <h1 className="text-xl font-bold text-gray-900">Muhammad Zahir Pahore</h1>
            
          </motion.div>

          {/* Social Interactions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex justify-center mt-4"
          >
            <a href="mailto:zahirpahore@yahoo.com" target='_blank' className="mr-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
              Email
            </a>
            <a href='https://wa.me/message/CUNUVWJUHIDGG1' target='_blank' className="bg-green-500 hover:bg-green-400 text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
              WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex justify-center gap-6 my-10"
          >
 <a href='#' className='text-3xl'><FaFacebookSquare/></a>
 <a href='#' className='text-3xl'><FaLinkedin /></a>
<a href='#' className='text-3xl'><FaGithubSquare /></a>
<a href='#' className='text-3xl'><FaInstagramSquare /></a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex justify-center"
          >
            <p className='mx-2'>
            👨‍💻 Front-end Web Designer | MERN Stack Developer 🚀
            Passionate about crafting captivating user experiences and building innovative web solutions.
            Let's turn ideas into reality!
            💡 #WebDesign #MERNStack #UX/UI 🎨✨
            </p>
          </motion.div>
          
        </div>
      </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.10 }} className='flex flex-wrap w-full lg:w-1/2 flex-shrink-0  text-white'>
       
        <Lottie
        options={defaultOptions}
        height={500}
        width={500}
      />
      </motion.div>
    </div>
   
  );
};

export default Users;
