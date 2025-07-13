import React, { useState } from 'react';

const serviceSection = {
  "Social Media Marketing": [
    {
      id: 1,
      category: "Social Media Marketing (SMM)",
      title: "Platform management: Instagram, Facebook, YouTube, LinkedIn.",
      lessons: 'Content creation: Reels, posts, stories, videos',
      students: 'Ad campaigns to boost brand visibility & engagement',
      url: "https://pngimg.com/d/share_PNG31.png", // Social media icon
      instructor: "Audience targeting, retargeting, and lead generation",
    },
    {
      id: 2,
      title: "On-page & off-page SEO to improve Google rankings.",
      category: "Search Engine Optimization (SEO)",
      lessons: 'Keyword research, content optimization, and link building',
      students: 'Local SEO for location-based businesses (Google My Business)',
      url: "https://cdn-icons-png.flaticon.com/512/3500/3500833.png", // SEO icon
      instructor: "Ashton McBride",
    },
  ],
  "Paid Ads & PPC": [
    {
      id: 3,
      title: "Search ads, Display ads, YouTube video ads, and Shopping ads.",
      category: "Google Ads (PPC)",
      lessons: 'ROI-focused campaigns for traffic, leads & sales',
      students: 'Keyword targeting, A/B testing, and analytics tracking',
      url: "https://cdn-icons-png.flaticon.com/512/1161/1161807.png", // Ads icon
      instructor: "Budget optimization for small & large businesses",
    },
    {
      id: 4,
      title: "Custom audience targeting for maximum reach.",
      category: "Meta Ads (Facebook & Instagram)",
      lessons: 'Conversion-focused ads: lead gen, traffic, brand awareness',
      students: 'Visual ad design, copywriting, and analytics',
      url: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png", // Meta icon
      instructor: "Integration with landing pages and WhatsApp/CRM",
    },
  ],
  "Web & Content Services": [
    {
      id: 5,
      title: "Mobile-friendly, SEO-optimized websites.",
      category: "Website Design & Development",
      lessons: 'Landing pages for campaigns & lead funnels',
      students: 'E-commerce websites with payment gateway integration',
      url: "https://cdn-icons-png.flaticon.com/512/2721/2721283.png", // Website icon
      instructor: "Speed-optimized, secure, and user-friendly designs",
    },
    {
      id: 6,
      title: "Blog writing, SEO articles, video content & scripts.",
      category: "Content Marketing",
      lessons: 'Brand storytelling to build authority & trust',
      students: 'Monthly content calendars and campaign themes',
      url: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // Content icon
      instructor: "Long-form and short-form content creation",
    },
  ],
  "Creative & Branding": [
    {
      id: 7,
      title: "Collaboration with niche influencers across Instagram & YouTube.",
      category: "Influencer Marketing",
      lessons: 'Campaign planning, negotiation & reporting',
      url: "https://media.istockphoto.com/id/1026485104/vector/community-network-and-social-icon.jpg?s=612x612&w=0&k=20&c=Kb_X-ZvcQYDmOtzoKtUDpIszcUWpLyDihCKzXJ1Hy-U=", // Influencer image
      instructor: "Micro and macro influencer tie-ups for better engagement",
    },
    {
      id: 8,
      title: "Logo design, brand kits, brochures, pitch decks.",
      category: "Branding & Design",
      lessons: 'Ad creatives, social media posts, and video edits',
      url: "https://cdn-icons-png.flaticon.com/512/1034/1034131.png", // Design icon
      instructor: "Consistent visual identity across digital platforms",
    },
  ],
};

const ServiceCard = ({ service }) => (
 
  <div className="course-card">
    <img src={service.url} alt={service.title} className="course-image" />
    <div className="course-content">
      <span className="course-category">{service.category}</span>
      <h3 className="course-title">{service.title}</h3>
      <div className="course-meta">

        <span> *{service.students}</span>
        <span>* {service.lessons}</span>
        <span>* {service.instructor}</span>

      </div>
    </div>
  </div>
);

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('Social Media Marketing');

  return (
    <div id='services'>
    <div className="courses-container" id='social'>
      {/* Section Title */}
      <h2 className="services-title">Our Core Services</h2>

      {/* Tabs */}
      <div className="tabs">
        {Object.keys(serviceSection).map((category) => (
          <button
            key={category}
            className={`tab-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="card-grid">
        {serviceSection[selectedCategory].map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Services;
