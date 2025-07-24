import {React,useState} from "react";

const serviceSection = {
  "Social Media Marketing": [
    {
      id: 1,
      category: "Social Media Marketing (SMM)",
      title: "Platform management: Instagram, Facebook, YouTube, LinkedIn.",
      lessons: '⭐Content creation: Reels, posts, stories, videos',
      students: '⭐Ad campaigns to boost brand visibility & engagement',
      url: "https://www.big-red-digital.com/images/blogimages/social-media-networks.jpg",
      instructor: "⭐Audience targeting, retargeting, and lead generation",
    },
    {
      id: 2,
      title: "On-page & off-page SEO to improve Google rankings.",
      category: "Search Engine Optimization (SEO)",
      lessons: '⭐Keyword research, content optimization, and link building',
      students: '⭐Local SEO for location-based businesses (Google My Business)',
      url: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=512&q=60",
      instructor: "⭐Ashton McBride",
    },
  ],
  "Paid Ads & PPC": [
    {
      id: 3,
      title: "Search ads, Display ads, YouTube video ads, and Shopping ads.",
      category: "Google Ads (PPC)",
      lessons: '⭐ROI-focused campaigns for traffic, leads & sales',
      students: '⭐Keyword targeting, A/B testing, and analytics tracking',
      url: "https://masterwebwork.com/wp-content/uploads/2023/06/google-ads.jpg",
      instructor: "⭐Budget optimization for small & large businesses",
    },
    {
      id: 4,
      title: "Custom audience targeting for maximum reach.",
      category: "Meta Ads (Facebook & Instagram)",
      lessons: '⭐Conversion-focused ads: lead gen, traffic, brand awareness',
      students: '⭐Visual ad design, copywriting, and analytics',
      url: "https://www.smartsites.com/media/facebook-instagram.jpg",
      instructor: "⭐Integration with landing pages and WhatsApp/CRM",
    },
  ],
  "Web & Content Services": [
    {
      id: 5,
      title: "Mobile-friendly, SEO-optimized websites.",
      category: "Website Design & Development",
      lessons: '⭐Landing pages for campaigns & lead funnels',
      students: '⭐E-commerce websites with payment gateway integration',
      url: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=512&q=60",
      instructor: "⭐Speed-optimized, secure, and user-friendly designs",
    },
    {
      id: 6,
      title: "Blog writing, SEO articles, video content & scripts.",
      category: "Content Marketing",
      lessons: '⭐Brand storytelling to build authority & trust',
      students: '⭐Monthly content calendars and campaign themes',
      url: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=512&q=60",
      instructor: "⭐Long-form and short-form content creation",
    },
  ],
  "Creative & Branding": [
    {
      id: 7,
      title: "Collaboration with niche influencers across Instagram & YouTube.",
      category: "Influencer Marketing",
      lessons: '⭐Campaign planning, negotiation & reporting',
      url: "https://www.socialpilot.co/wp-content/uploads/2024/02/Influencer-Marketing-Statistics.jpg",
      instructor: "⭐Micro and macro influencer tie-ups for better engagement",
    },
    {
      id: 8,
      title: "Logo design, brand kits, brochures, pitch decks.",
      category: "Branding & Design",
      lessons: '⭐Ad creatives, social media posts, and video edits',
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=512&q=60",
      instructor: "⭐Consistent visual identity across digital platforms",
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
        <div className="course-meta-item">
          {service.students}
        </div>
        <div className="course-meta-item">
          {service.lessons}
        </div>
        <div className="course-meta-item">
          {service.instructor}
        </div>
      </div>
    </div>
  </div>
);

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('Social Media Marketing');

  return (
    <div id='services'>
      <div className="courses-container" id='social'>
        <h2 className="services-title">Our Core Services</h2>

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
