import React, { useState } from 'react';
import './Navbar.css';
import navlogo from '../Assets/nav-logo.png';
import navprofileIcon from '../Assets/nav-profile.svg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={navlogo} className="nav-logo" alt="Logo" />
        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <h3> Admin Pannel </h3>
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
        <img src={navprofileIcon} className="nav-profile" alt="Profile" />
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
