// FeaturedSection.js
import React from 'react';
import './FeaturedSection.css';

const FeaturedSection = () => {
  const featuredItems = [
    { image: 'image1.png', title: 'Lachit Roll', description: 'Lachit Roll' },
    { image: 'image3.png', title: 'Python Roll', description: 'Python Roll' },
    { image: 'image4.jpg', title: 'Pork Thali', description: 'Pork Thali' }
  ];

  return (
    <div className="featured-section">
      <div className="container">
        <h2 className="section-title">Popular Dishes</h2>
        <div className="featured-items">
          {featuredItems.map((item, index) => (
            <div key={index} className="featured-item">
              <img src={`images/${item.image}`} alt={item.title} />
              <div className="item-content">
                <h3 className="item-title">{item.title}</h3>
                <p className="item-description">{item.description}</p>
                <button className="item-button">Order Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
