import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import About from './About';
import SkillsProgressBars from './Skills';
import Certificate from './Certificate';
import Services from './Services';
import IMG from './Img';
import MyPrt from './MyPort';
import ContactUs from './ContactUs';

const nameVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 20,
      delay: 0.3
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.6,
      ease: 'easeOut'
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      delay: 0.8,
      ease: 'anticipate'
    }
  }
};

export default function App() {
  const [name, setName] = useState("WordPress Developer");
  const names = ["WordPress Developer", "Web Designer", "MERN Stack Developer"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const updateName = () => {
    setCurrentCharIndex(prev => (prev + 1) % (names[currentIndex].length + 1));
    if (currentCharIndex === 0) {
      setCurrentIndex(prev => (prev + 1) % names.length);
    }
  };

  useEffect(() => {
    const interval = setInterval(updateName, 150);
    return () => clearInterval(interval);
  }, [currentCharIndex, currentIndex]);

  useEffect(() => {
    setName(names[currentIndex].substring(0, currentCharIndex));
  }, [currentCharIndex, currentIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8 relative">
            <motion.div
              className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-r from-yellow-600/20 to-indigo-400/20 blur-3xl rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              variants={nameVariants}
              initial="hidden"
              animate="visible"
            >
              <span className="block text-gray-300 mb-4">Hello! I'm</span>
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-purple-400 bg-clip-text text-transparent relative">
                {name}
                <span className="ml-2 border-r-2 border-yellow-400 animate-pulse">|</span>
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-400 leading-relaxed"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Full-stack developer specializing in modern web solutions. Expertise in creating performant, scalable applications with cutting-edge technologies.
            </motion.p>

            <motion.button
              className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-slate-900 font-semibold overflow-hidden group hover:shadow-xl hover:shadow-yellow-500/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('mailto:zahirpahore@gmail.com', '_blank')}
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </div>

          {/* Image Container */}
          <motion.div
            className="lg:w-1/2 flex justify-center"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative group w-full max-w-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-purple-400/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <img
                src="zkpo.png"
                alt="Muhammad Zahir Pahore - Web Developer"
                className="relative z-10 w-full h-auto rounded-3xl transform group-hover:rotate-2 transition-all duration-300 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <About />
      <SkillsProgressBars />
      <Certificate />
      <Services />
      <IMG />
      <MyPrt />
      <ContactUs />
    </div>
  );
}