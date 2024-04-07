// FeaturedSection.js
import React from 'react';
import './FeaturedSection.css';

const FeaturedSection = () => {
  const featuredItems = [
    { image: 'image2.png', title: 'Lachit Roll', description: 'Lachit Roll' },
    { image: 'image1.png', title: 'Pork Laai Xaak', description: 'Pork with Laai Xaak' },
    { image: 'image4.png', title: 'Chicken Ethinic', description: 'Chicken ethinic masala' },
    { image: 'image3.png', title: 'Chicken Fried Rice', description: 'Chicken FriedRice' }
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
                <a href='https://www.zomato.com/guwahati/meat-club-kitchen-maligaon' target='_black' rel="noopener noreferrer"><button className="item-button">Order Now</button></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
