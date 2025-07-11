import React, { useEffect, useRef } from 'react';

const services = [
  { icon: '📧', title: 'Email Marketing & Automation' },
  { icon: '💬', title: 'WhatsApp Marketing' },
  { icon: '▶️', title: 'YouTube Channel Management' },
  { icon: '🛡️', title: 'Online Reputation Management (ORM)' },
  { icon: '📅', title: 'Event & Campaign Promotions' },
];

const AdditionalServices = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 20;
      const y = (e.clientY - top - height / 2) / 20;
      container.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    };

    const resetTransform = () => {
      container.style.transform = `rotateY(0deg) rotateX(0deg)`;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', resetTransform);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', resetTransform);
    };
  }, []);

  return (
    <section className="additional-section">
      <div className="container tilt-container" ref={containerRef}>
        <h2 className="section-title">
          <span role="img" aria-label="target">🎯</span> Additional <span className="highlight">Services</span>
        </h2>
        <p className="section-subtitle">
          Expand your digital presence with our specialized add-on services
        </p>
        <div className="service-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;
