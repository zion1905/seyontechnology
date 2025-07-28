import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const HerosSection = () => {
  return (
    <>
    <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">

        {/* Slide 1 */}
        <div className="carousel-item active hero-slide" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063134.jpg?semt=ais_hybrid&w=740')" }}>
          <div className="overlay d-flex flex-column justify-content-center align-items-center text-center text-white">
            <h1 className="display-4 fw-bold mt-5" >
              <span className="highlight-text mt-10">Result-Driven</span><br />
              Digital Marketing Agency
            </h1>
            <p className="lead mt-3">
              Helping brands grow with strategy, creativity &amp; technology.
            </p>
            <p className="fw-semibold mb-4">Serving businesses locally and globally.</p>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <a className="btn" href="#start">Start Your Growth Journey →</a>
              <a className="btn1" href="#work">View Our Work</a>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item active hero-slide" style={{ backgroundImage: "url('https://www.springboard.com/blog/wp-content/uploads/2022/03/how-to-become-a-digital-marketing-manager-2022-guide.png')" }}>
          <div className="overlay d-flex flex-column justify-content-center align-items-center text-center text-white">
            <h1 className="display-4 fw-bold">
              <span className="highlight-text">Result-Driven</span><br />
              Digital Marketing Agency
            </h1>
            <p className="lead mt-3">
              Helping brands grow with strategy, creativity &amp; technology.
            </p>
            <p className="fw-semibold mb-4">Serving businesses locally and globally.</p>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <a className="btn " href="#start">Start Your Growth Journey →</a>
              <a className="btn1" href="#work">View Our Work</a>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item active hero-slide" style={{ backgroundImage: "url('https://talent500.com/blog/wp-content/uploads/sites/42/2023/09/gd_1200.webp')" }}>
          <div className="overlay d-flex flex-column justify-content-center align-items-center text-center text-white">
            <h1 className="display-4 fw-bold">
              <span className="highlight-text">Result-Driven</span><br />
              Digital Marketing Agency
            </h1>
            <p className="lead mt-3">
              Helping brands grow with strategy, creativity &amp; technology.
            </p>
            <p className="fw-semibold mb-4">Serving businesses locally and globally.</p>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <a className="btn" href="#start">Start Your Growth Journey →</a>
              <a className="btn1" href="#work">View Our Work</a>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="visually-hidden">Next</span>
      </button>
    </div>
       <div className="stats-container mt-5">
  <div className="row justify-content-center g-4 text-center">
    <div className="col-6 col-md-3">
      <div className="stat-box">
        <h3 className="stat-number">500+</h3>
        <p className="stat-label">Happy Clients</p>
      </div>
    </div>
    <div className="col-6 col-md-3">
      <div className="stat-box">
        <h3 className="stat-number">1000+</h3>
        <p className="stat-label">Projects Completed</p>
      </div>
    </div>
    <div className="col-6 col-md-3">
      <div className="stat-box">
        <h3 className="stat-number">98%</h3>
        <p className="stat-label">Client Satisfaction</p>
      </div>
    </div>
    <div className="col-6 col-md-3">
      <div className="stat-box">
        <h3 className="stat-number">24/7</h3>
        <p className="stat-label">Support Available</p>
      </div>
    </div>
  </div>
</div>
 
</>
  );
};

export default HerosSection;