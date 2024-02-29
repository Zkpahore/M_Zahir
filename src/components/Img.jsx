import React from 'react';

export default function Img() {
  return (
    <div className='w-full h-80 bg-cover flex justify-center items-center' style={{ 
      backgroundImage: 'url("imga.jpg")'}}>
        <div className='hidden lg:flex md:flex w-full md:w-1/2 lg:w-1/2'></div>
     <div className=" text-blue-500 font-mono w-full md:w-1/2 lg:w-1/2 text-center font-extrabold">
     <h1 className='text-2xl'>I am Available For Freelancer !</h1>
         <button className='text-2xl border-2 border-white py-1 rounded-full px-5 hover:bg-slate-800 mt-10'>Hire Me</button>
     </div>
    </div>
  );
}
