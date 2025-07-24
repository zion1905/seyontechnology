import React from 'react';
import founderImage from '../assets/founder.png'; // Adjust your path

const FounderSection = () => {
  return (
    <div className="founder-wrapper">
      <div className="founder-container">
        <div className="founder-image-wrap">
          <img src={founderImage} alt="Mr. Seyon" className="founder-img" />
        </div>

        <div className="founder-text">
          <h2 className="founder-title">
            Meet Our <span className='founder-highlight'>Founder</span>
          </h2>
          <h3 className="founder-name">Mr. SATHISH ARUMUGAM</h3>
          <p className="founder-role">👨‍🏫 Founder, Digital Marketing Specialist & Trainer</p>
          <p className="founder-bio">
            With a passion for innovation and a deep understanding of the digital landscape, Mr. SATHISH ARUMUGAM leads our team to deliver exceptional results. His expertise in crafting data-driven strategies and training future marketers sets SEYON TECHNOLOGY apart.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FounderSection;
