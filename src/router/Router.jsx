import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import Home from '../components/App';
import Users from '../components/Users';
import Dashboard from '../components/Dashboard';
function Router() {
  return (
    <BrowserRouter>
     
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/My_Projects" element={<ProfileCard />} />
        <Route path='/user/pro' element={<Users />} />
        <Route path='/dash' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}


export default Router;
