import React from 'react';
import { GrHomeRounded } from "react-icons/gr";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { NavLink } from 'react-router-dom';
import "./SideBar.css"


const SideBar = ({children, isOpen, setIsOpen}) => {

    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<GrHomeRounded/>
        },
        {
            path:"/add-flashcard",
            name:"Add Flashcard",
            icon:<MdOutlineLibraryAdd/>
        },
        {
            path:"/edit-flashcard",
            name:"Edit Flashcard",
            icon:<FaEdit/>
        },
        {
            path:"/delete-flashcard",
            name:"Delete Flashcard",
            icon:<MdDeleteOutline/>
        },
        {
            path:"/about",
            name:"About",
            icon:<HiUsers/>
        },
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "300px" : "80px"}} className="sidebar">
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default SideBar;