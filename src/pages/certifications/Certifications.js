// Certifications.js
import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    { name: 'FSSAI Certificate', image: 'certification1.png' },
    { name: 'Assam Startup', image: 'certification2.png' },
    { name: 'GST', image: 'certification3.png' },
  ];

  return (
    <div className="certifications">
      <h2 className="certifications-title">Our Certifications</h2>
      <div className="certifications-list">
        {certifications.map((certification, index) => (
          <div key={index} className="certification-item">
            <img src={`images/${certification.image}`} alt={certification.name} />
            <h3 className="certification-name">{certification.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
