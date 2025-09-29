import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4fjz2iv",      
        "template_ccpijmq", 
        form.current,
        "Lf9d0mTiMIC1qTrkl"  
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message sent successfully!");
          e.target.reset(); 
        },
        (error) => {
          console.log(error.text);
          alert("❌ Failed to send message. Try again later.");
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form ref={form} onSubmit={sendEmail}>
          <label>
            Full Name <span>*</span>
          </label>
          <input type="text" name="user_name" placeholder="Full Name" required />

          <label>
            Email <span>*</span>
          </label>
          <input type="email" name="user_email" placeholder="Email" required />

          <label>Phone Number</label>
          <div className="phone-input">
            {/* <select name="country_code">
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+91">+91</option>
            </select> */}
            <input type="tel" name="phone_number" placeholder="Number" />
          </div>

          <label>
            Message <span>*</span>
          </label>
          <textarea name="message" placeholder="Message" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="contact-info">
        <h2>Email Us</h2>
        <div className="email-section">
          <p>
            <strong>For Projects, Partnerships And Collaboration Opportunities</strong>
          </p>
          <a href="mailto:sales@unicoconnect.com">sales@unicoconnect.com</a>

          <p>
            <strong>For Career Opportunities</strong>
          </p>
          <a href="mailto:careers@unicoconnect.com">careers@unicoconnect.com</a>
        </div>

        <h2>Our Offices</h2>
        <div className="office">
          <h4>US Office</h4>
          <p>2045 W Grand Ave Ste B, PMB 46737 Chicago, Illinois 60612-1577 US</p>
          <p>📞 +1 747 296 1276</p>
        </div>

        <div className="office">
          <h4>Mumbai Office</h4>
          <p>
            511, A Wing, Kohinoor City Commercial 1, Kirol Road, Off LBS Marg, Kurla West,
            Mumbai, Maharashtra - 400070
          </p>
          <p>📞 +91 9137279224</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
