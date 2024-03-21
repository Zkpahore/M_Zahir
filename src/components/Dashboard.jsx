import React from "react";


function Dashboard() {

  return (
    <div className="w-full flex bg-slate-700 text-white">
      <div className="hidden md:w-1/2 lg:w-1/2 md:flex lg:flex items-center">
        <img src="zkpahore.jpg" className="w-3/4"/>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2  mt-20">
        <h2 className="text-2xl mb-8 font-serif font-semibold mx-6 ">Hello, I Am <span className="text-yellow-500">Muhammad Zahir</span></h2>
        <p className="mx-6">I'm a MERN Stack developer, trained at IBA University Sukkur's IT BootCamp Phase II.
        I love building cool web apps with MongoDB, Express.js, React.js, and Node.js.</p>
            <div className="my-4 px-3 lg:px-6 md:px-6">
        <pre className="my-6">Name      : Muhammad Zahir</pre>
         <pre className="my-6">Age       : 25</pre>
         <pre className="my-6">Address   : PK, Sindh, Jacobabad</pre>
         <pre className="my-6">Phone No  : +923142718479</pre>
         <pre className="my-6">Email     : Zahirpahore@gmail.com</pre>                                 
         </div>
         <button className="border py-3 px-4 my-10 mx-6 cursor-pointer hover:bg-yellow-400 active:bg-yellow-200 font-bold rounded-full text-center transform transition duration-400 hover:scale-110">
          <i className="fa fa-download"></i> Download Cv</button>
      </div>
    </div>
  );
}

export default Dashboard;
