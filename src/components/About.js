import React from 'react';
import './About.css';
import AboutVideo from "../assets/AboutVideo.mp4"

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-content container">
        <div className="about-text">
          <h2 style={{ color: " var(--primary-cyan)" }}>About <span className="highlight">ZeroWaveLabs</span></h2>
          <p className="lead">At <strong>ZeroWaveLabs</strong>, we believe great ideas should never be held back by limited resources.</p>
          <div className="about-features">
            <div className="feature-item">
              <div className="feature-icon">🎁</div>
              <div className="feature-text"><h4>Free Resources</h4><p>Python tools, front-end templates, 3D models - all available to the community</p></div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💼</div>
              <div className="feature-text"><h4>Custom Services</h4><p>Tailored solutions for startups and businesses</p></div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🌍</div>
              <div className="feature-text"><h4>Community-Driven</h4><p>Blending creativity with technology</p></div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✔️</div>
              <div className="feature-text"><h4>Multi-Skilled Team</h4><p>From code to design to blockchain to marketing</p></div>
            </div>
          </div>
        </div>
        <div className="about-visual">
          <div className="about-image">
            <video
              width={"100%"}
              style={{ objectFit: "cover" }}
              height={"100%"}
              src={AboutVideo}
              autoPlay
              loop
              muted
              playsInline
              className="about-video"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
