import React from 'react';
import { motion } from 'framer-motion';

export default function Img() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="freelance" className="w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 lg:py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/10 via-transparent to-transparent" />
      <div className="absolute top-10 left-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="relative group"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Main Card Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500" />
          
          {/* Main Card */}
          <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden">
            <div className="p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                {/* Profile Section */}
                <motion.div 
                  className="flex items-center gap-6 flex-1"
                  variants={itemVariants}
                >
                  {/* Profile Image */}
                  <div className="relative">
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img
                        className="w-24 h-24 lg:w-28 lg:h-28 object-cover rounded-2xl border-2 border-green-400/50 shadow-2xl"
                        src="zkpahore.jpg"
                        alt="Muhammad Zahir - Professional Web Developer"
                      />
                      {/* Online Status */}
                      <div className="absolute -top-1 -right-1 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 text-xs font-bold rounded-full shadow-lg flex items-center gap-2 border border-white/20">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                        Available
                      </div>
                    </motion.div>
                  </div>

                  {/* Profile Info */}
                  <div className="flex-1">
                    <motion.h2 
                      className="text-2xl lg:text-3xl font-bold text-white mb-2"
                      variants={itemVariants}
                    >
                      zahirkhp
                    </motion.h2>
                    <motion.p 
                      className="text-green-400 font-semibold mb-3 flex items-center gap-2"
                      variants={itemVariants}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      Professional Seller on Fiverr
                    </motion.p>
                    <motion.p 
                      className="text-slate-400 text-sm leading-relaxed"
                      variants={itemVariants}
                    >
                      Professional web developer specializing in MERN stack, WordPress, and custom web solutions. 
                      Ready to bring your ideas to life with quality code and modern technologies.
                    </motion.p>
                  </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div 
                  className="flex flex-col items-center lg:items-end gap-6"
                  variants={itemVariants}
                >
                  <div className="text-center lg:text-right">
                    <motion.p 
                      className="text-xl font-bold text-white mb-2"
                      whileHover={{ scale: 1.02 }}
                    >
                      Available for Freelance Projects!
                    </motion.p>
                    <p className="text-green-400 text-sm">
                      Let's bring your ideas to life
                    </p>
                  </div>

                  <motion.a
                    href="https://www.fiverr.com/zahirkhp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-white font-semibold overflow-hidden hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Button Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <span className="relative z-10 flex items-center gap-3">
                      {/* Fiverr Icon */}
                      <svg className="w-6 h-6" viewBox="0 0 48 48">
                        <circle cx="24" cy="24" r="20" fill="currentColor"/>
                        <path fill="#fff" d="M35.066,22.035v-0.959h-1.821l-0.8-0.014c-0.684,0-1.151,0.45-1.335,0.974v-0.959h-2.039V27.3 h2.039v-1.334v-2.066c0-0.62,0.503-1.123,1.123-1.123h0.795v4.523h2.039v-1.334v-2.066c0-0.62,0.503-1.123,1.123-1.123h1.012v-1.7 l-0.8-0.014C35.718,21.061,35.25,21.512,35.066,22.035z M20.56,21.206l-1.094,3.597l-1.093-3.597h-2.039l2.215,6.223h0.12h1.597 h0.12l2.213-6.223H20.56z M12.23,21.206v-0.415c0-0.364,0.294-0.658,0.658-0.658h1.287v-1.706h-1.767 c-1.223,0-2.216,0.991-2.216,2.216v0.564H9v1.649h1.192v4.572h2.039v-4.572h1.944v4.572h2.039v-4.572v-1.649h-2.039H12.23V21.206z M25.424,21.122h-0.248c-1.67,0-3.024,1.354-3.024,3.024v0.342c0,1.67,1.354,3.024,3.024,3.024h0.552 c1.143,0,2.122-0.706,2.524-1.705l-1.798-0.525c0,0-0.215,0.616-0.965,0.616c-0.847,0-1.295-0.463-1.354-0.989l0,0v-0.003 c-0.004-0.038-0.006-0.077-0.006-0.115h2.3h2.022v-0.643C28.448,22.476,27.094,21.122,25.424,21.122z M24.13,23.59 c0.025-0.559,0.485-1.006,1.051-1.006h0.194c0.565,0,1.026,0.446,1.051,1.006H24.13z"/>
                        <circle cx="38.852" cy="26.305" r="1.268" fill="#263238"/>
                      </svg>
                      Visit Fiverr Profile
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </motion.a>
                </motion.div>
              </div>

              {/* Stats Bar */}
              <motion.div 
                className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-700/50"
                variants={itemVariants}
              >
                {[
                  { value: '100%', label: 'Client Satisfaction' },
                  { value: '24/7', label: 'Support Available' },
                  { value: 'Fast', label: 'Delivery' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                  >
                    <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}