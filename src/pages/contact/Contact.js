// Contact.js
import React from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <div className="info-item">
          <FaMapMarkerAlt className="icon" />
          <p>Jalukbari, AEC-Road, Guwahati-13</p>
        </div>
        <div className="info-item">
          <FaPhone className="icon" />
          <p>
          8822944041 ( Jalukbari ) <br/>
9707989981 ( jalukbari )<br/>
6001215422 ( Beltola )
          </p>
        </div>
        <div className="info-item">
          <FaEnvelope className="icon" />
          <p>meatclubkitchen.official@gmail.com</p>
        </div>
      </div>
      <div className="social-media">
        <h2>Follow us on Social Media</h2>
        <div className="social-icons">
        <a href='https://www.instagram.com/meatclubkitchen?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank' rel="noopener noreferrer"><FaInstagram className="icon instagram" /></a>
          <a href='https://www.instagram.com/meatclubkitchen?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank' rel="noopener noreferrer"><FaFacebookF className="icon facebook" /></a>
          <a href='https://www.instagram.com/meatclubkitchen?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank' rel="noopener noreferrer"><FaTwitter className="icon twitter" /></a>
       
        </div>
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
