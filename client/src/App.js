import React, { useState } from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../src/pages/Home"
import EditCard from "../src/pages/EditCard"
import AddCard from "../src/pages/AddCard"
import DeleteCard from "../src/pages/DeleteCard"
import About from "../src/pages/About"
import SideBar from "../src/components/SideBar"
import { FaBars }from "react-icons/fa";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className='header'>
      <div className='menu'>
      <FaBars onClick={ toggle }/>
      </div>
      <h1>Flashcard</h1>
    </div>
    <BrowserRouter>
      <SideBar toggle = { toggle } isOpen = { isOpen } setIsOpen = { setIsOpen }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-flashcard" element={<AddCard />} />
          <Route path="/edit-flashcard" element={<EditCard />} />
          <Route path="/delete-flashcard" element={<DeleteCard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </SideBar>
    </BrowserRouter>
    </>
  );
};

export default App
