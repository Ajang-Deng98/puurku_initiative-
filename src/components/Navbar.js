import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src="/images/puurku logo.png" alt="PuurKu Initiative" className="logo-image" />
        </Link>
        
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/agriculture" className={location.pathname === '/agriculture' ? 'active' : ''} onClick={() => setIsOpen(false)}>Agriculture</Link></li>
          <li><Link to="/impact" className={location.pathname === '/impact' ? 'active' : ''} onClick={() => setIsOpen(false)}>Impact</Link></li>
          <li><Link to="/resources" className={location.pathname === '/resources' ? 'active' : ''} onClick={() => setIsOpen(false)}>Resources</Link></li>
          <li><Link to="/contact" className="cta-btn" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
        
        <button className="mobile-menu" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;