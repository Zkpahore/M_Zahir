import React, { useState } from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const PortfolioGrid = ({ projects }) => {
  return (
    <div className="grid gap-8 sm:gap-10 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="relative group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="relative h-64 overflow-hidden">
            <motion.img
              src={project.img}
              alt={project.alt}
              className="w-full h-full object-cover transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent flex items-end p-6">
              <p className="text-gray-200 text-sm font-medium">{project.description}</p>
            </div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-full flex items-center gap-2"
            >
              <GithubIcon />
              GitHub
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-full"
            >
              Live Demo
            </motion.a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      img: 'mweb.png',
      alt: 'Movie Web App',
      description: 'A dynamic movie web platform built with React, Vite, and Tailwind CSS.',
      category: 'fullstack',
      github: 'https://github.com/Zkpahore/MoviesWeb.git',
      demo: 'https://movies-web-ten.vercel.app'
    },
    {
      img: 'funtrip.png', 
      alt: 'Travel Booking',
      description: 'A comprehensive travel booking platform with interactive maps and real-time availability.',
      category: 'design',
      github: 'https://github.com/Zkpahore/FunTrip.git',
      demo: 'https://fun-trip.vercel.app/'
    },
    {
      img: 'jhn.png',
      alt: 'E-commerce Platform',
      description: 'Innovative e-commerce platform built with React, Vite, and Tailwind CSS.',
      category: 'fullstack',
      github: 'https://github.com/Zkpahore/E-Commerce-.git',
      demo: 'https://e-commerce-murex-ten.vercel.app'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="w-full bg-gradient-to-br from-gray-800 to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-yellow-400">Portfolio</span>
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-300 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Showcasing innovative solutions with clean code and intuitive design. Explore projects that combine creativity with technical excellence.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {['all', 'design', 'fullstack'].map((filter) => (
            <motion.button
              key={filter}
              className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 focus:outline-none ${
                activeFilter === filter 
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900'
                  : 'border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10'
              }`}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </motion.button>
          ))}
        </div>

        <PortfolioGrid projects={filteredProjects} />
      </div>
    </section>
  );
};

export default PortfolioSection;
