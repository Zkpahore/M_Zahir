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
                    className="w-full lg:w-auto px-8 py-3 bg-green-900 hover:bg-slate-800 text-white font-semibold rounded-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
<circle cx="24" cy="24" r="20" fill="#66bb6a"></circle><path fill="#fff" d="M35.066,22.035v-0.959h-1.821l-0.8-0.014c-0.684,0-1.151,0.45-1.335,0.974v-0.959h-2.039V27.3 h2.039v-1.334v-2.066c0-0.62,0.503-1.123,1.123-1.123h0.795v4.523h2.039v-1.334v-2.066c0-0.62,0.503-1.123,1.123-1.123h1.012v-1.7 l-0.8-0.014C35.718,21.061,35.25,21.512,35.066,22.035z M20.56,21.206l-1.094,3.597l-1.093-3.597h-2.039l2.215,6.223h0.12h1.597 h0.12l2.213-6.223H20.56z M12.23,21.206v-0.415c0-0.364,0.294-0.658,0.658-0.658h1.287v-1.706h-1.767 c-1.223,0-2.216,0.991-2.216,2.216v0.564H9v1.649h1.192v4.572h2.039v-4.572h1.944v4.572h2.039v-4.572v-1.649h-2.039H12.23V21.206z M25.424,21.122h-0.248c-1.67,0-3.024,1.354-3.024,3.024v0.342c0,1.67,1.354,3.024,3.024,3.024h0.552 c1.143,0,2.122-0.706,2.524-1.705l-1.798-0.525c0,0-0.215,0.616-0.965,0.616c-0.847,0-1.295-0.463-1.354-0.989l0,0v-0.003 c-0.004-0.038-0.006-0.077-0.006-0.115h2.3h2.022v-0.643C28.448,22.476,27.094,21.122,25.424,21.122z M24.13,23.59 c0.025-0.559,0.485-1.006,1.051-1.006h0.194c0.565,0,1.026,0.446,1.051,1.006H24.13z"></path><circle cx="38.852" cy="26.305" r="1.268" fill="#263238"></circle>
</svg>
                    Fiverr Profile
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