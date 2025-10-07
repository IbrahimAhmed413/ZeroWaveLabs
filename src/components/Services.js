import React from 'react';
import './Services.css';

const services = [
  { icon: '🌐', title: 'Full-Stack Development', desc: 'Complete web and mobile app development solutions.' },
  { icon: '🤖', title: 'AI & Data Science', desc: 'ML models, automation tools, and analytics.' },
  { icon: '🔗', title: 'Blockchain & Smart Contracts', desc: 'DApps and secure smart contracts.' },
  { icon: '🎨', title: 'UX/UI Design', desc: 'Beautiful, functional interfaces.' },
  { icon: '🐍', title: 'Python Automation', desc: 'Custom automation scripts and tooling.' },
  { icon: '🎮', title: '3D Assets & Animation', desc: 'High-quality models and animations.' },
  { icon: '☁️', title: 'Cloud & DevOps', desc: 'Scalable infrastructure and pipelines.' },
  { icon: '📈', title: 'Marketing & Branding', desc: 'Digital marketing and branding strategies.' },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="section-header container">
        <h2 style={{color:" var(--primary-cyan)"}}>Our <span className="highlight">Services</span></h2>
        <p>Comprehensive technology solutions with expertise across multiple domains</p>
      </div>
      <div className="services-grid container">
        {services.map((s, idx)=>(
          <div className="service-card" key={idx}>
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <a href="#" className="service-link">Learn more →</a>
          </div>
        ))}
      </div>
    </section >
  );
}
