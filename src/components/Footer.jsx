import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h5 className="fw-bold mb-3">SEYON TECHNOLOGY</h5>
            <p className="text-muted">
              Result-driven digital marketing agency helping brands grow with strategy, creativity & technology.
            </p>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-bold mb-3">Services</h6>
            <ul className="list-unstyled">
              <li><a href="#social" className="text-muted text-decoration-none">Social Media Marketing</a></li>
              <li><a href="#social" className="text-muted text-decoration-none">SEO Optimization</a></li>
              <li><a href="#social" className="text-muted text-decoration-none">Google Ads</a></li>
              <li><a href="#social" className="text-muted text-decoration-none">Web Development</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled">
              <li><a href="#about us" className="text-muted text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Case Studies</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Blog</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Careers</a></li>
            </ul>
          </div>

          <div className="col-lg-4 mb-4">
            <h6 className="fw-bold mb-3">Contact</h6>
            <div className="contact-info">
              <p className="text-muted mb-2">
                <strong>Email:</strong> hello@seyontechnology.com
              </p>
              <p className="text-muted mb-2">
                <strong>Phone:</strong> +91-8870214412
              </p>
              <p className="text-muted mb-2">
                <strong>Address:</strong> Park Circle, No. 20, Moores Road, Egmore, Chennai, Tamil Nadu 600006
              </p>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <div className="row align-items-center">
          <div className="col-md-12 text-center">
            <p className="text-muted mb-0">
              © 2025 SEYON TECHNOLOGY. All rights reserved. Built with passion for digital excellence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer