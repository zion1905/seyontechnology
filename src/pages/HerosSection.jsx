import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HerosSection = () => {
  return (
    <header className="hero-section">
      {/* Sticky & Stylish Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <span>🚀 <strong>Seyon Technology</strong></span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center gap-lg-4 gap-2">
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="btn nav-cta" href="#get-started">Get Started</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container text-center hero-content">
        <h1 className="hero-title">
          <span className="highlight">Result-Driven</span><br />
          Digital Marketing Agency
        </h1>
        <p className="hero-subtitle">
          Helping brands grow with strategy, creativity & technology.
        </p>
        <p className="hero-tagline">
          Serving businesses locally and globally.
        </p>

        <div className="cta-buttons">
          <a className="btn btn-lg btn-light cta-btn-primary" href="#start">Start Your Growth Journey</a>
          <a className="btn btn-lg btn-outline-light cta-btn-secondary" href="#work">View Our Work</a>
        </div>

        <div className="row stats-row">
          <div className="col-6 col-md-3">
            <h5>500+</h5>
            <p>Happy Clients</p>
          </div>
          <div className="col-6 col-md-3">
            <h5>1000+</h5>
            <p>Projects Completed</p>
          </div>
          <div className="col-6 col-md-3">
            <h5>98%</h5>
            <p>Client Satisfaction</p>
          </div>
          <div className="col-6 col-md-3">
            <h5>24/7</h5>
            <p>Support Available</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HerosSection;
