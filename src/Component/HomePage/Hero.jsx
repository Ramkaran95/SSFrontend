import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hero.css'; // Assuming you will add custom styles
import { NavLink, useNavigate } from 'react-router-dom';
import { HiLocationMarker } from 'react-icons/hi';
import { FaSearch } from 'react-icons/fa';
function Hero() {
  const navigate = useNavigate()
  const handleSearch=()=>{
    navigate("/UserDashboard")

  }
  return (
    <section className="hero-wrapper">
      <div className='paddings innerwidth flexCenter hero-container '>
        {/*Left Section*/}

        <div className='flexColStart hero-left'>
          <div className='hero-title'>
            <div className="blue-circle2"></div>
            <div className='blue-circle '/>
            <h1>
              Now Get Services<br/>
              At Your Doorstep!
              
            </h1>
        </div>
        <div className='flexColStart hero-des'>
          <span>Find experienced and reliable experts for all your needs-
          </span>
          <span>We have got the right professionals ready for you.</span>
          <span>Start your search now!</span>
        </div>
       

        <div className=' search-bar'>
    

          <FaSearch display='inline-block' color='aqua' size={25}/>
          <input type='text' placeholder='Find Experts eg:- painter,carpenter,plumber,etc'
          onChange={e=>setLocation(e.target.value)}/>
          <button className="button1" onClick={handleSearch}>Search</button>

        </div>
        </div>

        <div className='flexCenter hero-right'>
          <div className='image-container'>
            <img src='./hero-img.png' alt='' />
           
          </div>
        </div>

       </div>
    </section>
  
  );
}

export default Hero;
