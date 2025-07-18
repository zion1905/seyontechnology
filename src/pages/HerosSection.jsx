const HerosSection = () => {
  return (
    <div className="hero-section text-center py-5">
      <div className="container-hero-content">
        <h1 className="hero-title fw-bold mb-3">
          <span className="gradient-text">Result-Driven</span><br />
          <span className="text-dark">Digital Marketing Agency</span>
        </h1>

        <p className="hero-subtitle text-secondary fs-2 mb-2">
          Helping brands grow with strategy, creativity &amp; technology.
        </p>
        <p className="hero-tagline text-primary fw-large mb-4">
          Serving businesses locally and globally.
        </p>

        <div className="d-flex justify-content-center gap-3 mb-5 flex-wrap">
          <a className="btn btn-lg cta-btn-primary px-4" href="#start">
            Start Your Growth Journey &rarr;
          </a>
          <a className="btn btn-lg cta-btn-secondary px-4" href="#work">
            View Our Work
          </a>
        </div>

        {/* Stats */}
        { <div className="row justify-content-center mt-5">
          <div className="col-6 col-sm-3 mb-3">
            <h3 className="text-primary fw-bold">500+</h3>
            <p className="text-muted">Happy Clients</p>
          </div>
          <div className="col-6 col-sm-3 mb-3">
            <h3 className="text-primary fw-bold">1000+</h3>
            <p className="text-muted">Projects Completed</p>
          </div>
          <div className="col-6 col-sm-3 mb-3">
            <h3 className="text-primary fw-bold">98%</h3>
            <p className="text-muted">Client Satisfaction</p>
          </div>
          <div className="col-6 col-sm-3 mb-3">
            <h3 className="text-primary fw-bold">24/7</h3>
            <p className="text-muted">Support Available</p>
          </div>
        </div> }
      </div>
    </div>
  );
};

export default HerosSection;