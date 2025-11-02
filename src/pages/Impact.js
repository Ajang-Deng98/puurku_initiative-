import React from 'react';
import { motion } from 'framer-motion';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import './Impact.css';

const Impact = () => {
  const impactData = [
    { year: '2020', families: 150, income: 45, yield: 120, women: 80 },
    { year: '2021', families: 650, income: 85, yield: 180, women: 220 },
    { year: '2022', families: 1200, income: 125, yield: 240, women: 450 },
    { year: '2023', families: 1850, income: 165, yield: 285, women: 680 },
    { year: '2024', families: 2500, income: 180, yield: 300, women: 850 }
  ];

  const achievements = [
    { title: 'Food Security', stat: '95%', description: 'Families now food secure through improved farming techniques and crop yields.' },
    { title: 'Economic Growth', stat: '$450', description: 'Average monthly income increase through agricultural surplus and market access.' },
    { title: 'Community Development', stat: '25', description: 'Farmer cooperatives established across refugee settlements.' },
    { title: 'Women Empowerment', stat: '850+', description: 'Women trained in advanced agricultural techniques and leadership.' }
  ];

  const stories = [
    {
      name: 'Maria Akech',
      location: 'Nyumanzi Settlement',
      story: 'Before PuurKu, my family survived on one meal a day. Through their training program, I learned modern farming techniques and received quality seeds. Now I harvest enough maize to feed my family and sell surplus at the market.',
      impact: '400% increase in crop yield'
    },
    {
      name: 'John Deng',
      location: 'Ayilo Settlement',
      story: 'As a young refugee, I felt hopeless about my future. PuurKu\'s youth program taught me agribusiness skills and leadership. Today, I manage a 10-hectare demonstration farm and train other young people.',
      impact: 'Trained 150+ youth farmers'
    },
    {
      name: 'Grace Nyandeng',
      location: 'Nyumanzi Settlement',
      story: 'The women\'s cooperative changed everything. We learned to work together, share resources, and support each other. Our group now manages seed distribution for the entire settlement.',
      impact: 'Led 50-member cooperative'
    }
  ];

  return (
    <div className="impact-page">
      {/* Hero Section */}
      <section className="impact-hero">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Measuring Real Impact</h1>
            <p>See how PuurKu Initiative is creating lasting change in refugee communities through data-driven agricultural empowerment and sustainable development programs.</p>
          </motion.div>
          <div className="hero-image">
            <img src="/images/ariImage4.jpg" alt="Impact of our agricultural programs" />
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="metrics-section">
        <div className="container">
          <h2>Our Growing Impact</h2>
          <p className="section-subtitle">Transforming lives through sustainable agriculture and community empowerment</p>
          <div className="metrics-grid">
            <div className="metric-card">
              <span className="metric-number">2,500+</span>
              <span className="metric-label">Families Empowered</span>
            </div>
            <div className="metric-card">
              <span className="metric-number">300%</span>
              <span className="metric-label">Average Yield Increase</span>
            </div>
            <div className="metric-card">
              <span className="metric-number">850+</span>
              <span className="metric-label">Women Trained</span>
            </div>
            <div className="metric-card">
              <span className="metric-number">95%</span>
              <span className="metric-label">Food Security Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Chart */}
      <section className="growth-section">
        <div className="container">
          <h2>Growth Over Time</h2>
          <p className="section-subtitle">Tracking our progress in empowering refugee families</p>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={impactData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="families" stroke="#2f855a" fill="#c6f6d5" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="achievements-section">
        <div className="container">
          <h2>Key Achievements</h2>
          <p className="section-subtitle">Comprehensive impact across multiple areas of development</p>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index}
                className="achievement-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="achievement-stat">{achievement.stat}</div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="stories-section">
        <div className="container">
          <h2>Stories of Transformation</h2>
          <p className="section-subtitle">Behind every statistic is a human story of resilience and hope</p>
          <div className="stories-grid">
            {stories.map((story, index) => (
              <motion.div 
                key={index}
                className="story-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="story-header">
                  <div className="story-info">
                    <h3>{story.name}</h3>
                    <p className="story-location">{story.location}</p>
                  </div>
                </div>
                <blockquote className="story-quote">"{story.story}"</blockquote>
                <div className="story-impact">
                  <span>{story.impact}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="goals-section">
        <div className="container">
          <h2>Our 2025 Goals</h2>
          <p className="section-subtitle">Ambitious targets for expanding our impact</p>
          <div className="goals-grid">
            <div className="goal-card">
              <div className="goal-progress">
                <div className="progress-circle">
                  <span>75%</span>
                </div>
              </div>
              <h3>5,000 Families</h3>
              <p>Reach 5,000 refugee families with comprehensive agricultural support by end of 2025.</p>
            </div>
            <div className="goal-card">
              <div className="goal-progress">
                <div className="progress-circle">
                  <span>60%</span>
                </div>
              </div>
              <h3>Agricultural Center</h3>
              <p>Complete construction of the Refugee Agricultural Empowerment Center for permanent training facilities.</p>
            </div>
            <div className="goal-card">
              <div className="goal-progress">
                <div className="progress-circle">
                  <span>45%</span>
                </div>
              </div>
              <h3>1,500 Women Leaders</h3>
              <p>Train 1,500 women in advanced agricultural techniques and cooperative management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="impact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Be Part of This Impact</h2>
            <p>Every contribution multiplies our impact. Join us in creating lasting change that transforms lives and builds sustainable futures for refugee communities.</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn-primary">Support Our Work</a>
              <a href="/agriculture" className="btn-secondary">See Our Programs</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;