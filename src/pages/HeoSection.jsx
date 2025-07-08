import React from 'react'

const HeroSection = () => {
  return (
    <section className="hero-section position-relative overflow-hidden">
      <div className="container py-5">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6">
            <div className="hero-content">
              <h1 className="display-4 fw-bold text-dark mb-4">
                Build Bright Future? Learn Many Things Us
              </h1>
              
              <div className="search-box mb-4">
                <div className="input-group input-group-lg">
                  <input 
                    type="text" 
                    className="form-control border-0 shadow-sm" 
                    placeholder="Type here ..."
                    style={{borderRadius: '50px 0 0 50px'}}
                  />
                  <button 
                    className="btn btn-primary px-4" 
                    type="button"
                    style={{borderRadius: '0 50px 50px 0'}}
                  >
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
              
              <div className="features-list">
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="feature-icon me-2">
                        <span className="text-danger">✓</span>
                      </div>
                      <span className="text-muted">Free for physically handcraft</span>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="feature-icon me-2">
                        <span className="text-danger">✓</span>
                      </div>
                      <span className="text-muted">Course certificate</span>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="feature-icon me-2">
                        <span className="text-danger">✓</span>
                      </div>
                      <span className="text-muted">Easy to enroll courses</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="hero-images position-relative">
              <div className="image-container">
                <div className="floating-image floating-image-1">
                  <img 
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300" 
                    alt="Students learning" 
                    className="img-fluid rounded-circle shadow"
                    style={{width: '200px', height: '200px', objectFit: 'cover'}}
                  />
                </div>
                
                <div className="floating-image floating-image-2">
                  <img 
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300" 
                    alt="Professional man" 
                    className="img-fluid rounded-circle shadow"
                    style={{width: '150px', height: '150px', objectFit: 'cover'}}
                  />
                </div>
                
                <div className="floating-image floating-image-3">
                  <img 
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300" 
                    alt="Woman working" 
                    className="img-fluid rounded-circle shadow"
                    style={{width: '180px', height: '180px', objectFit: 'cover'}}
                  />
                </div>
                
                <div className="floating-image floating-image-4">
                  <img 
                    src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300" 
                    alt="Students studying" 
                    className="img-fluid rounded-circle shadow"
                    style={{width: '160px', height: '160px', objectFit: 'cover'}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="floating-message">
        <button className="btn btn-primary rounded-pill px-4 py-2 shadow">
          Leave a message
        </button>
      </div>
      
      <div className="decorative-elements">
        <div className="dots-pattern"></div>
        <div className="curved-line"></div>
      </div>
    </section>
  )
}

export default HeroSection