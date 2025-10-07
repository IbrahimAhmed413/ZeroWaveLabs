import React from 'react';
import './Portfolio.css';

const projects = [
  {icon:'📧', title:'Email Automation System', desc:'Python-based automation scripts for scheduled emails', tags:['Python','SMTP','Automation']},
  {icon:'🕷️', title:'Intelligent Web Scraper', desc:'Scrapers for structured data collection', tags:['Python','Selenium','Data Mining']},
  {icon:'📊', title:'Data Generation Tools', desc:'Generate formatted datasets for ML and testing', tags:['Pandas','Faker']},
  {icon:'🎯', title:'Lead Generation System', desc:'Automated lead collection and CRM integration', tags:['Automation','APIs']},
];

export default function Portfolio(){
  return (
    <section id="portfolio" className="portfolio">
      <div className="section-header container">
        <h2>Our <span className="highlight" style={{color:" var(--primary-cyan)"}}>Project Portfolio</span></h2>
        <p>Real-world solutions we've delivered for our clients</p>
      </div>
      <div className="portfolio-grid container">
        {projects.map((p,idx)=>(
          <div className="portfolio-item" key={idx}>
            <div className="portfolio-image">{p.icon}</div>
            <div className="portfolio-content">
              <h3>{idx+1}️⃣ {p.title}</h3>
              <p>{p.desc}</p>
              <div className="portfolio-tags">
                {p.tags.map((t,i)=>(<span className="tag" key={i}>{t}</span>))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
