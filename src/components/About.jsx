import React from 'react';
import { motion } from 'framer-motion';
import SkillsProgressBars from './Skills';

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Image Section */}
          <motion.div
            className="relative group hidden lg:block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <img 
              src="zkpahore.jpg" 
              alt="Muhammad Zahir Pahore"
              className="w-full h-auto rounded-2xl transform group-hover:scale-95 transition-transform duration-300 shadow-2xl"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <motion.p 
                className="relative pl-6 border-l-4 border-yellow-400"
                whileHover={{ x: 10 }}
              >
                Hello, I'm <strong className="font-semibold text-yellow-400">Muhammad Zahir Pahore</strong>, a passionate full-stack developer specializing in the <span className="highlight">MERN stack</span> and <span className="highlight">WordPress</span> development.
              </motion.p>

              <motion.p 
                className="relative bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
              >
                With expertise in both <span className="highlight">frontend</span> and <span className="highlight">backend</span> development, I create seamless digital experiences from concept to deployment. My work focuses on building scalable architectures and intuitive interfaces.
              </motion.p>

              <motion.p 
                className="relative bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
              >
                As a certified <span className="highlight">SEO specialist</span>, I integrate performance optimization and search engine best practices into every project, ensuring maximum visibility and engagement.
              </motion.p>

              <motion.p 
                className="text-xl font-medium text-yellow-300/90 italic border-t-2 border-gray-700 pt-6"
                whileHover={{ scale: 1.01 }}
              >
                "Transforming ideas into impactful digital solutions through code and creativity."
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <SkillsProgressBars />
        </motion.div>
      </div>

      <style jsx>{`
        .highlight {
          background: linear-gradient(120deg, rgba(250,204,21,0.2) 0%, rgba(252,211,77,0.1) 100%);
          padding: 0.2em 0.4em;
          border-radius: 4px;
          border: 1px solid rgba(250,204,21,0.3);
          font-weight: 500;
          color: #fde047;
        }
      `}</style>
    </section>
  );
};

export default About;