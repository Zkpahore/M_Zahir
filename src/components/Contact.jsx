import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';
import { toast } from 'react-toastify';
import { FiUser, FiMail, FiMessageSquare, FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';

// Initialize Firebase
const firebaseApp = initializeApp({
  apiKey: "AIzaSyDI2g8w8qL3x_MohRC4svoHf2khX5iDxJg",
  authDomain: "todo-app-ef68e.firebaseapp.com",
  projectId: "todo-app-ef68e",
  storageBucket: "todo-app-ef68e.appspot.com",
  messagingSenderId: "56703889128",
  appId: "1:56703889128:web:f1bad2f5cc2d18f29f235d",
  measurementId: "G-Y4XRMZ53Z0"
});

const db = getDatabase(firebaseApp);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await push(ref(db, 'messages'), {
        ...formData,
        timestamp: new Date().toISOString()
      });
      toast.success('Message sent successfully! I\'ll get back to you soon.', {
        position: 'bottom-center',
        autoClose: 4000,
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (error) {
      toast.error('Error sending message. Please try again or email me directly.', {
        position: 'bottom-center',
        autoClose: 4000,
      });
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="contact-form" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 lg:py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

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
              Send Me a Message
            </span>
          </h2>
          
          <motion.p
            className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Have a project in mind or want to collaborate? Fill out the form below and I'll get back to you as soon as possible.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Contact Form */}
            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 lg:p-12 border border-slate-700/50"
              variants={itemVariants}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="space-y-3">
                    <label className="text-slate-300 text-sm font-medium">Full Name *</label>
                    <div className="relative">
                      <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all backdrop-blur-sm"
                      />
                    </div>
                    {errors.name && (
                      <motion.span 
                        className="text-red-400 text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        {errors.name}
                      </motion.span>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-3">
                    <label className="text-slate-300 text-sm font-medium">Email Address *</label>
                    <div className="relative">
                      <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all backdrop-blur-sm"
                      />
                    </div>
                    {errors.email && (
                      <motion.span 
                        className="text-red-400 text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        {errors.email}
                      </motion.span>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-3">
                  <label className="text-slate-300 text-sm font-medium">Subject</label>
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    className="w-full px-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all backdrop-blur-sm"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-3">
                  <label className="text-slate-300 text-sm font-medium">Message *</label>
                  <div className="relative">
                    <FiMessageSquare className="absolute left-4 top-4 text-slate-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or inquiry..."
                      rows="6"
                      className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all resize-none backdrop-blur-sm"
                    ></textarea>
                  </div>
                  {errors.message && (
                    <motion.span 
                      className="text-red-400 text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {errors.message}
                    </motion.span>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center gap-3">
                    <FiSend className={`text-lg ${isSubmitting ? 'animate-spin' : ''}`} />
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </span>
                </motion.button>

                {/* Form Note */}
                <motion.p
                  className="text-center text-slate-400 text-sm mt-6"
                  variants={itemVariants}
                >
                  I typically respond within 24 hours. For urgent matters, you can also reach me directly through the contact information above.
                </motion.p>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;