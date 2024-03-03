import React, { useState } from 'react';

  

const Myrt = () => {
  const images = [
    'img231.jpg',
    'imga.jpg',
    'jfhu.png',
    'zkpahore.jpg',
    'imga.jpg',
    'zkpo.png',
  ];
  return (
    <div className='grid  justify-center items-center'>
      <div className="grid gap-2 md:gap-4 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      
      {images.map((imageUrl, index) => (
        <img
          key={index} 
          src={imageUrl}
          alt={`Image ${index + 1}`} className='w-40 h-40 md:w-64 md:h-64 lg:w-72 lg:h-72'
        />
      ))}
    </div>
    </div>
  );
};

const Data2Component = () => {
  const imagel = [
    'img231.jpg',
    'imga.jpg',
    'jfhu.png',
  ];

  return (
    <div className='grid  justify-center items-center'>
      <div className="grid gap-2 md:gap-4 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      
      {imagel.map((imageUrl, index) => (
        <img
          key={index} 
          src={imageUrl}
          alt={`Image ${index + 1}`} className='w-40 h-40 md:w-64 md:h-64 lg:w-72 lg:h-72'
        />
      ))}
    </div>
    </div>
  );
};

const Data3Component = () => {
  const imager = [
    'zkpahore.jpg',
    'imga.jpg',
    'zkpo.png',
  ];
  return (
    <div className='grid  justify-center items-center'>
      <div className="grid gap-2 md:gap-4 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      
      {imager.map((imageUrl, index) => (
        <img
          key={index} 
          src={imageUrl}
          alt={`Image ${index + 1}`} className='w-40 h-40 md:w-64 md:h-64 lg:w-72 lg:h-72'
        />
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
    <div className='w-full text-center text-white bg-slate-700'>
      <h1 className='text-3xl py-6'>My <span className='text-yellow-400'>Portfolio</span></h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Voluptates eum nisi debitis deleniti reprehenderit esse harum,</p>
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
