import React, { useState } from "react";
import "./Header.css";
import Navbar from "./Navbar/Navbar";
import  logo from '../../asset/images/logo.png'
import { FaBars,} from "react-icons/fa";
import { HiX } from "react-icons/hi";

const Header = () => {
  const [open, setOpen]= useState(false);
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div onClick={()=>setOpen(!open)} className="toggle-btn">
      {open? <HiX></HiX> :<FaBars></FaBars>}
      </div>
      <div className={open? "nav-item": "hide-item"}>
        <Navbar></Navbar>
      </div>
    </nav>
  );
};

export default Header;
