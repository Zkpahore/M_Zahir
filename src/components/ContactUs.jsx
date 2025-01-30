import React, { useState } from 'react';
import { FiMail, FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

const Contact = () => {
  const [isEmailHovered, setIsEmailHovered] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('Zahirpahore@gmail.com');
    toast.success('Email copied to clipboard!', {
      position: 'bottom-center',
      autoClose: 2000,
    });
  };

  const socialLinks = [
    {
      icon: <FiFacebook />,
      url: 'https://web.facebook.com/profile.php?id=100088421584668',
      label: 'Facebook profile',
    },
    {
      icon: <FiTwitter />,
      url: 'https://twitter.com/i/flow/login?redirect_after_login=%2FMuhamma22385581',
      label: 'Twitter profile',
    },
    {
      icon: <FiLinkedin />,
      url: 'https://www.linkedin.com/in/muhammad-zahir-pahore-720049184/',
      label: 'LinkedIn profile',
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-tr from-slate-700 to-slate-800 rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="p-8 lg:p-12 grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Content Section */}
            <div className="space-y-6 border-r-0 lg:border-r-2 border-slate-600 pr-0 lg:pr-12">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl lg:text-4xl font-bold text-white mb-6 text-center lg:text-left"
              >
                Let's Create Something <span className="text-yellow-400">Extraordinary</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-slate-400 text-lg leading-relaxed text-center lg:text-left"
              >
                Elevate your digital presence with tailored web solutions. Whether you're launching a new project or optimizing an existing platform, let's collaborate to bring your vision to life with cutting-edge technology and innovative design.
              </motion.p>
            </div>

            {/* Contact Section */}
            <div className="flex flex-col items-center justify-center space-y-8">
              {/* Email Container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsEmailHovered(true)}
                onHoverEnd={() => setIsEmailHovered(false)}
                onClick={copyToClipboard}
                className="flex items-center bg-slate-700 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:bg-slate-600 w-full max-w-xs"
                role="button"
              >
                <FiMail className={`text-2xl ${isEmailHovered ? 'text-yellow-400' : 'text-slate-400'} transition-colors`} />
                <span className="ml-3 text-slate-300 font-medium">Zahirpahore@gmail.com</span>
              </motion.div>

              {/* Social Links */}
              <div className="flex space-x-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-yellow-400 transition-colors"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={link.label}
                  >
                    <div className="text-2xl p-2 bg-slate-700 rounded-full hover:bg-slate-600 transition-colors">
                      {link.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;