import React from "react";
import "../styles/Footer.css";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-badges">
          <img
            src="https://dummyimage.com/100x50/000/fff&text=Clutch"
            alt="Clutch"
          />
          <img
            src="https://dummyimage.com/100x50/000/fff&text=Great+Place+to+Work"
            alt="Great Place to Work"
          />
          <img
            src="https://dummyimage.com/100x50/000/fff&text=Google+Cloud"
            alt="Google Cloud Partner"
          />
        </div>

        <div className="footer-links">
          <div>
            <h4>Quick Links</h4>
            <ul style={{ color: "grey"  }}>
              <li>Home</li>
              <li>About Us</li>
              <li>Customer Success Stories</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Press Release</li>
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul style={{ color: "grey" }}>
              <li>UI/UX Design</li>
              <li>Mobile App Development</li>
              <li>Web App Development</li>
              <li>Artificial Intelligence (AI)</li>
              <li>Data Analytics & Data Science</li>
              <li>Cloud & DevOps</li>
              <li>Google Workspace</li>
            </ul>
          </div>

          <div>
            <h4>Compliances</h4>
            <ul style={{ color: "grey" }}>
              <li>ISO 27001:2022</li>
              <li>ISO 9001:2015</li>
              <li>SOC 2 Type 2</li>
              <li>Codebuddy</li>
              <li>ISMS Policy</li>
            </ul>
          </div>

          <div>
            <h4>US Office</h4>
            <p style={{ color: "grey" }}>
              2045 W Grand Ave Ste B, PMB 46737
              <br />
              Chicago, Illinois 60612-1577 US
            </p>

            <h4>Mumbai Office</h4>
            <p style={{ color: "grey" }}>
              511, A Wing, Kirol Rd, off Lal Bahadur Shastri Marg,
              <br />
              Commercial I, Kurla West,
              <br />
              Mumbai, Maharashtra 400070
            </p>

            <h4>Pune Office</h4>
            <p style={{ color: "grey" }}>
              2nd Floor, Amanora Mall, West Block,
              <br />
              Mundhwa - Kharadi Rd, Amanora Park Town,
              <br />
              Hadapsar, Pune, Maharashtra 411028
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-icons">
          <a href="nowhere">
            <FaLinkedin />
          </a>
          <a href="nowhere">
            <FaInstagram />
          </a>
          <a href="nowhere">
            <FaFacebook />
          </a>
          <a href="nowhere">
            <FaXTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
