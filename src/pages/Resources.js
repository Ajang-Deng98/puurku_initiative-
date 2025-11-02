import React from 'react';
import { motion } from 'framer-motion';
import './Resources.css';

const Resources = () => {
  const resources = [
    {
      title: 'Seed Bank Program',
      description: 'Access to high-quality, climate-adapted seeds for sustainable farming and improved crop yields.',
      benefits: ['Disease-resistant varieties', 'Higher nutritional value', 'Better market prices', 'Climate adaptation']
    },
    {
      title: 'Equipment Sharing',
      description: 'Community-owned farming tools and equipment for efficient cultivation and processing.',
      benefits: ['Modern farming tools', 'Shared maintenance costs', 'Training on equipment use', 'Increased productivity']
    },
    {
      title: 'Training Materials',
      description: 'Educational resources in local languages for skill development and knowledge transfer.',
      benefits: ['Multi-language resources', 'Visual learning aids', 'Practical guides', 'Digital access']
    }
  ];

  const programs = [
    {
      title: 'Basic Farming Techniques',
      duration: '2 weeks',
      language: 'Dinka, Arabic, English',
      description: 'Fundamental agricultural practices for new farmers including soil preparation, planting, and basic crop care.'
    },
    {
      title: 'Sustainable Agriculture',
      duration: '1 month',
      certification: 'Available',
      description: 'Advanced techniques for long-term soil health, water conservation, and integrated pest management.'
    },
    {
      title: 'Women\'s Cooperative Management',
      duration: '3 weeks',
      focus: 'Leadership & Finance',
      description: 'Leadership and business skills for women farmers including cooperative management and financial literacy.'
    },
    {
      title: 'Youth Agricultural Leadership',
      duration: '6 weeks',
      focus: 'Innovation & Technology',
      description: 'Comprehensive program for young farmers covering modern techniques, technology, and leadership skills.'
    }
  ];

  const tools = [
    { name: 'Mobile App', description: 'Agricultural guidance and market prices on your phone' },
    { name: 'Weather Updates', description: 'Real-time weather forecasts for farming decisions' },
    { name: 'Market Prices', description: 'Current crop prices and market demand information' },
    { name: 'Expert Support', description: 'Direct access to agricultural experts and advisors' }
  ];

  return (
    <div className="resources-page">
      {/* Hero Section */}
      <section className="resources-hero">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Agricultural Resources Hub</h1>
            <p>Comprehensive tools, training materials, and resources to support sustainable farming and empower refugee communities through agricultural development.</p>
          </motion.div>
          <div className="hero-image">
            <img src="/images/agriIamge6.jpeg" alt="Agricultural resources and training" />
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="resources-section">
        <div className="container">
          <h2>Our Resources</h2>
          <p className="section-subtitle">Essential tools and materials for successful farming</p>
          <div className="resources-grid">
            {resources.map((resource, index) => (
              <motion.div 
                key={index}
                className="resource-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <div className="benefits-list">
                  <h4>Key Benefits:</h4>
                  <ul>
                    {resource.benefits.map((benefit, bIndex) => (
                      <li key={bIndex}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="programs-section">
        <div className="container">
          <h2>Training Programs</h2>
          <p className="section-subtitle">Comprehensive education for sustainable farming practices</p>
          <div className="programs-grid">
            {programs.map((program, index) => (
              <motion.div 
                key={index}
                className="program-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <div className="program-details">
                  <div className="detail-item">
                    <span className="label">Duration:</span>
                    <span className="value">{program.duration}</span>
                  </div>
                  {program.language && (
                    <div className="detail-item">
                      <span className="label">Languages:</span>
                      <span className="value">{program.language}</span>
                    </div>
                  )}
                  {program.certification && (
                    <div className="detail-item">
                      <span className="label">Certification:</span>
                      <span className="value">{program.certification}</span>
                    </div>
                  )}
                  {program.focus && (
                    <div className="detail-item">
                      <span className="label">Focus:</span>
                      <span className="value">{program.focus}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Tools */}
      <section className="tools-section">
        <div className="container">
          <h2>Digital Tools</h2>
          <p className="section-subtitle">Technology solutions for modern farming</p>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <motion.div 
                key={index}
                className="tool-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="impact-section">
        <div className="container">
          <h2>Resource Impact</h2>
          <div className="impact-stats">
            <div className="stat-card">
              <span className="stat-number">15,000+</span>
              <span className="stat-label">Seeds Distributed</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">500+</span>
              <span className="stat-label">Tools Shared</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">2,500+</span>
              <span className="stat-label">Farmers Trained</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">1,200+</span>
              <span className="stat-label">App Users</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="resources-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Access Our Resources</h2>
            <p>Get the tools and training you need to succeed in sustainable agriculture. Contact us at e.ajangchol@gmail.com or +256769341992 to learn more about our programs and resources.</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn-primary">Get Started</a>
              <a href="/agriculture" className="btn-secondary">View Programs</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;