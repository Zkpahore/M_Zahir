import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiLinkedin, FiCopy, FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

const Contact = () => {
  const [isEmailHovered, setIsEmailHovered] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('Zahirpahore@gmail.com');
    setEmailCopied(true);
    toast.success('Email copied to clipboard!', {
      position: 'bottom-center',
      autoClose: 2000,
    });
    
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const contactMethods = [
    {
      icon: <FiMail />,
      label: 'Email',
      value: 'Zahirpahore@gmail.com',
      action: copyToClipboard,
      isClickable: true,
    },
    {
      icon: <FiPhone />,
      label: 'Phone',
      value: '+92 314 271 8479',
      action: null,
      isClickable: false,
    },
    {
      icon: <FiMapPin />,
      label: 'Location',
      value: 'Pakistan',
      action: null,
      isClickable: false,
    },
  ];

  const socialLinks = [
    {
      icon: <FiFacebook />,
      url: 'https://web.facebook.com/profile.php?id=100088421584668',
      label: 'Facebook profile',
      color: 'hover:text-blue-500',
    },
    {
      icon: <FiTwitter />,
      url: 'https://twitter.com/i/flow/login?redirect_after_login=%2FMuhamma22385581',
      label: 'Twitter profile',
      color: 'hover:text-cyan-400',
    },
    {
      icon: <FiLinkedin />,
      url: 'https://www.linkedin.com/in/muhammad-zahir-pahore-720049184/',
      label: 'LinkedIn profile',
      color: 'hover:text-blue-400',
    },
  ];

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
    <section id="contact" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 lg:py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-cyan-300">Get In Touch</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          
          <motion.p
            className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              variants={itemVariants}
            >
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                  Get in Touch
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  I'm always excited to take on new challenges and collaborate on innovative projects. 
                  Whether you need a website, web application, or technical consultation, I'm here to help.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.label}
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${
                      method.isClickable 
                        ? 'bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/30 hover:bg-slate-800/70 cursor-pointer' 
                        : 'bg-slate-800/30 border-slate-700/30'
                    }`}
                    whileHover={method.isClickable ? { y: -2, scale: 1.02 } : {}}
                    whileTap={method.isClickable ? { scale: 0.98 } : {}}
                    onClick={method.action}
                    variants={itemVariants}
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 text-white">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-400 text-sm">{method.label}</p>
                      <p className="text-white font-medium">{method.value}</p>
                    </div>
                    {method.isClickable && (
                      <div className="text-slate-400">
                        {emailCopied ? <FiCheck className="text-green-400" /> : <FiCopy />}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                className="pt-6 border-t border-slate-700/50"
                variants={itemVariants}
              >
                <p className="text-slate-400 mb-4">Follow me on social media</p>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-400 transition-all duration-300 ${link.color} hover:border-current/30 hover:scale-110`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={link.label}
                      variants={itemVariants}
                    >
                      <div className="text-xl">
                        {link.icon}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              className="relative"
              variants={itemVariants}
            >
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-slate-700/50">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    Start Your Project Today
                  </h3>
                  <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                    Let's discuss your requirements and create a solution that exceeds your expectations. 
                    I'm committed to delivering high-quality work on time and within budget.
                  </p>
                  
                  <div className="space-y-4">
                    <motion.a
                      href="mailto:Zahirpahore@gmail.com"
                      className="group relative inline-flex items-center justify-center w-full lg:w-auto px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl text-white font-semibold overflow-hidden hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        <FiMail className="text-xl" />
                        Send Email
                      </span>
                    </motion.a>
                    
                    <motion.a
                      href="https://wa.me/923142718479"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center justify-center w-full lg:w-auto px-8 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white font-semibold overflow-hidden hover:border-cyan-500/30 transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="flex items-center gap-3">
                        💬
                        WhatsApp Chat
                      </span>
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full blur-xl opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;