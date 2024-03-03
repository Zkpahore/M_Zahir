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
     <div className='flex flex-wrap justify-center items-center py-10'>
  <div className='box-border border-gray-500 border-2 text-center w-72 mx-2 my-2'>
    <p className='text-4xl'><FaCss3Alt className='bg-yellow-400 rounded-full p-1 mx-auto m-2'/></p>
    <h3 className='m-1 text-xl font-bold'>Web Design</h3>
    <p className='m-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium labore praesentium voluptatem</p>
  </div>
  <div className='box-border border-gray-500 border-2 text-center w-72 mx-2 my-2'>
    <p className='text-4xl'><FaReact className='bg-yellow-400 rounded-full p-1 mx-auto m-2'/></p>
    <h3 className='m-1 text-xl font-bold'>Web Development</h3>
    <p className='m-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium labore praesentium voluptatem</p>
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
       </div>

      </div>
    </div>
  )
}
