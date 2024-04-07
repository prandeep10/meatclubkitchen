import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">      
          <Link to="/" className='brand-name'><img src='meat-club-logo.png' alt='logo'/>MeatClubKitchen </Link>
        </div>
        <div className={isOpen ? "navbar-links-mobile" : "navbar-links"}>
          <Link to="/" onClick={closeNavbar}>Home</Link>
          <Link to="/menu" onClick={closeNavbar}>Menu</Link>
          <Link to="/about" onClick={closeNavbar}>About</Link>
          <Link to="/contact" onClick={closeNavbar}>Contact</Link>
          <Link to="/certifications" onClick={closeNavbar}>Certifications</Link>
          <Link to="/more" onClick={closeNavbar}>More of us</Link>
        </div>
        <div className="navbar-view-menu">
          <Link to="/menu" onClick={closeNavbar} className='menu-btn'>View Menu</Link>
        </div>
        <div className="navbar-toggle">
          <button onClick={toggleNavbar}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
