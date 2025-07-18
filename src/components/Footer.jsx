import 'bootstrap-icons/font/bootstrap-icons.css'; // Make sure this is imported

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-lg-4 mb-4">
            <h5 className="fw-bold mb-3">SEYON TECHNOLOGY</h5>
            <p className="text-muted">
              Result-driven digital marketing agency helping brands grow with strategy, creativity & technology.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="https://www.facebook.com/share/1HguFTRy7G/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook fs-4 text-light"></i>
              </a>
              <a href="https://wa.me/+918870214412" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-whatsapp fs-4 text-light"></i>
              </a>
              <a href="https://www.instagram.com/seyontechnology?igsh=Z3AzdHk0a2ZtMGNy" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram fs-4 text-light"></i>
              </a>
              <a href="https://www.linkedin.com/posts/seyon-technology-digital-solutions_seyontech-applaunch-mobiletracker-activity-7345548751261810688-qb2Y" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin fs-4 text-light"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-bold mb-3">Services</h6>
            <ul className="list-unstyled">
              <li><a href="#social" className="text-muted text-decoration-none">Social Media Marketing</a></li>
              <li><a href="#social" className="text-muted text-decoration-none">SEO Optimization</a></li>
              <li><a href="#social" className="text-muted text-decoration-none">Google Ads</a></li>
              <li><a href="#social" className="text-muted text-decoration-none">Web Development</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled">
              <li><a href="#about us" className="text-muted text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Case Studies</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Blog</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Careers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-4 mb-4">
            <h6 className="fw-bold mb-3">Contact</h6>
            <div className="contact-info">
              <p className="text-muted mb-2">
                <strong>Email:</strong> hello@seyontechnology.com
              </p>
              <p className="text-muted mb-2">
                <strong>Phone:</strong> +91 8870214412
              </p>
              <p className="text-muted mb-2">
                <strong>Address:</strong> Park Circle, No. 20, Moores Road, Egmore, Chennai, Tamil Nadu 600006
              </p>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <div className="row">
          <div className="col text-center">
            <p className="text-muted mb-0">
              © 2025 SEYON TECHNOLOGY. All rights reserved. Built with passion for digital excellence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
