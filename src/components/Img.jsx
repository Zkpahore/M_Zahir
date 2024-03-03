import React from 'react';

export default function Img() {
  return (
    <>
    <div className='hidden w-full h-80 bg-cover md:flex lg:flex justify-center items-center' style={{ 
      backgroundImage: 'url("imga.jpg")'}}>
        <div className='hidden lg:flex md:flex md:w-1/2 lg:w-1/2'></div>
     <div className=" text-white font-mono w-full md:w-1/2 lg:w-1/2 text-center font-extrabold">
     <h1 className='text-2xl'>I am Available For Freelancer !</h1>
         <button className='text-2xl border-2 border-slate-600 py-1 rounded-full px-5 hover:bg-slate-800 mt-10'>Hire Me</button>
     </div>
    </div>

    <div className='w-full h-80 md:hidden lg:hidden flex justify-center items-center bg-black'>
        <div className='hidden w-full'></div>
     <div className=" text-white font-mono w-full md:w-1/2 lg:w-1/2 text-center font-extrabold">
     <h1 className='text-2xl'>I am Available For Freelancer !</h1>
         <button className='text-2xl border-2 border-slate-600 py-1 rounded-full px-5 hover:bg-slate-800 mt-10'>Hire Me</button>
     </div>
    </div>
    </>
  );
}