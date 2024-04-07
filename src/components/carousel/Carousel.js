import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';

const CarouselComponent = () => {
    // eslint-disable-next-line
 const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Dummy image URLs
  const images = [
    'carousel/1.png',
    'carousel/2.png',
    'carousel/3.png',
    'carousel/4.png',
    'carousel/5.png',
    'carousel/6.png',
    'carousel/7.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='carousel-section'>
        <div className="carousel-container">
      <h2 className="carousel-heading">Photo Gallery</h2>
      <Carousel
        showArrows={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={4000}
        showStatus={false}
        showThumbs={false}
        className="carousel"
      >
        {images.map((imageUrl, index) => (
          <div key={index} className="carousel-item">
            <img src={imageUrl} alt={`Product ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
    </div>
  );
};

export default CarouselComponent;
