import React, { useState } from 'react';

  

const Myrt = () => {
  const images = [
    'imga.jpg',
    'imga.jpg',
    'imga.jpg',
    'imga.jpg',
    'imga.jpg',
    'imga.jpg',
  ];
  return (
    <div className='grid  justify-center items-center'>
      <div className="grid gap-2 grid-cols-2">
      
      {images.map((imageUrl, index) => (
        <img
          key={index} 
          src={imageUrl}
          alt={`Image ${index + 1}`} className='w-36 h-36 m-1'
        />
      ))}
    </div>
    </div>
  );
};

const Data2Component = () => {

  return (
    <div>
      <h1 className='text-blue-500'>Data 2 Component </h1>
      <p>This is the Data 2 component.</p>
      <p>This is the Data 2 component.</p>
      <p>This is the Data 2 component.</p>
      <p>This is the Data 2 component.</p>
    </div>
  );
};

const Data3Component = () => {
  return (
    <div>
      <h1 className='text-green-500'>Data 3 Component </h1>
      <p>This is the Data 3 component.</p>
      <p>This is the Data 3 component.</p>
      <p>This is the Data 3 component.</p>
      <p>This is the Data 3 component.</p>
      <p>This is the Data 3 component.</p>
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
      <button className='m-3 border-2 px-6 py-1 rounded-full border-yellow-200 hover:bg-yellow-400 bg-yellow-400 font-semibold'
       onClick={() => handleButtonClick("Myrt")}>All</button>
      <button className='m-3 border-2 px-6 py-1 rounded-full border-yellow-200 hover:bg-yellow-400 font-semibold' 
      onClick={() => handleButtonClick("Data 2")}>Designs</button>
      <button className='m-3 border-2 px-6 py-1 rounded-full border-yellow-200 hover:bg-yellow-400 font-semibold'
       onClick={() => handleButtonClick("Data 3")}>Full Stack</button>

      <div className='py-4'>{displayedComponent}</div>
      </div>
    </div>
  );
};

export default MyPrt;
