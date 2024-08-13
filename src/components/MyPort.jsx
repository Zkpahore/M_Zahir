import React, { useState } from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const Myrt = () => {
  const images = [
    {
      img: 'eCommerce.jpg',
      p: 'I have developed an innovative e-commerce platform using React with Vite for efficient performance and Tailwind CSS for sleek styling.'
    },
    {
      img: 'FireShot.png',
      p: 'I have crafted a web application tailored for rental car services in our city for luxurious vehicle booking and customer experiences.'
    },
    {
      img: 'jhh.png',
      p: 'I have developed an innovative e-commerce platform using React with Vite for efficient performance and Tailwind CSS for sleek styling.'
    }
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="grid gap-4 md:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="relative group bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={img.img}
              alt={`Image ${index + 1}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-gray-700 text-base">{img.p}</p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="space-x-4">
                <a href="https://github.com/your-repo" target="_blank" className="bg-white text-black py-2 px-4 rounded">GitHub</a>
                <a href="https://your-live-site.com" target="_blank" className="bg-white text-black py-2 px-4 rounded">View</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Data2Component = () => {
  const imagel = [
    'eCommerce.jpg',
    'jhh.png',
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="grid gap-4 md:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {imagel.map((imageUrl, index) => (
          <motion.div
            key={index}
            className="relative group bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="space-x-4">
                <a href="https://github.com/your-repo" target="_blank" className="bg-white text-black py-2 px-4 rounded">GitHub</a>
                <a href="https://your-live-site.com" target="_blank" className="bg-white text-black py-2 px-4 rounded">View</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Data3Component = () => {
  const imager = [
    'jhh.png',
    'FireShot.png',
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="grid gap-4 md:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {imager.map((imageUrl, index) => (
          <motion.div
            key={index}
            className="relative group bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="space-x-4">
                <a href="https://github.com/your-repo" target="_blank" className="bg-white text-black py-2 px-4 rounded">GitHub</a>
                <a href="https://your-live-site.com" target="_blank" className="bg-white text-black py-2 px-4 rounded">View</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const NestedComponent = ({ data }) => {
  return (
    <div>
      <p>{data}</p>
    </div>
  );
};

const MyPrt = () => {
  const [displayedComponent, setDisplayedComponent] = useState(<Myrt />);

  const handleButtonClick = (data) => {
    switch (data) {
      case "Myrt":
        setDisplayedComponent(<Myrt />);
        break;
      case "Data 2":
        setDisplayedComponent(<Data2Component />);
        break;
      case "Data 3":
        setDisplayedComponent(<Data3Component />);
        break;
      default:
        setDisplayedComponent(<NestedComponent data={data} />);
    }
  };

  return (
    <div className='w-full text-center text-white bg-slate-700 md:px-6 lg:px-20'>
      <h4 className='text-3xl py-6'>My <span className='text-yellow-400'>Portfolio</span></h4>
      <p className='px-4 Lg:px-40'>With expertise in the MERN stack, my portfolio showcases innovative projects with seamless integration of MongoDB,
         Express.js, React.js, and Node.js. I prioritize clean code and intuitive design, delivering scalable web solutions tailored to client needs.
          Let's connect and discuss how I can elevate your next project with my MERN stack skills.
      </p>
      <div className='py-10'>
        <button className='m-2 lg:m-6 md:m-4 border-2 px-6 py-1 rounded-full border-yellow-200 hover:bg-yellow-400 focus:bg-yellow-400 font-semibold'
          onClick={() => handleButtonClick("Myrt")}>All</button>
        <button className='m-2 lg:m-6 md:m-4 border-2 px-3 py-1 rounded-full border-yellow-200 hover:bg-yellow-400 focus:bg-yellow-400 font-semibold'
          onClick={() => handleButtonClick("Data 2")}>Designs</button>
        <button className='m-2 lg:m-6 md:m-4 border-2 px-3 py-1 rounded-full border-yellow-200 hover:bg-yellow-400 focus:bg-yellow-400 font-semibold'
          onClick={() => handleButtonClick("Data 3")}>Full Stack</button>

        <div className='py-4'>{displayedComponent}</div>
      </div>
    </div>
  );
};

export default MyPrt;
