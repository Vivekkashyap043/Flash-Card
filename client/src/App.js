import React, { useState } from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Enter from './pages/Enter';
import User from './pages/User';
import Admin from './pages/Admin';


const App = () => {

  return (
    <div style={{ widt: "100%" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Enter />} />
          <Route path="/user" element={<User />} />
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App
