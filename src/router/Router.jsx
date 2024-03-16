import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../header/Header';
import About from '../components/About';
import ProfileCard from '../components/ProfileCard';
import Users from '../components/Users';
import Home from '../components/App';
import Footer from '../components/Footer';
function Router() {
  return (
    <BrowserRouter>
      <Header />
    
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/My_Projects" element={<ProfileCard />} />
        <Route path="/Contact_Us" element={<Users />} />
       
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}


export default Router;
