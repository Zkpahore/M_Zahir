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
        <Route path="/Article" element={<ProfileCard />} />
        <Route path='/zkpahore-profile' element={<Users />} />
        <Route path='/ResumeCard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}


export default Router;
