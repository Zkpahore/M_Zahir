import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Con from './Contact';
import About from './About';
import ContactUs from './ContactUs';

const nameVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.4,
    },
  },
};

export default function App() {
  const [name, setName] = useState("WordPress Developer");
  const names = ["WordPress Developer", "Web Designer", "Mern stack Developer",];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const updateName = () => {
    setCurrentCharIndex((prevIndex) => (prevIndex + 1) % (names[currentIndex].length + 1));
    if (currentCharIndex === 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length);
    }
  };

  useEffect(() => {
    const interval = setTimeout(updateName, 300);
    return () => clearTimeout(interval);
  }, [currentCharIndex, currentIndex]);

  useEffect(() => {
    setName(names[currentIndex].substring(0, currentCharIndex));
  }, [currentCharIndex, currentIndex, names]);

  return (
    <>
      <div className='bg-slate-900 w-full block md:flex lg:flex text-white'>
      <div className='pt-10'></div>
        <div className='w-full md:w-1/2 lg:w-1/2 flex-shrink-0 gap-10 lg:m-24 md:m-6'>
          <motion.h1 className='text-2xl lg:text-5xl font-extrabold ml-6 py-2 font-serif' variants={nameVariants} initial="hidden" animate="visible">
            Hello!  _  I'm <br /><span className='bg-gradient-to-r from-yellow-600 via-orange-500 to-indigo-400 inline-block text-transparent bg-clip-text'>{name}</span>
          </motion.h1>
          <motion.p className='p-2 mt-6 font-sans' variants={textVariants} initial="hidden" animate="visible">
            I'm a Web Developer with extensive experience for over 2 years. My expertise is to create Front-End & Back-End of a web application
          </motion.p>
          <button className='my-10 mx-10 items-center bg-slate-900 text-white px-3 py-2 border-2
           border-white rounded-full hover:bg-yellow-400 active:bg-yellow-200 font-semibold font-sans transform transition duration-400 hover:scale-110'
           onClick={() => window.open('mailto:zahirpahore@gmail.com', '_blank')}>
            Email Me</button>
        </div>
        <div className='lg:flex w-full md:w-1/2 lg:w-1/2 m-0'>
          <img src="zkpo.png" alt="Zkpahore Muhammad Zahir web developer" />
        </div>
      </div>
      <About />
    </>
  );
}
