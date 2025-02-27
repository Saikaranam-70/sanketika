import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/placements">Placements</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li><strong>Address:</strong> Sanketika Polytechnic College, Visakhapatnam, Andhra Pradesh, India - 530041</li>
            <li><strong>Phone:</strong> +91 123 456 7890</li>
            <li><strong>Email:</strong> info@sanketikapolytechnic.edu</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
             <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sanketika Polytechnic College. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;