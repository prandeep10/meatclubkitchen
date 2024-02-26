// HeroSection.js
import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [images] = useState([
    'image1.png',
    'image4.jpg',
    'image3.png'
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Welcome to MeatClubKitchen</h1>
        <p>Northeast's first urban ethinic cloud kitchen.</p>
        <div className="review-section">
          <div className="star-rating">
            <span className="rating">4.5</span>
            <div className="stars">
              {[1, 2, 3, 4, 5].map((index) => (
                <span key={index} className={index <= 4.5 ? 'filled' : 'empty'}>&#9733;</span>
              ))}
            </div>
            <span className="num-reviews">(150 reviews)</span>
          </div>
        </div>
        <button className="order-now-button">Order Now</button>
      </div>
      <div className="hero-image">
        <img src={`images/${images[currentImageIndex]}`} alt="Hero" />
        <div className="thumb">
          {images.map((image, index) => (
            <img
              key={index}
              src={`images/${image}`}
              alt={`Thumb ${index + 1}`}
              onClick={() => setCurrentImageIndex(index)}
              className={currentImageIndex === index ? 'active' : ''}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
