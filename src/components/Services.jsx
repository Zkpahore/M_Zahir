import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaWordpressSimple,
  FaSearch,
  FaShoppingCart,
  FaChartBar,
  FaLightbulb,
  FaCogs,
  FaBolt,
  FaArrowsAlt,
  FaTools,
  FaPenNib,
  FaMobileAlt,
} from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      icon: <FaReact />,
      title: 'MERN Stack Development',
      description: 'Build dynamic web apps using MongoDB, Express.js, React.js, and Node.js.',
      gradient: 'from-purple-500 to-cyan-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      icon: <FaWordpressSimple />,
      title: 'WordPress Solutions',
      description: 'Custom themes, plugins, and ongoing site maintenance.',
      gradient: 'from-blue-500 to-cyan-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      icon: <FaSearch />,
      title: 'SEO Optimization',
      description: 'Improve rankings through keyword research and content optimization.',
      gradient: 'from-green-500 to-emerald-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      icon: <FaShoppingCart />,
      title: 'E-commerce Development',
      description: 'Custom e-commerce platforms using MERN stack or WooCommerce.',
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20'
    },
    {
      icon: <FaChartBar />,
      title: 'Data Analysis',
      description: 'Analyze business data and create visual dashboards.',
      gradient: 'from-teal-500 to-blue-500',
      bgColor: 'bg-teal-500/10',
      borderColor: 'border-teal-500/20'
    },
    {
      icon: <FaLightbulb />,
      title: 'Business Consulting',
      description: 'Identify growth opportunities and recommend tech solutions.',
      gradient: 'from-yellow-500 to-amber-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20'
    },
    {
      icon: <FaCogs />,
      title: 'API Development',
      description: 'Design and integrate RESTful APIs for seamless data exchange.',
      gradient: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/20'
    },
    {
      icon: <FaBolt />,
      title: 'Performance Optimization',
      description: 'Optimize website speed, security, and mobile responsiveness.',
      gradient: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/20'
    },
    {
      icon: <FaArrowsAlt />,
      title: 'CMS Migration',
      description: 'Migrate websites between platforms with minimal downtime.',
      gradient: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/20'
    },
    {
      icon: <FaTools />,
      title: 'App Maintenance',
      description: 'Ongoing support, updates, and feature enhancements.',
      gradient: 'from-gray-500 to-slate-600',
      bgColor: 'bg-gray-500/10',
      borderColor: 'border-gray-500/20'
    },
    {
      icon: <FaPenNib />,
      title: 'Content Strategy',
      description: 'Develop strategies and manage content aligned with SEO goals.',
      gradient: 'from-emerald-500 to-green-500',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20'
    },
    {
      icon: <FaMobileAlt />,
      title: 'UI/UX Design',
      description: 'Design user-friendly interfaces for web and mobile applications.',
      gradient: 'from-violet-500 to-purple-500',
      bgColor: 'bg-violet-500/10',
      borderColor: 'border-violet-500/20'
    },
  ];

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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden py-16 lg:py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
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
            <span className="text-sm font-medium text-cyan-300">What I Offer</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Services & Solutions
            </span>
          </h2>
          
          <motion.p
            className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Comprehensive web development and digital solutions tailored to your business needs. 
            From concept to deployment, I deliver high-quality, scalable applications.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              {/* Background Glow */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300`} />
              
              {/* Service Card */}
              <div className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border ${service.borderColor} transition-all duration-300 group-hover:border-opacity-50 h-full flex flex-col`}>
                {/* Icon */}
                <div className={`p-3 rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg w-12 h-12 flex items-center justify-center mb-4`}>
                  <div className="text-white text-lg">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Indicator */}
                <div className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r ${service.gradient} group-hover:w-full transition-all duration-500 rounded-full`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 max-w-2xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-slate-300 text-lg mb-6">
              Let's discuss how we can bring your ideas to life with cutting-edge technology.
            </p>
            <motion.button
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '#contact'}
            >
              <span className="flex items-center gap-2">
                Start Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}