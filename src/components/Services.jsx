import React from 'react';
import IMG from './Img';
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
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      icon: <FaReact />,
      title: 'MERN Stack Web Development',
      description: 'Build and maintain dynamic, responsive web apps using MongoDB, Express.js, React.js, and Node.js.',
    },
    {
      icon: <FaWordpressSimple />,
      title: 'Custom WordPress Solutions',
      description: 'Create and optimize WordPress themes, plugins, and provide ongoing site maintenance.',
    },
    {
      icon: <FaSearch />,
      title: 'SEO Optimization',
      description: 'Improve site rankings through keyword research, on-page/off-page SEO, and content optimization.',
    },
    {
      icon: <FaShoppingCart />,
      title: 'E-commerce Development',
      description: 'Develop and customize e-commerce platforms using MERN stack or WooCommerce.',
    },
    {
      icon: <FaChartBar />,
      title: 'Data Analysis',
      description: 'Analyze business data, generate insights, and create visual dashboards.',
    },
    {
      icon: <FaLightbulb />,
      title: 'Business Consulting',
      description: 'Provide business analysis, identify growth opportunities, and recommend tech solutions.',
    },
    {
      icon: <FaCogs />,
      title: 'API Development',
      description: 'Design and integrate RESTful APIs for seamless data exchange between systems.',
    },
    {
      icon: <FaBolt />,
      title: 'Website Optimization',
      description: 'Optimize website speed, performance, security, and mobile responsiveness.',
    },
    {
      icon: <FaArrowsAlt />,
      title: 'CMS Migration',
      description: 'Migrate websites between CMS platforms with minimal downtime and data integrity.',
    },
    {
      icon: <FaTools />,
      title: 'Web Application Maintenance',
      description: 'Provide ongoing support, updates, bug fixes, and feature enhancements for web applications.',
    },
    {
      icon: <FaPenNib />,
      title: 'Content Strategy and Management',
      description: 'Develop content strategies, manage content updates, and ensure alignment with SEO goals.',
    },
    {
      icon: <FaMobileAlt />,
      title: 'UI/UX Design',
      description: 'Design user-friendly interfaces and improve user experience for web and mobile applications.',
    },
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 w-full text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl lg:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              My <span className="text-yellow-400">Services</span>
            </motion.h2>
            <motion.p
              className="text-lg text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to stand out online? From sleek websites to dynamic web apps, I create tailored solutions that impress
              and perform.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col items-center text-center bg-slate-700 rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                {/* Icon */}
                <div className="text-yellow-400 text-5xl mb-6 group-hover:text-white transition-colors">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4 group-hover:text-yellow-400 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-base text-slate-400 group-hover:text-slate-200 transition-colors">
                  {service.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute -right-8 -top-8 w-16 h-16 bg-yellow-400 transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <IMG />
    </>
  );
}