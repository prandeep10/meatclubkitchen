// More.js
import React from 'react';
import './More.css';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const More = () => {
  return (
    <div className="more-container">
      <div className="social-media">
        <h2>Follow us on Social Media</h2>
        <div className="social-icons">
          <a href='https://www.instagram.com/meatclubkitchen?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank' rel="noopener noreferrer"><FaInstagram className="icon instagram" /></a>
          <a href='https://www.instagram.com/meatclubkitchen?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank' rel="noopener noreferrer"><FaFacebookF className="icon facebook" /></a>
          <a href='https://www.instagram.com/meatclubkitchen?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank' rel="noopener noreferrer"><FaTwitter className="icon twitter" /></a>
        </div>
      </div>
      <div className="fan-club">
        <h2>Join MeatClubKitchen Fanclub</h2>
        <p>Subscribe to our newsletter for exclusive offers and updates:</p>
        <form className="subscribe-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="catering-services">
        <h2>Take MeatClub Catering Services</h2>
        <p>Contact us for catering inquiries:</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default More;
