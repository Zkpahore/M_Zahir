import React from 'react'
import { FaCss3Alt } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
export default function Services() {
  return (
    <div className='bg-slate-700 w-full text-white'>
      <div className='text-center'>
        <h1 className='font-bold text-5xl p-6 pt-24'>My <span className='text-yellow-500'>Services</span></h1>
        <p className='m-6'>Ready to stand out online? I'm your go-to for top-notch web design and development services.<br />
        From sleek websites to dynamic web apps,<br/>
        I create tailored solutions that impress and perform. Let's make your online presence shine!
            </p>
      </div>
     <div className='flex flex-wrap justify-center items-center py-10'>
  <div className='box-border border-gray-500 border-2 text-center w-80 lg:h-60 p-2 mx-2 my-2'>
    <p className='text-4xl'><FaCss3Alt className='bg-yellow-400 rounded-full p-1 mx-auto m-2'/></p>
    <h3 className='m-1 text-xl font-bold'>Web Design</h3>
    <p className='m-1'>Tailwind CSS experts crafting responsive designs for seamless adaptability across all devices.
     Empowering clients with functionality and aesthetics, staying ahead in the digital realm.</p>
  </div>
  <div className='box-border border-gray-500 border-2 text-center w-80 lg:h-60 p-2 mx-2 my-2'>
    <p className='text-4xl'><FaReact className='bg-yellow-400 rounded-full p-1 mx-auto m-2'/></p>
    <h3 className='m-1 text-xl font-bold'>Web Development</h3>
    <p className='m-1'>Harness the power of MERN stack for versatile, full-stack web development.
     Seamlessly integrate MongoDB, Express.js, React, and Node.js 
    for robust solutions tailored to your needs.</p>
  </div>

       <div className='box-border border-gray-500 border-2 text-center w-80 lg:h-60 p-2 mx-2 my-2'>
       <p className='text-4xl'> <FaCode className='bg-yellow-400 rounded-full p-1 mx-auto m-2'/></p>
       <h3 className='m-1 text-xl font-bold'>Clean Code</h3>
       <p className='m-1'>Craft code with precision and clarity for optimal readability and maintainability.
        Prioritize simplicity and consistency to ensure clean, efficient solutions.</p>
       </div>

        {/* <div className='box-border border-gray-500 border-2 text-center w-72 mx-2 my-2'>
       <p className='text-4xl'> <FaCode className='bg-yellow-400 rounded-full p-1 mx-auto m-2'/></p>
       <h3 className='m-1 text-xl font-bold'>Clean Code</h3>
       <p className='m-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Accusantium labore praesentium voluptatem</p>
        </div>

        <div className='box-border border-gray-500 border-2 text-center w-72 mx-2 my-2'>
       <p className='text-4xl'> <FaCode className='bg-yellow-400 rounded-full p-1 mx-auto m-2'/></p>
       <h3 className='m-1 text-xl font-bold'>Clean Code</h3>
       <p className='m-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Accusantium labore praesentium voluptatem</p>
       </div>

        <div className='box-border border-gray-500 border-2 text-center w-72 mx-2 my-2'>
       <p className='text-4xl'> <FaCode className='bg-yellow-400 rounded-full p-1 mx-auto m-2'/></p>
       <h3 className='m-1 text-xl font-bold'>Clean Code</h3>
       <p className='m-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Accusantium labore praesentium voluptatem</p>
       </div> */}

      </div>
    </div>
  )
}
