import React from 'react';
import './TechStack.css';

const tech = {
  Frontend:['React','Vue.js','Angular','Next.js','TypeScript'],
  Backend:['Node.js','Python','Java','Go','.NET Core'],
  Cloud:['AWS','Azure','Docker','Kubernetes','Jenkins'],
  AI:['TensorFlow','PyTorch','Spark','Hadoop','Tableau']
};

export default function TechStack(){
  return (
    <section className="tech-stack">
      <div className="section-header container">
        <h2>Our <span className="highlight">Technology Stack</span></h2>
        <p>We work with cutting-edge technologies to deliver exceptional results</p>
      </div>
      <div className="tech-categories container">
        {Object.keys(tech).map((k,idx)=>(
          <div className="tech-category" key={idx}>
            <h3>{k}</h3>
            <div className="tech-items">
              {tech[k].map((t,i)=>(<span className="tech-item" key={i}>{t}</span>))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
