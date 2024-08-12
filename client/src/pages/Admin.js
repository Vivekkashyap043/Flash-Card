import React, { useState } from 'react';
import "./Admin.css";
import { Route, Routes } from 'react-router-dom';
import Home from "./Home";
import EditCard from "./EditCard";
import AddCard from "./AddCard";
import DeleteCard from "./DeleteCard";
import About from "./About";
import SideBar from "../components/SideBar";
import { IoMenuOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

const Admin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{width: "100%"}}>
      <div className='header'>
        <div className='menu'>
          <IoMenuOutline onClick={toggle} />
        </div>
        <h1 style={{fontSize: 25, marginLeft: "10px", marginTop: "17px"}}>Flashcard</h1>
      </div>
      <SideBar isOpen={isOpen}>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="add-flashcard" element={<AddCard />} />
          <Route path="edit-flashcard" element={<EditCard />} />
          <Route path="delete-flashcard" element={<DeleteCard />} />
          <Route path="about" element={<About />} />
        </Routes>
      </SideBar>
    </div>
  );
};

export default Admin;
