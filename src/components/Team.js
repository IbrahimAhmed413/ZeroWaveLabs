import React from 'react';
import './Team.css';

const members = [
  {avatar:'👨‍💼', name:'John Anderson', role:'CEO & Founder', bio:'Visionary leader with 15+ years in tech.'},
  {avatar:'👩‍💻', name:'Sarah Chen', role:'CTO', bio:'Expert in cloud architecture and AI.'},
  {avatar:'👨‍🔬', name:'Michael Roberts', role:'Head of AI', bio:'PhD in Machine Learning.'},
  {avatar:'👩‍🎨', name:'Emily Zhang', role:'Lead Designer', bio:'Creating intuitive user experiences.'}
];

export default function Team(){
  return (
    <section id="team" className="team">
      <div className="section-header container">
        <h2>Meet Our <span className="highlight">Team</span></h2>
        <p>Talented professionals dedicated to your success</p>
      </div>
      <div className="team-grid container">
        {members.map((m,idx)=>(
          <div className="team-member" key={idx}>
            <div className="member-avatar">{m.avatar}</div>
            <h3>{m.name}</h3>
            <p className="role">{m.role}</p>
            <p>{m.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
