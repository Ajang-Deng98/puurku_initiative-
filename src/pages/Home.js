import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ImageGallery from '../components/ImageGallery';
import './Home.css';

const Home = () => {
  const innovations = [
    { title: 'AI-Powered Farming', desc: 'Machine learning crop recommendations for optimal yields' },
    { title: 'Solar Irrigation', desc: 'Renewable energy water systems for sustainable farming' },
    { title: 'Blockchain Traceability', desc: 'Transparent supply chain tracking from farm to market' },
    { title: 'Carbon Sequestration', desc: '1,250 tons CO2 captured annually through regenerative practices' }
  ];

  const sdgGoals = [
    { number: 1, title: 'No Poverty', progress: 78 },
    { number: 2, title: 'Zero Hunger', progress: 85 },
    { number: 5, title: 'Gender Equality', progress: 72 },
    { number: 13, title: 'Climate Action', progress: 89 }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-home">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>PuurKu Initiative</h1>
            <h2>Growing Together in Hope</h2>
            <p>Transforming refugee agriculture through AI-powered solutions, sustainable innovation, and community empowerment in Northern Uganda.</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">2,500+</span>
                <span className="stat-label">Families Empowered</span>
              </div>
              <div className="stat">
                <span className="stat-number">300%</span>
                <span className="stat-label">Yield Increase</span>
              </div>
              <div className="stat">
                <span className="stat-number">1,250</span>
                <span className="stat-label">Tons CO2 Sequestered</span>
              </div>
            </div>
            <div className="hero-buttons">
              <Link to="/about" className="btn-primary">
                Our Story
              </Link>
              <Link to="/contact" className="btn-secondary">Join Our Mission</Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="/images/agriImage.jpg" 
              alt="Farmers actively planting and cultivating crops" 
              className="hero-image-large"
            />
          </motion.div>
        </div>
      </section>

      {/* Innovation Showcase */}
      <section className="innovation-showcase">
        <div className="container">
          <motion.div 
            className="innovation-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Leading Agricultural Innovation</h2>
            <p className="innovation-subtitle">Pioneering the future of refugee agriculture with cutting-edge technology and sustainable practices</p>
            
            <div className="innovation-grid">
              {innovations.map((item, index) => (
                <motion.div 
                  key={index}
                  className="innovation-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >

                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Overview */}
      <section className="mission-overview">
        <div className="container">
          <motion.div 
            className="mission-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Transforming Lives Through Technology</h2>
            <p className="mission-subtitle">Combining traditional knowledge with modern innovation to create sustainable agricultural solutions</p>
            
            <div className="mission-pillars">
              <div className="pillar">
                <h3>Community-Centered AI</h3>
                <p>Machine learning models trained on local data to provide personalized farming recommendations for refugee communities.</p>
              </div>
              <div className="pillar">
                <h3>Climate-Smart Agriculture</h3>
                <p>Implementing regenerative farming practices that sequester carbon while increasing yields and resilience.</p>
              </div>
              <div className="pillar">
                <h3>Digital Empowerment</h3>
                <p>Providing refugees with smartphones, apps, and digital literacy to access markets and agricultural information.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="sdg-section">
        <div className="container">
          <h2>UN Sustainable Development Goals</h2>
          <p className="sdg-subtitle">Our work directly contributes to achieving global sustainability targets</p>
          <div className="sdg-grid">
            {sdgGoals.map((goal, index) => (
              <motion.div 
                key={index}
                className="sdg-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="sdg-number">SDG {goal.number}</div>
                <h3>{goal.title}</h3>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${goal.progress}%` }}></div>
                </div>
                <span className="progress-text">{goal.progress}% Progress</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="quick-links">
        <div className="container">
          <h2>Explore Our Digital Ecosystem</h2>
          <div className="links-grid">
            <Link to="/agriculture" className="link-card">
              <h3>AI Agriculture Hub</h3>
              <p>Explore our machine learning models, IoT sensors, and precision farming technologies.</p>
            </Link>
            <Link to="/impact" className="link-card">
              <h3>Real-Time Impact</h3>
              <p>Live dashboards showing carbon sequestration, yield improvements, and community growth.</p>
            </Link>
            <Link to="/resources" className="link-card">
              <h3>Digital Resources</h3>
              <p>Access our mobile apps, online training platforms, and digital agricultural tools.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Innovation Timeline */}
      <section className="innovation-timeline">
        <div className="container">
          <h2>Innovation Roadmap 2024-2026</h2>
          <div className="timeline-grid">
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <h3>AI Crop Advisory Launch</h3>
              <p>Deploy machine learning models for personalized farming recommendations</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2025</div>
              <h3>Blockchain Supply Chain</h3>
              <p>Implement transparent tracking from farm to market using distributed ledger technology</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2026</div>
              <h3>Carbon Credit Marketplace</h3>
              <p>Launch platform for refugees to monetize carbon sequestration efforts</p>
            </div>
          </div>
        </div>
      </section>

      <ImageGallery />

      {/* Call to Action */}
      <section className="home-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Join the Agricultural Revolution</h2>
            <p>Be part of the transformation that's reshaping refugee agriculture through innovation, sustainability, and community empowerment.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary-large">Partner With Innovation</Link>
              <Link to="/about" className="btn-secondary-large">Discover Our Impact</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;