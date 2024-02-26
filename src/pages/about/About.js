// About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h2>About Us</h2>
          <p>Welcome to MeatClubKitchen, where we bring together the flavors of the world to create an unforgettable dining experience.</p>
          
          <div className="about-image">
          <img src='logo_rough.jpg' alt="About Us" />
        </div>

          <h3>Our Story</h3>
          <p>Founded in 2010, MeatClubKitchen started as a small family-owned restaurant in the heart of the city. Over the years, we have grown into a beloved establishment, known for our commitment to quality and hospitality.</p>
          
          <h3>Our Cuisine</h3>
          <p>At MeatClubKitchen, we specialize in a variety of cuisines, from traditional comfort foods to innovative fusion dishes. Our menu is carefully curated to satisfy every palate, with options ranging from juicy steaks to fresh seafood and vegetarian delights.</p>
          
          <h3>Our Philosophy</h3>
          <p>At the core of our philosophy is a dedication to sourcing the finest ingredients and preparing them with skill and care. We believe in creating dishes that not only tantalize the taste buds but also nourish the body and soul.</p>
          
          <h3>Visit Us</h3>
          <p>We invite you to dine with us and experience the warmth and hospitality that MeatClubKitchen is known for. Whether you're celebrating a special occasion or simply craving a delicious meal, we look forward to welcoming you.</p>
          
          <p>For reservations or inquiries, please contact us at <a href="tel:+123456789">+1 (234) 567-89</a> or email us at <a href="mailto:info@meatclubkitchen.com">info@meatclubkitchen.com</a>.</p>
        </div>

      </div>
    </div>
  );
};

export default About;
