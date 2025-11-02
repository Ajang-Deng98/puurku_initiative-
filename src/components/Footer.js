import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Heart, Leaf, Users, Award } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            {/* Organization Info */}
            <div className="footer-section">
              <div className="footer-logo">
                <h3>PuurKu Initiative</h3>
                <p>Growing Together in Hope</p>
              </div>
              <p className="footer-description">
                Empowering South Sudanese refugees through AI-powered sustainable agriculture, 
                digital innovation, and community development in Northern Uganda.
              </p>
              <div className="footer-stats">
                <div className="stat-item">
                  <Users size={16} />
                  <span>2,500+ Families</span>
                </div>
                <div className="stat-item">
                  <Leaf size={16} />
                  <span>1,250 Tons CO2</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/agriculture">Agriculture Hub</Link></li>
                <li><Link to="/impact">Impact & Results</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Programs */}
            <div className="footer-section">
              <h4>Our Programs</h4>
              <ul className="footer-links">
                <li><a href="#ai-farming">AI-Powered Farming</a></li>
                <li><a href="#women-empowerment">Women Empowerment</a></li>
                <li><a href="#youth-training">Youth Training</a></li>
                <li><a href="#sustainability">Sustainability</a></li>
                <li><a href="#digital-tools">Digital Tools</a></li>
                <li><a href="#market-access">Market Access</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4>Contact Information</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <MapPin size={16} />
                  <div>
                    <span>Nyumanzi & Ayilo Settlements</span>
                    <span>Northern Uganda</span>
                  </div>
                </div>
                <div className="contact-item">
                  <Mail size={16} />
                  <div>
                    <span>e.ajangchol@gmail.com</span>
                  </div>
                </div>
                <div className="contact-item">
                  <Phone size={16} />
                  <div>
                    <span>+256769341992</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter & Social */}
            <div className="footer-section">
              <h4>Stay Connected</h4>
              <p>Subscribe to our newsletter for updates on our agricultural innovations and impact.</p>
              <div className="newsletter">
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
              </div>
              <div className="social-media">
                <a href="https://facebook.com/puurku" aria-label="Facebook"><Facebook size={20} /></a>
                <a href="https://twitter.com/puurku" aria-label="Twitter"><Twitter size={20} /></a>
                <a href="https://instagram.com/puurku" aria-label="Instagram"><Instagram size={20} /></a>
                <a href="https://linkedin.com/company/puurku" aria-label="LinkedIn"><Linkedin size={20} /></a>
                <a href="https://youtube.com/@puurku" aria-label="YouTube"><Youtube size={20} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="footer-bottom-left">
              <p>&copy; 2024 PuurKu Initiative. All rights reserved.</p>
              <div className="footer-links-inline">
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
                <a href="#cookies">Cookie Policy</a>
              </div>
            </div>
            <div className="footer-bottom-right">
              <div className="founder-credit">
                <Heart size={14} />
                <span>Founded by Ajang Chol Aguer</span>
              </div>
              <div className="certifications">
                <Award size={14} />
                <span>UN SDG Aligned</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;