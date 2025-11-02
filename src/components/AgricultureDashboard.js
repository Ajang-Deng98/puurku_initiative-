import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Sprout, Droplets, Sun, TrendingUp } from 'lucide-react';
import { cropData, weatherData, farmingTechniques, seedVarieties } from '../data/agricultureData';
import './AgricultureDashboard.css';

const AgricultureDashboard = () => {
  const [activeTab, setActiveTab] = useState('crops');

  const COLORS = ['#2f855a', '#38a169', '#48bb78', '#68d391', '#9ae6b4', '#c6f6d5'];

  return (
    <section id="agriculture" className="agriculture-dashboard">
      <div className="container">
        <h2>Agricultural Intelligence Hub</h2>
        <p className="section-subtitle">Data-driven farming for sustainable growth</p>
        
        <div className="dashboard-tabs">
          <button 
            className={`tab ${activeTab === 'crops' ? 'active' : ''}`}
            onClick={() => setActiveTab('crops')}
          >
            <Sprout size={20} />
            Crop Analytics
          </button>
          <button 
            className={`tab ${activeTab === 'weather' ? 'active' : ''}`}
            onClick={() => setActiveTab('weather')}
          >
            <Droplets size={20} />
            Weather Patterns
          </button>
          <button 
            className={`tab ${activeTab === 'techniques' ? 'active' : ''}`}
            onClick={() => setActiveTab('techniques')}
          >
            <TrendingUp size={20} />
            Farming Techniques
          </button>
          <button 
            className={`tab ${activeTab === 'seeds' ? 'active' : ''}`}
            onClick={() => setActiveTab('seeds')}
          >
            <Sun size={20} />
            Seed Varieties
          </button>
        </div>

        <div className="dashboard-content">
          {activeTab === 'crops' && (
            <div className="tab-content">
              <div className="chart-container">
                <h3>Crop Yield Performance</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={cropData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="yield" fill="#2f855a" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="chart-container">
                <h3>Crop Distribution by Nutrition Type</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={cropData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="yield"
                      label={({ name }) => name}
                    >
                      {cropData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {activeTab === 'weather' && (
            <div className="tab-content">
              <div className="chart-container full-width">
                <h3>Annual Weather Patterns - Northern Uganda</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={weatherData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Bar yAxisId="left" dataKey="rainfall" fill="#4299e1" name="Rainfall (mm)" />
                    <Line yAxisId="right" type="monotone" dataKey="temperature" stroke="#f56565" strokeWidth={3} name="Temperature (°C)" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {activeTab === 'techniques' && (
            <div className="tab-content">
              <div className="techniques-grid">
                {farmingTechniques.map(technique => (
                  <div key={technique.id} className="technique-card">
                    <h4>{technique.title}</h4>
                    <p>{technique.description}</p>
                    <div className="benefits">
                      <strong>Benefits:</strong>
                      <ul>
                        {technique.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="difficulty">
                      <span className={`difficulty-badge ${technique.difficulty.toLowerCase()}`}>
                        {technique.difficulty}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'seeds' && (
            <div className="tab-content">
              <div className="seeds-table">
                <h3>Recommended Seed Varieties for Northern Uganda</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Variety</th>
                      <th>Type</th>
                      <th>Maturity</th>
                      <th>Yield</th>
                      <th>Resistance</th>
                      <th>Season</th>
                    </tr>
                  </thead>
                  <tbody>
                    {seedVarieties.map((seed, index) => (
                      <tr key={index}>
                        <td><strong>{seed.name}</strong></td>
                        <td>{seed.type}</td>
                        <td>{seed.maturity}</td>
                        <td>{seed.yield}</td>
                        <td>{seed.resistance}</td>
                        <td>{seed.season}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AgricultureDashboard;