import React from 'react';

export default function Img() {
  return (
    <>
    <div className='hidden w-full h-80 bg-cover md:flex lg:flex justify-center items-center bg-slate-800'>
        
     <div className=" text-white font-mono w-full md:w-1/2 lg:w-1/2 text-center font-extrabold">
     <div className="bg-green-300 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transform transition duration-300 hover:scale-105 w-full lg:w-11/12">
      <div className="p-8 lg:p-12">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex items-center mb-4 lg:mb-0">
            <div className="relative">
              <img className="w-20 h-20 lg:w-24 lg:h-24 object-cover rounded-full border-4 border-white" src="zkpahore.jpg" alt="Muhammad Zahir fiverr web developer" />
              <div className="absolute bottom-0 right-0 bg-green-500 text-white px-2 py-1 text-xs font-semibold rounded-full">Online</div>
            </div>
            <div className="ml-4">
              <div className="text-xl lg:text-2xl font-bold text-gray-800">zahirkhp</div>
              <div className="text-sm lg:text-base font-semibold text-gray-600">Seller at Fiverr</div>
            </div>
          </div>
          <a href="https://www.fiverr.com/zahirkhp" target="_blank" rel="noopener noreferrer"
           className="text-sm lg:text-xs font-bold text-blue-500 hover:text-blue-700 border bg-slate-950 p-3 rounded-lg">View Profile</a>
          
        </div>
        <div className="mt-4 text-base lg:text-lg text-gray-700">
          <p className="text-purple-60 font-serif font-bold text-slate-900">I am Available For Freelancer!</p>
        </div>
      </div>
    </div>
     </div>
    </div>

   
    <div className="bg-green-300 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transform transition duration-300 hover:scale-105 w-full md:hidden lg:hidden">
      <div className="p-8 lg:p-12">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex items-center mb-4 lg:mb-0">
            <div className="relative">
              <img className="w-20 h-20 lg:w-24 lg:h-24 object-cover rounded-full border-4 border-white" src="zkpahore.jpg" alt="web developer freelancer on fiverr" />
              <div className="absolute bottom-0 right-0 bg-green-500 text-white px-2 py-1 text-xs font-semibold rounded-full">Online</div>
            </div>
            <div className="ml-4">
              <div className="text-xl lg:text-2xl font-bold text-gray-800">zahirkhp</div>
              <div className="text-sm lg:text-base font-semibold text-gray-600">Seller at Fiverr</div>
            </div>
          </div>
          <a href="https://www.fiverr.com/zahirkhp" target="_blank" rel="noopener noreferrer"
           className="text-sm lg:text-xs font-bold text-blue-500 hover:text-blue-700 border bg-slate-950 p-3 rounded-lg">View Profile</a>
          
        </div>
        <div className="mt-4 text-base lg:text-lg text-gray-700">
          <p className="text-purple-60 font-serif font-bold text-slate-900">I am Available For Freelancer!</p>
        </div>
      </div>
    </div>
   
    </>
  );
}