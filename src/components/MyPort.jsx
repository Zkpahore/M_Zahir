import React, { useState } from 'react';
import { RiParagraph } from 'react-icons/ri';

  

const Myrt = () => {
  const images = [
    {
      img: 'eCommerce.jpg',
      p: 'I have developed an innovative e-commerce platform using React with Vite for efficient performance and Tailwind CSS for sleek styling.'
    },
    {
      img:  'FireShot.png',
      p: 'I have crafted a  web application tailored for rental car services in our city for luxurious vehicle booking and customer experiences.'
    },
    {
      img:  'jhh.png',
      p: 'I have developed an innovative e-commerce platform using React with Vite for efficient performance and Tailwind CSS for sleek styling.'
    }
    
  ];
  return (
    <div className="flex justify-center items-center">
    <div className="grid gap-2 md:gap-4 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {images.map((img, index) => (
        <div key={index} className="relative overflow-hidden group">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 overflow-auto">
              <img
                src={img.img}
                alt={`Image ${index + 1}`}
                className="w-full object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-gray-700 text-base">{img.p}</p>
            </div>
          </div>
        </div>
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
    <div className="grid gap-2 md:gap-4 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {imagel.map((imageUrl, index) => (
        <div key={index} className="relative overflow-hidden group">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 overflow-auto">
              <img
                src={imageUrl}
                alt={`Image ${index + 1}`}
                className="w-full object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
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
      <div className="grid gap-2 md:gap-4 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {imager.map((imageUrl, index) => (
          <div key={index} className="relative overflow-hidden group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-auto">
                <img
                  src={imageUrl}
                  alt={`Image ${index + 1}`}
                  className="w-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
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
      <h1 className='text-3xl py-6'>My <span className='text-yellow-400'>Portfolio</span></h1>
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
