
const WhyChooseSection = () => {
  const features = [
    {
      id: 1,
      title: "Proven Results",
      description: "Track record of delivering measurable growth and ROI for our clients across all industries.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Results",
      date: "16 Jun, 2022"
    },
    {
      id: 2,
      title: "Expert Team", 
      description: "Certified professionals with years of experience in digital marketing and cutting-edge strategies.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Team",
      date: "14 Jun, 2022"
    },
    {
      id: 3,
      title: "Fast Execution",
      description: "Quick turnaround times without compromising quality. We get your campaigns live fast.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Speed",
      date: "12 Jun, 2022"
    }
  ]

  return (
    <div id="about">
    <section className="why-choose-section py-5" id="about us">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="title">Why Choose SEYON TECHNOLOGY?</h2>
          </div>
        </div>
        
        <div className="row g-4 justify-content-center">
          {features.map((feature) => (
            <div key={feature.id} className="col-lg-4 col-md-6">
              <div className="why-choose-card h-100">
                <div className="card-image-container">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="card-image"
                  />
                </div>
                <div className="card-content">
                  <div className="card-meta d-flex justify-content-between align-items-center mb-3">
                    <span className="category-badge">{feature.category}</span>
                    <span className="date-text">{feature.date}</span>
                  </div>
                  <h5 className="display-7 fw-bold custom-dark-green mb-4">
                    {feature.title}
                  </h5>
                  <p className="display-9  custom-dark mb-4  description " >
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default WhyChooseSection
