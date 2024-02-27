// Dashboard.jsx

import React from "react";


function Dashboard() {
  return (
    <div className="w-full flex bg-slate-700 text-white h-screen">
      <div className="w-1/2">
        <img src="zkpahore.jpg" className="w-3/4 m-10"/>
      </div>
      <div className="w-1/2 mx-20 mt-20">
        <h2 className="text-3xl mb-8 font-serif font-semibold">Hello, I Am <span className="text-yellow-500">Muhammad Zahir</span></h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis ratione doloremque,
           quam cumque tempore quaerat magni explicabo beatae, tenetur eos, accusantium labore quibusdam quo deleniti alias impedit architecto non possimus.</p>
        <pre className="mt-16">Name       : Muhammad Zahir</pre>
         <pre className="mt-6">Age        : 25</pre>
         <pre className="mt-6">Address    : Pakistan, Sindh, Jacobabad.</pre>
         <pre className="mt-6">Phone No.  : +923142718479</pre>
         <pre className="mt-6">Email      : Zahirpahore@gmail.com</pre>                                 

         <button className="border py-3 px-7 mt-10 cursor-pointer hover:bg-blue-400 font-bold rounded-full">
          <i className="fa fa-download"></i> Download Cv</button>
      </div>
    </div>
  );
}

export default Dashboard;
