import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import Dash from './Dashboard';
import Serv from './Services';
import MyPrt from './MyPort';
import Img from './Img';
import Con from './Contact';
import '../App.css';

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
  const [name, setName] = useState("Muhammad Zahir");
  const names = ["Muhammad Zahir", "Web Designer", "Mern stack Developer", "From Pakistan"];
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
        <div className='w-full md:w-1/2 lg:w-1/2 flex-shrink-0 gap-10 lg:m-24'>
          <motion.h2 className='text-2xl lg:text-5xl font-extrabold ml-6 py-2 font-serif' variants={nameVariants} initial="hidden" animate="visible">
            Hello!<br />I'm <span className='text-yellow-400'>{name}</span>
          </motion.h2>
          <motion.p className='p-2 mt-6 font-sans' variants={textVariants} initial="hidden" animate="visible">
            I'm a Web Developer with extensive experience for over 2 years. My expertise is to create Front-End & Back-End of a web application
          </motion.p>
          <button className='my-10 mx-10 items-center bg-slate-900 text-white px-3 py-2 border-2 border-white rounded-full hover:bg-yellow-400 active:bg-yellow-200 font-semibold font-sans'>
            Email Me</button>
        </div>
        <div className='lg:flex w-full md:w-1/2 lg:w-1/2 m-0'>
          <img src="zkpo.png" alt="Zkpahore" />
        </div>
      </div>
      <Dash />
      <Serv />
      <Img />
      <MyPrt />
      <Con />
    </>
  );
}
