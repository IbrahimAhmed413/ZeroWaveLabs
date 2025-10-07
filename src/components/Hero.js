import React from 'react';
import './Hero.css';

export default function Hero(){
  return (
    <section id="home" className="hero">
      <div className="hero-content container">
        <div className="hero-text">
          <h1>
            Empowering Innovation with<br/>
            <span className="gradient-text">Free Resources &amp; Premium Services</span>
          </h1>
          <p className="tagline">INNOVATE THE FUTURE</p>
          <p className="hero-description">
            We blend <strong>creativity with technology</strong>, offering both <strong>free community tools </strong> and <strong>premium client solutions</strong> under one roof.
          </p>
          <div className="hero-buttons">
              <a className='btn-primary' href='/contact'>Contact Us</a>
            <a className='btn-secondary' href='#portfolio'>View Our Work</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-container">
            <div className="orbital-ring"></div>
            <div className="orbital-ring"></div>
            <div className="orbital-ring"></div>
            <div className="center-sphere"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
