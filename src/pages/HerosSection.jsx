import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

const HerosSection = () => {
  return (
    <div className="hero-section">
    

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
    </div>
  );
};

export default HerosSection;
