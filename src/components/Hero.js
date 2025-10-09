import './Hero.css';

export default function heroo(){
  return (
    <section id="home" className="heroo">
      <div className="heroo-content container">
        <div className="heroo-text">
          <h1>
            Empowering Innovation with<br/>
            <span className="gradient-text">Free Resources &amp; Premium Services</span>
          </h1>
          <p className="tagline">INNOVATE THE FUTURE</p>
          <p className="heroo-description">
            We blend <strong>creativity with technology</strong>, offering both <strong>free community tools </strong> and <strong>premium client solutions</strong> under one roof.
          </p>
          <div className="heroo-buttons">
              <a className='btn-primary' href='/contact'>Contact Us</a>
            <a className='btn-secondary' href='#portfolio'>View Our Work</a>
          </div>
        </div>
        <div className="heroo-visual">
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
