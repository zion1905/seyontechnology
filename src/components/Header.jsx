import React from 'react';
import '../App.css'; // Adjust the path as necessary

const Header = () => {
  return (
     <nav className="navbar custom-navbar fixed-top shadow-sm bg-white">
      <div className="container-fluid d-flex align-items-center justify-content-between px-4">
        
        {/* Left: Logo */}
        <div className="navbar-left">
          <a className="navbar-brand fw-bold royal-green-text fs-3" href="#home">
            Seyon <span className="tech-text">Tech</span>
          </a>
        </div>

        {/* Center: Navigation */}
        <div className="navbar-center d-none d-lg-flex">
          <ul className="navbar-nav flex-row justify-content-center w-100">
            <li className="nav-item px-3">
              <a className="nav-link royal-green-text" href="#home">Home</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link royal-green-text" href="#services">Services</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link royal-green-text" href="#about">About</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link royal-green-text" href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Right: Get Started Button */}
        <div className="navbar-right d-none d-lg-flex">
          <a className="btn btn-get-started" href="#get-started">Get Started</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
