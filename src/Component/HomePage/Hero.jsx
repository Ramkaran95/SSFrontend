import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hero.css'; // Assuming you will add custom styles
import { NavLink } from 'react-router-dom';
function Hero() {
  return (
    <section className="hero-section">
      <div className="container text-center text-white hero-content">
        <h1 className="display-4 mb-3">Welcome to Service Seeker</h1>
        <p className="lead mb-4">Connecting service providers with customers effortlessly.</p>
        <NavLink className={(e) =>{return e.isActive ? "btn btn-light btn-lg hero-btn" : "btn btn-light btn-lg hero-btn hero-btn"}}to="/about">
             Learn More
            </NavLink>
      
      </div>
    </section>
  );
}

export default Hero;
