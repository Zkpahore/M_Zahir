import React from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
const App = () => {

  return (
     <>
    <div className='bg-gradient-to-r from-red-400 via-gray-300 to-blue-500 w-full'>
      
    <div className='fixed lg:hidden md:hidden bottom-0 left-0 w-1/4'>
        <a href='https://wa.me/message/CUNUVWJUHIDGG1'>
        <img src='icon.gif'/> </a>
        </div>
<Navbar />
<Profile />
<Skills />
<Projects />
<Footer />
</div>
    
     </>
  );
};

export default App;
