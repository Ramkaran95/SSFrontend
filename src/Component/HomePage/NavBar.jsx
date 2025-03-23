import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import './NavBar.css';
import { FaRegCircleUser } from "react-icons/fa6";

import { NavLink, Link } from "react-router-dom";
import {FaSearch} from "react-icons/fa"


const NavBar = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerwidth h-container">
        <div className="title">
      <a className="navbar-brand fw-bold fs-1" href="/">
      
        <img
        src="/LP3.png"
        alt="Logo"
        style={{ height: "50px", marginBottom: "10px" }}/>&nbsp; ServiceSeeker
      </a>
      </div>
        <div className="flexCenter paddings h-menu">
        <div className="button1">
          <NavLink to="/" style={{color:"white",fontWeight:"bold",textDecoration:"none"}}>Home</NavLink>
          </div>
          <div className="button1">
          <NavLink to="/service" style={{color:"white",fontWeight:"bold",textDecoration:"none"}}>Services</NavLink>
          </div>
          <div className="button1">
          <NavLink to="/about" style={{color:"white",fontWeight:"bold",textDecoration:"none"}}>About</NavLink>
          </div>
          <div className="button1">
            <NavLink to="/contact" style={{color:"white",fontWeight:"bold",textDecoration:"none"}}>Contact</NavLink>
          </div>
          <div className="button1">
          <NavLink to="/login" style={{color:"white",fontWeight:"bold",textDecoration:"none"}}>Login</NavLink>
          </div>
         
        </div>
      </div>
    </section>
    

  
  );
}

export default NavBar;
