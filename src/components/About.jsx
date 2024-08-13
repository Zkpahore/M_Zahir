import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className='w-full flex'>
      <motion.div
        className="hidden md:w-1/2 lg:w-1/2 md:flex lg:flex"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img src="zkpahore.jpg" className="" />
      </motion.div>

      <motion.div
        className='bg-slate-700 text-center justify-center items-center text-white p-6 lg:w-3/4 md:w-3/4'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className='text-3xl py-6'><span className='text-yellow-400'>About</span> Me</h2>
        <p className='py-2'>Hello, I'm Muhammad Zahir, a passionate and dedicated developer specializing in both the MERN (MongoDB, Express.js, React.js, Node.js) stack and WordPress. My journey in web development has been driven by a love for creating robust, scalable, and user-centric web applications that not only meet but exceed client expectations.</p>
        <p className='py-2'>With a strong foundation in both frontend and backend technologies, I take pride in building dynamic and responsive web solutions. On the backend, I design efficient databases and develop powerful APIs, ensuring that the data flow is seamless and the application architecture is solid. On the frontend, I focus on crafting intuitive and engaging user interfaces, leveraging the versatility of React.js to create experiences that are both aesthetically pleasing and highly functional.</p>
        <p className='py-2'>My expertise isn't limited to coding alone. As an SEO expert, I understand the importance of visibility in the digital landscape. I ensure that every web application I develop is optimized for search engines, helping businesses reach their target audience more effectively and drive organic traffic. By integrating SEO best practices into the development process, I enhance the online presence of my clients, ensuring their websites rank higher in search results.</p>
        <p className='py-2'>Ultimately, my goal is to deliver web applications that are not only technically sound but also user-friendly and impactful. I believe in the power of technology to transform businesses and am committed to using my skills to create solutions that drive success.</p>
      </motion.div>
    </div>
  )
}

export default About;
