import React from 'react';
// import MyPrt from './MyPort';
// import ContactUs from './ContactUs';
import { motion } from 'framer-motion';

export default function Img() {
  const profileVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      {/* Profile Card Section */}
      <section className="w-full bg-gradient-to-br from-slate-800 to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={profileVariants}
            className="relative bg-gradient-to-tr from-green-300 via-emerald-400 to-cyan-400 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transform transition-all duration-300 hover:-translate-y-2 group"
          >
            <div className="backdrop-blur-sm bg-white/5 p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                {/* Profile Info */}
                <div className="flex items-center gap-5 flex-1">
                  <div className="relative">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      className="w-24 h-24 object-cover rounded-full border-4 border-white/80 shadow-lg"
                      src="zkpahore.jpg"
                      alt="Muhammad Zahir - Professional Web Developer"
                    />
                    <div className="absolute bottom-1 right-1 bg-green-500 text-white px-3 py-1 text-xs font-bold rounded-full shadow-md flex items-center gap-1">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                      Online
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800">zahirkhp</h2>
                    <p className="text-sm font-semibold text-slate-600 mt-1">Seller on Fiverr</p>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="flex flex-col items-center gap-4">
                  <p className="text-lg font-serif font-bold text-slate-800 text-center">
                    Available for Freelance Projects!
                  </p>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.fiverr.com/zahirkhp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full lg:w-auto px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    View Fiverr Profile
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* <MyPrt />
      <ContactUs /> */}
    </>
  );
}