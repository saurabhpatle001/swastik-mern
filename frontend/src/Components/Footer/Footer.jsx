import React from 'react';
import './Footer.css';

import footer_logo from '../Assets/logo.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pinterest_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Logo Section */}
      <div className="footer-logo">
        <img src={footer_logo} alt="Swastik Logo" className="footer-logo-img" />
        <p className="footer-brand-name">SWASTIK</p>
      </div>

      {/* Navigation Links */}
      <ul className="footer-links">
        <li><a href="#company">Company</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#offices">Offices</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Social Media Icons */}
      <div className="footer-social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <img src={instagram_icon} alt="Instagram" />
        </a>
        <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <img src={pinterest_icon} alt="Pinterest" />
        </a>
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <img src={whatsapp_icon} alt="WhatsApp" />
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <hr className="footer-divider" />
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} SWASTIK. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
