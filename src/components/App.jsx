import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import About from './About';
import SkillsProgressBars from './Skills';
import Certificate from './Certificate';
import Services from './Services';
import IMG from './Img';
import MyPrt from './MyPort';
import ContactUs from './ContactUs';
import Contactr from './Contact';

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
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.8,
      ease: 'anticipate'
    }
  }
};

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div 
        className="absolute bottom-40 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/3 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      />

      <div className="container mx-auto px-4 py-8 md:py-16 lg:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Text Content - Enhanced */}
          <div className="lg:w-1/2 space-y-6 lg:space-y-8 relative">
            {/* Floating Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-cyan-300">Available for Freelance</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              variants={nameVariants}
              initial="hidden"
              animate="visible"
            >
              <span className="block text-slate-300 mb-2 lg:mb-4 text-lg md:text-xl lg:text-2xl font-light">
                Hello! I'm
              </span>
              <span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient mb-2">
                Muhammad Zahir
              </span>
              <span className="block text-slate-200 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mt-2">
                {name}
                <span className="ml-2 border-r-2 border-cyan-400 animate-pulse">|</span>
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Full-stack developer specializing in modern web solutions. Expertise in creating performant, scalable applications with cutting-edge technologies.
            </motion.p>

            {/* Stats Bar */}
            <motion.div 
              className="flex flex-wrap gap-4 lg:gap-6 py-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[
                { value: '2+', label: 'Years Exp' },
                { value: '50+', label: 'Projects' },
                { value: 'MERN', label: 'Stack' },
                { value: 'SEO', label: 'Certified' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs lg:text-sm text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4 lg:gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <motion.button
                className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl text-white font-semibold overflow-hidden group hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href='#contact'}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get in Touch
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              <motion.button
                className="relative inline-flex items-center px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl text-white font-semibold overflow-hidden group hover:border-cyan-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href='#portfolio'}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Portfolio
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </span>
              </motion.button>
            </motion.div>
          </div>

          {/* Image Container - Enhanced */}
          <motion.div
            className="lg:w-1/2 flex justify-center relative"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative group w-full max-w-2xl">
              {/* Background Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-all duration-500" />
              
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-2 shadow-2xl border border-slate-700/50 backdrop-blur-sm">
                <img
                  src="zahir2.png"
                  alt="Muhammad Zahir Pahore - Full Stack Developer"
                  className="relative z-10 w-full h-auto rounded-2xl transform group-hover:scale-[0.98] transition-all duration-500 shadow-2xl"
                />
                
                {/* Floating Tech Badges */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  Available Now
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-4 -left-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                >
                  Full Stack
                </motion.div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -bottom-8 -right-8 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl"
                variants={floatingVariants}
                animate="animate"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Rest of Components */}
      <About />
      <SkillsProgressBars />
      {/* <Certificate /> */}
      <Services />
      <IMG />
      <MyPrt />
      <ContactUs />
      <Contactr />
      <ToastContainer />

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </div>
  );
}