import React from 'react'
import { FaCss3Alt } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
export default function Services() {
  return (
    <div className='bg-slate-700 w-full text-white'>
      <div className='text-center'>
        <h1 className='font-bold text-5xl p-6'>My <span className='text-yellow-500'>Services</span></h1>
        <p className='m-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae est,<br />
             vero ullam doloremque at molestias aperiam. Eum,
             sit suscipit ducimus dolore ratione repellat fuga,
            </p>
      </div>
      <div className='mt-10 flex flex-wrap gap-6 justify-center'>
        <div className='box-border border-gray-500 w-72 h-72 p-4 border-2 justify-center text-center flex-shrink-0'>
       <p className='text-6xl'> <FaCss3Alt className='bg-yellow-400 rounded-full p-3 mx-auto m-4'/></p>
       <h3 className='m-4 text-1xl font-bold'>Web Design</h3>
       <p className='m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Accusantium labore praesentium voluptatem
        nihil delectus cum porro alias ipsum
        </p>
       
        </div>
        <div className='box-border border-gray-500 w-72 h-72 p-4 border-2 justify-center text-center'>
       <p className='text-6xl'> <FaReact className='bg-yellow-400 rounded-full p-3 mx-auto m-4'/></p>
       <h3 className='text-1xl font-bold m-4'>Web Development</h3>
       <p className='m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Accusantium labore praesentium voluptatem
        nihil delectus cum porro alias ipsum
        </p>
       
        </div>
        <div className='box-border border-gray-500 w-72 h-72 p-4 border-2 justify-center text-center'>
       <p className='text-6xl'> <FaCode className='bg-yellow-400 rounded-full p-3 mx-auto m-4'/></p>
       <h3 className='text-1xl font-bold m-4'>Clean Code</h3>
       <p className='m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Accusantium labore praesentium voluptatem
        nihil delectus cum porro alias ipsum
        </p>
       
        </div>
        <div className='box-border border-gray-500 w-72 h-72 p-4 border-2 justify-center text-center'>
       <p className='text-6xl'> <FaCode className='bg-yellow-400 rounded-full p-3 mx-auto m-4'/></p>
       <h3 className='text-1xl font-bold m-4'>Clean Code</h3>
       <p className='m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Accusantium labore praesentium voluptatem
        nihil delectus cum porro alias ipsum
        </p>
       
        </div>
        <div className='box-border border-gray-500 w-72 h-72 p-4 border-2 justify-center text-center'>
       <p className='text-6xl'> <FaCode className='bg-yellow-400 rounded-full p-3 mx-auto m-4'/></p>
       <h3 className='text-1xl font-bold m-4'>Clean Code</h3>
       <p className='m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Accusantium labore praesentium voluptatem
        nihil delectus cum porro alias ipsum
        </p>
       
        </div>
        <div className='box-border border-gray-500 w-72 h-72 p-4 border-2 justify-center text-center'>
       <p className='text-6xl'> <FaCode className='bg-yellow-400 rounded-full p-3 mx-auto m-4'/></p>
       <h3 className='text-1xl font-bold m-4'>Clean Code</h3>
       <p className='m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Accusantium labore praesentium voluptatem
        nihil delectus cum porro alias ipsum
        </p>
       
        </div>
      </div>
    </div>
  )
}
