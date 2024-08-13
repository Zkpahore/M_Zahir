import React from 'react';
import { FaCss3Alt, FaCode, FaReact, FaWordpressSimple, FaBriefcase, FaSearch, FaShoppingCart, FaChartBar, FaLightbulb, FaCogs, FaBolt, FaArrowsAlt, FaTools, FaPenNib, FaMobileAlt } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaReact className='bg-yellow-400 text-slate-700 rounded-full p-3 mx-auto m-4' />,
      title: 'MERN Stack Web Development',
      description: 'Build and maintain dynamic, responsive web apps using MongoDB, Express.js, React.js, and Node.js.'
    },
    {
      icon: <FaWordpressSimple className='bg-yellow-400 text-slate-700 rounded-full p-3 mx-auto m-4' />,
      title: 'Custom WordPress Solutions',
      description: 'Create and optimize WordPress themes, plugins, and provide ongoing site maintenance.'
    },
    {
      icon: <FaSearch className='bg-yellow-400 text-slate-700 rounded-full p-3 mx-auto m-4' />,
      title: 'SEO Optimization',
      description: 'Improve site rankings through keyword research, on-page/off-page SEO, and content optimization.'
    },
    {
      icon: <FaShoppingCart className='bg-yellow-400 text-slate-700 rounded-full p-3 mx-auto m-4' />,
      title: 'E-commerce Development',
      description: 'Develop and customize e-commerce platforms using MERN stack or WooCommerce.'
    },
    {
      icon: <FaChartBar className='bg-yellow-400 text-slate-700 rounded-full p-3 mx-auto m-4' />,
      title: 'Data Analysis',
      description: 'Analyze business data, generate insights, and create visual dashboards.'
    },
    {
      icon: <FaLightbulb className='bg-yellow-400 text-slate-700 rounded-full p-3 mx-auto m-4' />,
      title: 'Business Consulting',
      description: 'Provide business analysis, identify growth opportunities, and recommend tech solutions.'
    },
    {
      icon: <FaCogs className='bg-yellow-400 text-slate-700 rounded-full p-3 mx-auto m-4' />,
      title: 'API Development',
      description: 'Design and integrate RESTful APIs for seamless data exchange between systems.'
    },
    {
      icon: <FaBolt className='bg-yellow-400 text-slate-700 rounded-full p-3 mx-auto m-4' />,
      title: 'Website Optimization',
      description: 'Optimize website speed, performance, security, and mobile responsiveness.'
    },
    {
      icon: <FaArrowsAlt className='bg-yellow-400 text-slate-700 rounded-full p-3 mx-auto m-4' />,
      title: 'CMS Migration',
      description: 'Migrate websites between CMS platforms with minimal downtime and data integrity.'
    },
    {
      icon: <FaTools className='bg-yellow-400 text-slate-700 rounded-full p-3 mx-auto m-4' />,
      title: 'Web Application Maintenance',
      description: 'Provide ongoing support, updates, bug fixes, and feature enhancements for web applications.'
    },
    {
      icon: <FaPenNib className='bg-yellow-400 text-slate-700 rounded-full p-3 mx-auto m-4' />,
      title: 'Content Strategy and Management',
      description: 'Develop content strategies, manage content updates, and ensure alignment with SEO goals.'
    },
    {
      icon: <FaMobileAlt className='bg-yellow-400 text-slate-700 rounded-full p-3 mx-auto m-4' />,
      title: 'UI/UX Design',
      description: 'Design user-friendly interfaces and improve user experience for web and mobile applications.'
    }
  ];

  return (
    <div className='bg-slate-700 w-full text-white'>
      <div className='text-center'>
        <h2 className='font-bold text-5xl p-6 pt-24'>My <span className='text-yellow-500'>Services</span></h2>
        <p className='m-6 text-lg'>
          Ready to stand out online? I'm your go-to for top-notch web design and development services.<br />
          From sleek websites to dynamic web apps,<br />
          I create tailored solutions that impress and perform. Let's make your online presence shine!
        </p>
      </div>
      <div className='flex flex-wrap justify-center items-stretch py-10 gap-8'>
        {services.map((service, index) => (
          <div 
            key={index} 
            className='bg-slate-800 flex flex-col justify-between box-border border-gray-500 border-2 text-center w-80 p-6 mx-2 my-4 transform transition duration-400 hover:scale-105 hover:bg-slate-600 hover:shadow-lg rounded-lg min-h-[340px]'
          >
            <div className='flex-grow'>
              <p className='text-5xl'>{service.icon}</p>
              <h3 className='mt-4 text-2xl font-semibold'>{service.title}</h3>
              <p className='mt-2 text-base leading-relaxed'>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
