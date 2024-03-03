// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#8811ff']; 

  const items = ['Html_5', 'React_Js', 'Tailwind_Css', 'Css', 'ES6', 'Vite_frame', 'React_Router'];
  const iterm = ['Express_Js', 'Node_Js', 'Mongoose', 'Rest_API', 'MongoDB'];

  return (
    
    <div className='md:flex lg:flex gap-4'>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="section p-4 bg-gray-100 rounded-lg shadow-md w-full md:w-3/6 lg:w-3/6 flex flex-wrap"
    >
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="card items-center"
      >
        <div className="profile-image mr-4">
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5, type: 'spring', stiffness: 100 }}
            src="zkpahore.jpg"
            alt="Profile"
            className="rounded-full w-24 h-24 object-cover"
          />
        </div>
        <div className="details">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-lg font-bold my-4"
          >
            Muhammad Zahir
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-gray-600"
          >
            MERN Stack Developer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="social-icons flex mt-2"
          >
            <div
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2"
            >
            <p>Hello, I'm Muhammad Zahir, a MERN (MongoDB, Express.js, React.js, Node.js)
             stack developer passionate about building robust and scalable web applications.
             With proficiency in both frontend and backend technologies,
             I specialize in creating dynamic and responsive web solutions that meet client needs and exceed expectations.
             From database design and API development to user interface implementation,
              I leverage the power of the MERN stack to deliver efficient and user-friendly applications.</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>

<hr className='block md:hidden lg:hidden border-4'/>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="section p-2 bg-gray-100 rounded-lg shadow-md w-full md:w-3/6 lg:w-3/6 flex flex-wrap"
    >
      <h2 className="text-2xl font-bold my-1 mx-2">Skills</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="card items-center"
      >
        <br />
       
        <div className="details">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-lg font-bold my-4">
            Front_End
          </motion.h3>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="social-icons flex mt-2">
        <ol className='flex flex-wrap'>
        {items.map((item, index) => (
          <li key={index} style={{ borderColor: colors[index % colors.length] }} className="border-2 p-2 m-2 rounded-lg bg-slate-700 text-white">
            {item}
          </li>
        ))}
      </ol>
            
          </motion.div>
        </div>
        <div className="details">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-lg font-bold my-4">
            Back_End
          </motion.h3>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="social-icons flex mt-2">
        <ol className='flex flex-wrap'>
        {iterm.map((item, index) => (
          <li key={index} style={{ borderColor: colors[index % colors.length] }} className="border-2 p-2 m-2 rounded:md bg-slate-700 text-white">
            {item}
          </li>
        ))}
      </ol>
            
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
    </div>
  );
};

export default About;
