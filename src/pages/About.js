import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const milestones = [
    { year: '2020', title: 'PuurKu Initiative Founded', description: 'Ajang Chol Aguer establishes the initiative in response to food insecurity in refugee settlements.' },
    { year: '2021', title: 'First Demonstration Gardens', description: 'Established 5 community learning farms in Nyumanzi and Ayilo settlements.' },
    { year: '2022', title: 'Women Empowerment Program', description: 'Launched comprehensive training programs for 500+ women in sustainable agriculture.' },
    { year: '2023', title: 'Youth Leadership Initiative', description: 'Developed agribusiness training programs for refugee youth, creating future community leaders.' }
  ];

  const values = [
    { title: 'Sustainability', description: 'Farming practices that protect the environment while ensuring long-term food security.' },
    { title: 'Community', description: 'Collaborative approaches that bring communities together around shared agricultural goals.' },
    { title: 'Empowerment', description: 'Providing tools and knowledge for self-reliance and economic independence.' },
    { title: 'Innovation', description: 'Modern techniques while respecting traditional knowledge and cultural practices.' }
  ];

  const team = [
    { name: 'Ajang Chol Aguer', role: 'Founder & Executive Director', bio: 'Visionary leader dedicated to refugee empowerment through sustainable agriculture.' },
    { name: 'Dr. Sarah Akello', role: 'Agricultural Director', bio: 'PhD in Sustainable Agriculture with 15+ years experience in East African farming systems.' },
    { name: 'James Mabior', role: 'Community Coordinator', bio: 'South Sudanese refugee and community leader, bridging cultural understanding and program implementation.' },
    { name: 'Mary Atyang', role: 'Women\'s Program Manager', bio: 'Champion of women\'s rights and agricultural education, leading our gender empowerment initiatives.' }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Our Story of Hope and Growth</h1>
            <p>Born from a vision of dignity and self-reliance, PuurKu Initiative transforms agricultural challenges into opportunities for empowerment in refugee communities across Northern Uganda.</p>
            <div className="hero-location">
              <span>Nyumanzi & Ayilo Refugee Settlements, Northern Uganda</span>
            </div>
          </motion.div>
          <div className="hero-image">
            <img src="/images/agriImage3.jpg" alt="Our community working together" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mission-grid">
            <motion.div 
              className="mission-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Our Mission</h2>
              <p>To empower South Sudanese refugees through sustainable agriculture, providing the tools, knowledge, and resources needed to achieve food security and economic independence while preserving dignity and fostering community resilience.</p>
            </motion.div>
            
            <motion.div 
              className="vision-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Our Vision</h2>
              <p>A future where every refugee family can feed themselves with dignity, where communities thrive through sustainable agriculture, and where hope takes root in fertile soil to grow into lasting prosperity and self-reliance.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="story-section">
        <div className="container">
          <h2>The PuurKu Story</h2>
          <p className="section-subtitle">Understanding the journey that led to our agricultural empowerment mission</p>
          <div className="story-content">
            <div className="story-item">
              <h3>The Challenge</h3>
              <p>In Northern Uganda's refugee settlements, thousands of South Sudanese families face daily struggles for food security. Despite possessing generations of agricultural knowledge, they lack access to quality seeds, proper tools, and modern farming techniques.</p>
            </div>
            <div className="story-item">
              <h3>The Inspiration</h3>
              <div className="story-quote">
                <p>"Refugees have the will to farm — but not the means. PuurKu exists to change that."</p>
              </div>
              <p><strong>PuurKu</strong>, meaning "to grow together" in Dinka, embodies our belief that sustainable development happens when communities unite around shared goals.</p>
            </div>
            <div className="story-item">
              <h3>The Solution</h3>
              <p>Founded by Ajang Chol Aguer, PuurKu Initiative bridges the gap between potential and possibility. We provide comprehensive support systems that transform agricultural challenges into opportunities for empowerment and economic growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="milestones-section">
        <div className="container">
          <h2>Our Journey</h2>
          <p className="section-subtitle">Key milestones in our mission to empower refugee communities</p>
          <div className="milestones-grid">
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index}
                className="milestone-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="milestone-year">{milestone.year}</div>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <h2>Our Core Values</h2>
          <p className="section-subtitle">The principles that guide our work and define our approach</p>
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="value-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          <p className="section-subtitle">Dedicated professionals working together to transform lives through sustainable agriculture</p>
          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                className="team-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3>{member.name}</h3>
                <h4>{member.role}</h4>
                <p>{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="impact-stats">
        <div className="container">
          <h2>Our Impact</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">2,500+</span>
              <span className="stat-label">Families Empowered</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">850+</span>
              <span className="stat-label">Women Trained</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">300%</span>
              <span className="stat-label">Yield Increase</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">95%</span>
              <span className="stat-label">Food Security Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Join Our Mission</h2>
            <p>Together, we can transform lives and build sustainable futures. Every contribution, partnership, and act of support helps refugee families grow toward self-sufficiency and dignity.</p>
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

export default About;