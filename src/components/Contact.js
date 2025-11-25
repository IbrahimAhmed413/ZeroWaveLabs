import React from 'react';
import './Contact.css';

export default function Contact(){
  return (
    <section id="contact" className="contact">
      <div className="section-header container">
        <h2>Get In <span className="highlight">Touch</span></h2>
        <p>Ready to transform your business? Let's discuss your project</p>
      </div>
      <div className="contact-content container">
        <div className="contact-info">
          <h3>Let's Build Something Amazing Together</h3>
          <p>Whether you're looking to modernize your infrastructure or implement AI solutions, we're here to help.</p>
          <div className="contact-details">
            <div className="contact-item"><div className="contact-icon">📧</div><div className="contact-text"><h4>Email</h4><p>info@zerowavelabs.com</p></div></div>
            <div className="contact-item"><div className="contact-icon">📱</div><div className="contact-text"><h4>Phone</h4><p>+92 333 279 7617</p></div></div>
            <div className="contact-item"><div className="contact-icon">📍</div><div className="contact-text"><h4>Location</h4><p>Islamabad</p></div></div>
          </div>
        </div>

        <form className="contact-form" onSubmit={(e)=>{e.preventDefault(); alert('Thank you! We will get back to you.'); e.target.reset();}}>
          <div className="form-group"><label>Your Name</label><input required/></div>
          <div className="form-group"><label>Email Address</label><input type="email" required/></div>
          <div className="form-group"><label>Subject</label><input required/></div>
          <div className="form-group"><label>Your Message</label><textarea required/></div>
          <button className="form-submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
