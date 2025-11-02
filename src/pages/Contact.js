import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
    type: 'general'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = `PuurKu Initiative - ${formData.type.charAt(0).toUpperCase() + formData.type.slice(1)} Inquiry`;
    const body = `Name: ${formData.name}\n` +
                 `Email: ${formData.email}\n` +
                 `Organization: ${formData.organization || 'N/A'}\n` +
                 `Inquiry Type: ${formData.type}\n\n` +
                 `Message:\n${formData.message}`;
    
    const mailtoLink = `mailto:e.ajangchol@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const partnerships = [
    {
      title: 'Financial Support',
      description: 'Fund our programs and help us reach more families with sustainable agriculture solutions.',
      impact: 'Direct impact on community empowerment'
    },
    {
      title: 'Technical Expertise',
      description: 'Share your agricultural knowledge and skills to enhance our training programs.',
      impact: 'Knowledge transfer and capacity building'
    },
    {
      title: 'Equipment Donation',
      description: 'Provide farming tools and equipment to support community agricultural activities.',
      impact: 'Improved farming efficiency and productivity'
    },
    {
      title: 'Volunteer Program',
      description: 'Join our team and work directly with communities to implement agricultural programs.',
      impact: 'Hands-on community development'
    }
  ];

  const contactInfo = [
    { type: 'Email', value: 'e.ajangchol@gmail.com', description: 'General inquiries and partnerships' },
    { type: 'Phone', value: '+256769341992', description: 'Direct contact for urgent matters' },
    { type: 'Location', value: 'Nyumanzi & Ayilo Refugee Settlements, Northern Uganda', description: 'Our operational areas' }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Get Involved</h1>
            <p>Join us in empowering refugee communities through sustainable agriculture. Every partnership makes a meaningful difference in transforming lives.</p>
          </motion.div>
          <div className="hero-image">
            <img src="/images/agriIamge7.jpg" alt="Community involvement in agriculture" />
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form">
              <h2>Send Us a Message</h2>
              <p className="form-subtitle">We'd love to hear from you and discuss how we can work together</p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Organization (Optional)</label>
                  <input 
                    type="text" 
                    name="organization" 
                    value={formData.organization}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Inquiry Type</label>
                  <select 
                    name="type" 
                    value={formData.type}
                    onChange={handleChange}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="donation">Donation</option>
                    <option value="volunteer">Volunteer</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea 
                    name="message" 
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary">
                  Send Email
                </button>
              </form>
            </div>

            <div className="contact-info">
              <h2>Contact Information</h2>
              <p className="info-subtitle">Reach out to us through any of these channels</p>
              {contactInfo.map((info, index) => (
                <div key={index} className="info-item">
                  <div>
                    <h3>{info.type}</h3>
                    <p className="info-value">{info.value}</p>
                    <p className="info-description">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="partnership-section">
        <div className="container">
          <h2>Partnership Opportunities</h2>
          <p className="section-subtitle">Multiple ways to support our mission and create lasting impact</p>
          <div className="partnership-grid">
            {partnerships.map((partnership, index) => (
              <motion.div 
                key={index}
                className="partnership-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3>{partnership.title}</h3>
                <p>{partnership.description}</p>
                <div className="impact-note">
                  <span>{partnership.impact}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="contact-impact">
        <div className="container">
          <h2>Why Partner With Us</h2>
          <div className="impact-stats">
            <div className="stat-card">
              <span className="stat-number">2,500+</span>
              <span className="stat-label">Families Reached</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">300%</span>
              <span className="stat-label">Yield Improvement</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">95%</span>
              <span className="stat-label">Success Rate</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">4</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Make a Difference?</h2>
            <p>Join us in transforming lives through sustainable agriculture. Together, we can build stronger, more resilient communities.</p>
            <div className="cta-buttons">
              <a href="/about" className="btn-primary">Learn More About Us</a>
              <a href="/impact" className="btn-secondary">See Our Impact</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;