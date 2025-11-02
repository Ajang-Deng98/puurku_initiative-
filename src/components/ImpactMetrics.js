import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Award } from 'lucide-react';
import { impactMetrics } from '../data/agricultureData';
import './ImpactMetrics.css';

const ImpactMetrics = () => {
  const icons = [Users, TrendingUp, DollarSign, Award];

  return (
    <section id="impact" className="impact-metrics">
      <div className="container">
        <h2>Our Impact</h2>
        <div className="metrics-grid">
          {impactMetrics.map((metric, index) => {
            const Icon = icons[index];
            return (
              <motion.div 
                key={metric.metric}
                className="metric-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="metric-icon">
                  <Icon size={32} />
                </div>
                <div className="metric-content">
                  <h3>{metric.value}{metric.metric.includes('Increase') || metric.metric.includes('Growth') ? '%' : '+'}</h3>
                  <p>{metric.metric}</p>
                  <div className="growth-indicator">
                    <TrendingUp size={16} />
                    <span>+{metric.growth}% this year</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="impact-stories">
          <h3>Success Stories</h3>
          <div className="stories-grid">
            <div className="story-card">
              <h4>Maria's Transformation</h4>
              <p>"Through PuurKu's training, I increased my maize yield by 400%. Now I can feed my family and sell surplus at the market."</p>
              <span className="story-location">Nyumanzi Settlement</span>
            </div>
            <div className="story-card">
              <h4>Youth Cooperative Success</h4>
              <p>"Our youth group now manages 5 hectares of demonstration gardens, training 200+ families in sustainable farming."</p>
              <span className="story-location">Ayilo Settlement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;