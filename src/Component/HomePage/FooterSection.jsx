// src/components/Footer.js
import React from 'react';
import 'font-awesome/css/font-awesome.min.css';  // Import Font Awesome icons

const FooterSection = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5 className="mb-3">ServiceSeeker</h5>
            <p>Your go-to platform for finding reliable service providers near you. We connect customers with skilled service providers in various fields.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <h6 className="mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/terms" className="text-white text-decoration-none">Terms of Service</a></li>
              <li><a href="/privacy" className="text-white text-decoration-none">Privacy Policy</a></li>
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
};

export default FooterSection;
