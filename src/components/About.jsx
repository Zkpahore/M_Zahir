import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
 

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      <div className="absolute top-1/4 -left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-8 lg:py-16 relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Image Section - Different for Mobile & Desktop */}
          <motion.div
            className="relative group flex justify-center lg:justify-end order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Floating Background Elements */}
              <div className="absolute -inset-2 lg:-inset-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-all duration-500" />
              
              {/* Main Image Container */}
              <div className="relative  rounded-2xl p-1 lg:p-2 shadow-2xl border border-slate-700/50 backdrop-blur-sm">
                {/* Mobile Image - Smaller and Optimized */}
                <div className="block lg:hidden">
                  <img 
                    src="newonep-mobile.png" 
                    alt="Muhammad Zahir Pahore"
                    className="w-full max-w-xs h-auto rounded-2xl transform group-hover:scale-[0.98] transition-all duration-500 shadow-2xl"
                  />
                </div>
                
                {/* Desktop Image - Larger */}
                <div className="hidden lg:block">
                  <img 
                    src="newonep.png" 
                    alt="Muhammad Zahir Pahore"
                    className="w-full max-w-md h-auto rounded-2xl transform group-hover:scale-[0.98] transition-all duration-500 shadow-2xl"
                  />
                </div>
                
                {/* Floating Badges - Responsive Sizing */}
                <motion.div 
                  className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-3 py-1 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-semibold shadow-lg"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  MERN Stack
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 py-1 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-semibold shadow-lg"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                >
                  WordPress
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Text Content - Enhanced for Mobile */}
          <motion.div
            className="space-y-6 lg:space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Header Section */}
            <div className="space-y-4">
              <motion.div 
                className="inline-flex items-center gap-2 px-3 py-1 lg:px-4 lg:py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse" />
                <span className="text-xs lg:text-sm font-medium text-cyan-300">About Me</span>
              </motion.div>

              <h1 className="text-4xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                  Creative
                </span>
                <br />
                <span className="text-white text-3xl lg:text-6xl">Full Stack</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient text-3xl lg:text-6xl">
                  Developer
                </span>
              </h1>
            </div>

            {/* Content Sections - Mobile Optimized */}
            <div className="space-y-4 lg:space-y-6">
              <motion.div 
                className="bg-slate-800/30 backdrop-blur-md p-4 lg:p-6 rounded-xl lg:rounded-2xl border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <p className="text-base lg:text-lg text-slate-300 leading-relaxed">
                  Hello, I'm <strong className="font-semibold text-cyan-400">Muhammad Zahir Pahore</strong>, a passionate full-stack developer specializing in modern web technologies including the <Tag>MERN stack</Tag> and <Tag>WordPress</Tag> development.
                </p>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-md p-4 lg:p-6 rounded-xl lg:rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <p className="text-base lg:text-lg text-slate-300 leading-relaxed">
                  With deep expertise in both <Tag>frontend</Tag> and <Tag>backend</Tag> development, I craft seamless digital experiences from concept to deployment. My focus is on building scalable architectures and intuitive interfaces.
                </p>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-slate-800/50 to-cyan-900/20 backdrop-blur-md p-4 lg:p-6 rounded-xl lg:rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <p className="text-base lg:text-lg text-slate-300 leading-relaxed">
                  As a certified <Tag>SEO specialist</Tag>, I integrate performance optimization and search engine best practices into every project, ensuring maximum visibility and user engagement.
                </p>
              </motion.div>
            </div>

            {/* Quote Section - Mobile Optimized */}
            <motion.div 
              className="relative mt-6 lg:mt-8 p-4 lg:p-6 rounded-xl lg:rounded-2xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 backdrop-blur-sm"
              whileHover={{ scale: 1.01 }}
            >
              <div className="text-cyan-300 text-base lg:text-lg font-medium italic text-center">
                "Transforming ideas into impactful digital solutions through innovative code and creative execution."
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

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
        
        /* Mobile-specific optimizations */
        @media (max-width: 768px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

// Tag component for highlighted text - Responsive
const Tag = ({ children }) => (
  <span className="inline-block bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-300 px-1.5 py-0.5 lg:px-2 lg:py-1 rounded-md lg:rounded-lg border border-cyan-500/30 text-xs lg:text-sm font-medium mx-0.5 lg:mx-1">
    {children}
  </span>
);

export default About;