import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">PuurKu Initiative</h1>
          <h2 className="hero-subtitle">Growing Together in Hope</h2>
          <p className="hero-description">Empowering refugees through sustainable agriculture and food security in Northern Uganda.</p>
          <div className="hero-buttons">
            <a href="#about" className="btn-primary">Learn More</a>
            <a href="#contact" className="btn-secondary">Join Us</a>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src="/images/agriImage.jpg" 
            alt="Farmers planting crops and cultivating land"
            className="hero-main-image"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;