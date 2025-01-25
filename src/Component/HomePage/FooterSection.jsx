// src/components/Footer.js
import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";  // Import Font Awesome icons
import { SlLocationPin } from "react-icons/sl";

const FooterSection=()=>{
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container">
        <div className="row">
        <div className="col-md-4 text-md-start"> 
         

 <h5 className="mb-3"> <img
      src="/LP3.png"
      alt="Site Logo"
      style={{ height: "30px", marginBottom: "10px",textAlign:'left' }}
    /> &nbsp;ServiceSeeker</h5>
    <p className='text-left'>We bring the best of professional home <br />services right to your doorstep.
      <br/>Whether it's a cleaning, beauty treatment,<br /> or repair, we ensure quality, convenience and trust.</p>
          </div>
          <div className='col-md-4'>
          <h6 className="mb-3"> Quick Links</h6>
          <ul className="list-unstyled"> 
          <li><a href="/terms" className="text-white text-decoration-none">Terms of Service</a></li>
          <li><a href="/privacy" className="text-white text-decoration-none">Privacy Policy</a></li> 
          <li><a href="/contact" className="text-white text-decoration-none">Contact Us</a></li>
           <li><a href="/about" className="text-white text-decoration-none">About</a></li>
           
           </ul>
           </div>
           <div className="col-md-4">
            <h6 className="mb-3">Contact Info</h6>
            <ul className="list-unstyled">
              <li><FiPhoneCall className='i'/> +91 9956783376 </li>
              <li><TfiEmail className='i' />   serviceseeker@gmail.com</li>
              <li><SlLocationPin className='i'/>  Maharashtra,India</li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact Us</a></li>
            </ul>
          </div>
        </div>
      
          
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <h6>Follow Us</h6>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white fs-3 me-3">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white fs-3 me-3">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white fs-3 me-3">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white fs-3 me-3">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; {new Date().getFullYear()} ServiceSeeker. All Rights Reserved.</p>
        </div>
      </div>
    </footer>

  );
}

export default FooterSection;

