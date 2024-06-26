// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <img src='meat-club-logo.png' alt='logo'/>
          <p>Northeast's First Urban Ethinic Cloud Kitchen</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>AEC Road, Jalukbari, Guwahati-13</p>
          <p>+91-8822944041</p>
          <p>meatclubkitchen.official@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 MeatClubKitchen. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
