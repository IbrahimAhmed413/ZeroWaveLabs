import React from 'react';
import './Services.css';

const services = [
  { icon: '🌐', title: 'Full-Stack Development', desc: 'Complete web and mobile app development solutions using modern frameworks and technologies. From concept to deployment, we build scalable applications..' },
  { icon: '🤖', title: 'AI & Data Science', desc: 'Leverage artificial intelligence and data science to create smarter solutions. We build ML models, automation tools, and intelligent analytics systems.' },
  { icon: '🔗', title: 'Blockchain & Smart Contracts', desc: 'Develop decentralized applications and smart contracts for Web3. We create secure, transparent blockchain solutions for modern businesses..' },
  { icon: '🎨', title: 'UX/UI Design', desc: 'Create engaging user experiences with intuitive interfaces. Our design team crafts beautiful, functional designs that users love.' },
  { icon: '🐍', title: 'Python Automation', desc: 'Streamline workflows with custom Python scripts and automation tools. From data processing to task automation, we make your work efficient.' },
  { icon: '🎮', title: '3D Assets & Animation', desc: 'High-quality 3D models and animations for games, ads, and digital content. We create stunning visual assets that bring ideas to life.' },
  { icon: '☁️', title: 'Cloud & DevOps', desc: 'Build scalable cloud infrastructure with automated deployment pipelines. We optimize for performance, security, and cost-efficiency.' },
  { icon: '📈', title: 'Marketing & Branding', desc: 'Strategic digital marketing campaigns and branding solutions to help businesses grow their online presence and reach target audiences.' },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="section-header container">
        <h2>Our <span className="highlight">Services</span></h2>
        <p>Comprehensive technology solutions with expertise across multiple domains</p>
      </div>
      <div className="services-grid container">
        {services.map((s, idx) => (
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
