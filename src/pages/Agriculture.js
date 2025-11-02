import React from 'react';
import { motion } from 'framer-motion';
import './Agriculture.css';

const Agriculture = () => {
  const programs = [
    {
      title: "Sustainable Farming Techniques",
      description: "Training farmers in eco-friendly methods that preserve soil health and increase yields.",
      benefits: ["40% increase in crop yield", "Reduced water usage", "Improved soil fertility"]
    },
    {
      title: "Seed Distribution Program",
      description: "Providing high-quality, climate-adapted seeds to refugee farmers.",
      benefits: ["Disease-resistant varieties", "Higher nutritional value", "Better market prices"]
    },
    {
      title: "Agricultural Training",
      description: "Comprehensive education on modern farming practices and techniques.",
      benefits: ["Hands-on learning", "Expert guidance", "Community knowledge sharing"]
    }
  ];

  const crops = [
    { name: "Maize", yield: "3.2 tons/hectare", season: "March - July" },
    { name: "Beans", yield: "1.8 tons/hectare", season: "April - August" },
    { name: "Cassava", yield: "12 tons/hectare", season: "Year-round" },
    { name: "Sweet Potato", yield: "8 tons/hectare", season: "March - September" },
    { name: "Groundnuts", yield: "2.1 tons/hectare", season: "April - July" },
    { name: "Vegetables", yield: "15 tons/hectare", season: "Year-round" }
  ];

  const techniques = [
    {
      title: "Crop Rotation",
      description: "Alternating different crops to maintain soil health and prevent pest buildup."
    },
    {
      title: "Composting",
      description: "Creating natural fertilizer from organic waste to enrich soil nutrients."
    },
    {
      title: "Water Conservation",
      description: "Efficient irrigation methods to maximize water usage and reduce waste."
    },
    {
      title: "Integrated Pest Management",
      description: "Natural pest control methods that protect crops without harmful chemicals."
    }
  ];

  return (
    <div className="agriculture-page">
      {/* Hero Section */}
      <section className="agriculture-hero">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Sustainable Agriculture Programs</h1>
            <p>Empowering refugee communities through modern farming techniques, quality seeds, and comprehensive agricultural training for food security and economic independence.</p>
          </motion.div>
          <div className="hero-image">
            <img src="/images/agriImage2.jpg" alt="Agricultural training and farming" />
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs-section">
        <div className="container">
          <h2>Our Agricultural Programs</h2>
          <p className="section-subtitle">Comprehensive support for sustainable farming practices</p>
          <div className="programs-grid">
            {programs.map((program, index) => (
              <motion.div 
                key={index}
                className="program-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <div className="benefits-list">
                  <h4>Key Benefits:</h4>
                  <ul>
                    {program.benefits.map((benefit, bIndex) => (
                      <li key={bIndex}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Crops Section */}
      <section className="crops-section">
        <div className="container">
          <h2>Crops We Support</h2>
          <p className="section-subtitle">High-yield, climate-adapted crops for sustainable farming</p>
          <div className="crops-grid">
            {crops.map((crop, index) => (
              <motion.div 
                key={index}
                className="crop-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3>{crop.name}</h3>
                <div className="crop-details">
                  <div className="crop-yield">
                    <span className="label">Average Yield:</span>
                    <span className="value">{crop.yield}</span>
                  </div>
                  <div className="crop-season">
                    <span className="label">Growing Season:</span>
                    <span className="value">{crop.season}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Techniques Section */}
      <section className="techniques-section">
        <div className="container">
          <h2>Sustainable Farming Techniques</h2>
          <p className="section-subtitle">Modern methods for environmental conservation and productivity</p>
          <div className="techniques-grid">
            {techniques.map((technique, index) => (
              <motion.div 
                key={index}
                className="technique-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3>{technique.title}</h3>
                <p>{technique.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <div className="container">
          <h2>Agricultural Impact</h2>
          <div className="impact-stats">
            <motion.div 
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="stat-number">2,500+</span>
              <span className="stat-label">Farmers Trained</span>
            </motion.div>
            <motion.div 
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <span className="stat-number">300%</span>
              <span className="stat-label">Yield Increase</span>
            </motion.div>
            <motion.div 
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="stat-number">5,000</span>
              <span className="stat-label">Hectares Cultivated</span>
            </motion.div>
            <motion.div 
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="stat-number">95%</span>
              <span className="stat-label">Food Security Rate</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="agriculture-gallery">
        <div className="container">
          <h2>Our Work in the Field</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="/images/agriImage3.jpg" alt="Farmers working in fields" />
              <div className="gallery-overlay">
                <p>Training Session in Progress</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/images/ariImage4.jpg" alt="Crop cultivation" />
              <div className="gallery-overlay">
                <p>Sustainable Crop Cultivation</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/images/agriIamge5.jpg" alt="Harvest season" />
              <div className="gallery-overlay">
                <p>Successful Harvest Season</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/images/agriIamge6.jpeg" alt="Community farming" />
              <div className="gallery-overlay">
                <p>Community Farming Initiative</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="agriculture-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Join Our Agricultural Mission</h2>
            <p>Help us expand sustainable farming practices and empower more refugee communities through agriculture.</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn-primary">Partner With Us</a>
              <a href="/impact" className="btn-secondary">See Our Impact</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agriculture;