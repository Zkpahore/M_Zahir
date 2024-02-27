import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../header/Header';
import About from '../components/About';
import ProfileCard from '../components/ProfileCard';
import Users from '../components/Users';
import Home from '../components/App';
function Router() {
  return (
    <BrowserRouter>
      <Header />
    
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profileCard" element={<ProfileCard />} />
        <Route path="/users" element={<Users />} />
       
      </Routes>
      
    </BrowserRouter>
  );
}


export default Router;
