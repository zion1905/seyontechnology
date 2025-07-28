import React, { useState } from 'react';
import '../App.css'; // Make sure styles are added there
import logo from '../assets/seyonLogo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
    <div id='navigation'>
      <nav className="navbar custom-navbar">
        <div className="container-fluid d-flex align-items-center justify-content-between px-4">

          {/* Left: Logo */}
          <div className="navbar-left">
            <a className="navbar-brand" href="#">
              <img
                src={logo}
                alt="Seyon Tech Logo"
              />
            </a>
          </div>

          {/* Center: Desktop Menu */}
          <div className="navbar-center d-none d-lg-flex">
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
            />
            <ul className="navbar-nav flex-row justify-content-space-between w-100 ">
              <li className="nav-item px-3">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Right: Desktop Get Started */}
          <div className="navbar-right d-none d-lg-flex">
            <Link to="/business-form" className="btn btn-get-started">Get Started</Link>

          </div>

          {/* Right: Hamburger Toggle (Mobile Only) */}
          <button
            className="d-lg-none border-0 bg-transparent"
            onClick={toggleMobileMenu}
            aria-label="Toggle Mobile Menu"
          >
            <i className={`bi ${isMobileMenuOpen ? 'bi-x-lg' : 'bi-list'} fs-2 royal-green-text`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="mobile-menu d-lg-none bg-white shadow-sm p-3">
          <ul className="navbar-nav text-center">
            <li className="nav-item py-2">
              <a className="nav-link royal-green-text" href="#home" onClick={toggleMobileMenu}>Home</a>
            </li>
            <li className="nav-item py-2">
              <a className="nav-link royal-green-text" href="#services" onClick={toggleMobileMenu}>Services</a>
            </li>
            <li className="nav-item py-2">
              <a className="nav-link royal-green-text" href="#about" onClick={toggleMobileMenu}>About</a>
            </li>
            <li className="nav-item py-2">
              <a className="nav-link royal-green-text" href="#contact" onClick={toggleMobileMenu}>Contact</a>
            </li>
            <li className="nav-item py-2">
              <a className="btn btn-get-started w-100" href="#get-started" onClick={toggleMobileMenu}>Get Started</a>
            </li>
          </ul>
        </div>
      )}
      </div>
    </>
  );
};

export default Header;