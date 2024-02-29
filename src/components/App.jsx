import React, { useState, useEffect } from 'react';
import Dash from './Dashboard';
import Serv from './Services';
import '../App.css';
export default function App() {
  // State to store the current name
  const [name, setName] = useState("Muhammad Zahir");

  // List of names to rotate
  const names = ["Muhammad Zahir", "Web Designer", "Mern stack Developer"];

  // Index to track the current name
  const [currentIndex, setCurrentIndex] = useState(0);

  // Index to track the current character being displayed
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  // Function to update the name
  const updateName = () => {
    setCurrentCharIndex((prevIndex) => (prevIndex + 1) % (names[currentIndex].length + 1));
    if (currentCharIndex === 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length);
    }
  };

  useEffect(() => {
    const interval = setTimeout(updateName, 300);
    return () => clearTimeout(interval);
  }, [currentCharIndex, currentIndex]);

  useEffect(() => {
    setName(names[currentIndex].substring(0, currentCharIndex));
  }, [currentCharIndex, currentIndex, names]);

  return (
    <>
    <div className='bg-slate-900 w-full  block md:flex lg:flex text-white'>
      <div className='w-full md:w-1/2 lg:w-1/2  flex-shrink-0 gap-10 lg:m-24'>
        <h2 className='text-2xl lg:text-5xl  font-extrabold ml-6'>Hello!<br />I Am {name}<span className='text-gray-400'>|</span></h2>
        <p className='p-2 mt-6 '>I'm a Web Developer with extensive experience for over 2 years. My expertise is to create Front-End & Back-End of a web application</p>
        <button className='mt-10 ml-4 items-center bg-slate-900 text-white p-3 border border-white rounded-full hover:bg-blue-800 font-bold'>Contact Me</button>
      </div>
      <div className='lg:flex w-full md:w-1/2 lg:w-1/2 m-0'>
        <img src="zkpo.png" alt="Zkpahore" />
      </div>
    </div>
    <Dash />
    <Serv />
    </>
  );
}
