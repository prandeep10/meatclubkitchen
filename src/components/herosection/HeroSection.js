// HeroSection.js
import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import Preloader from '../preloader/Preloader';

const HeroSection = () => {
  const [images] = useState([
    'image2.png',
    'image1.png',
    'image4.png',
    'image3.png'
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasLoadedBefore = localStorage.getItem('hasLoadedBefore');
    if (hasLoadedBefore) {
      setLoading(false);
    } else {
      localStorage.setItem('hasLoadedBefore', 'true');
    }

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [images.length]);

  return (
    <>
      {loading && <Preloader/>}
      {!loading && (
        <div className="hero-section">
          <div className='bg'>
          </div>
          <div className="hero-content">
            <h1>Welcome to <span className='brand'>MeatClubKitchen</span></h1>
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
            <a href='https://www.zomato.com/guwahati/meat-club-kitchen-maligaon' target='_black' rel="noopener noreferrer">
              <button className="order-now-button">Order Now</button>
            </a>
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
      )}
    </>
  );
};

export default HeroSection;
