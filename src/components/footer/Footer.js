// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Northeast's First Urban Ethinic Cloud Kitchen</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>AEC Road, Jalukbari, Guwahati-13</p>
          <p>(123) 456-7890</p>
          <p>info@example.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 MeatClubKitchen. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
