import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
      {/* Site Name */}
      <a className="navbar-brand fw-bold fs-1" href="/">
        Service Seeker
      </a>
  
      {/* Toggle Button for Mobile */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
  
      {/* Collapsible Navbar Content */}
      <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
        <div className="ms-auto d-flex justify-content-end">
          <ul className="navbar-nav p-3">
            {/* About Link */}
            <li className="nav-item p-2">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "btn bg-primary text-white me-2"
                    : "btn btn-light fw-bold text-primary ms-3"
                }
              >
                About
              </NavLink>
            </li>
            {/* Login Link */}
            <li className="nav-item p-2">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "btn bg-primary text-white me-2"
                    : "btn btn-light fw-bold text-primary ms-3"
                }
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  
  );
};

export default NavBar;
