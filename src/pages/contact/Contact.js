// Contact.js
import React from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <div className="contact-detail">
          <FaMapMarkerAlt className="icon" />
          <p>Jalukbari, AEC Road, Guwahati-13</p>
        </div>
        <div className="contact-detail">
          <FaPhone className="icon" />
          <p>(123) 456-7890</p>
        </div>
        <div className="contact-detail">
          <FaEnvelope className="icon" />
          <p>info@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
