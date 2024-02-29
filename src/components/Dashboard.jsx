import React from "react";


function Dashboard() {

  return (
    <div className="w-full flex bg-slate-700 text-white">
      <div className="hidden md:w-1/2 lg:w-1/2 md:flex lg:flex items-center">
        <img src="zkpahore.jpg" className="w-3/4"/>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2  mt-20">
        <h2 className="text-2xl mb-8 font-serif font-semibold m-2">Hello, I Am <span className="text-yellow-500">Muhammad Zahir</span></h2>
        <p className="m-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis ratione doloremque,
           quam cumque tempore quaerat magni explicabo beatae, tenetur eos,
            accusantium labore quibusdam quo deleniti alias impedit architecto non possimus.</p>
            <div className="m-3">
        <pre className="mt-16">Name       : Muhammad Zahir</pre>
         <pre className="mt-6">Age        : 25</pre>
         <pre className="mt-6">Address    : PK, Sindh, Jacobabad</pre>
         <pre className="mt-6">Phone No.  : +923142718479</pre>
         <pre className="mt-6">Email      : Zahirpahore@gmail.com</pre>                                 
         </div>
         <button className="border py-3 px-4 my-10 cursor-pointer hover:bg-blue-400 font-bold rounded-full text-center">
          <i className="fa fa-download"></i> Download Cv</button>
      </div>
    </div>
  );
}

export default Dashboard;
