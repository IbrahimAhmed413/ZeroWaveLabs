import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer-content container">
        <div className="footer-brand">
          <div>
            <svg
            viewBox="0 0 400 100"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="35%"
          >
            {/* Background */}

            {/* Tech grid pattern */}
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="#00d4ff"
                  strokeWidth="0.1"
                  opacity="0.1"
                />
              </pattern>
            </defs>
            <rect width="400" height="50" fill="url(#grid)" />

            {/* Wave Symbol */}
            <g id="wave-symbol">
              {/* Zero Circle */}
              <circle
                cx="50"
                cy="50"
                r="28"
                fill="none"
                stroke="#00d4ff"
                strokeWidth="3"
                opacity="0.9"
              />

              {/* Animated Wave */}
              <path
                d="M 30 50 Q 40 35, 50 50 T 70 50"
                fill="none"
                stroke="#00d4ff"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <animate
                  attributeName="d"
                  values="
              M 30 50 Q 40 35, 50 50 T 70 50;
              M 30 50 Q 40 65, 50 50 T 70 50;
              M 30 50 Q 40 35, 50 50 T 70 50"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </path>

              {/* Tech Accent Dots */}
              <circle cx="35" cy="50" r="2" fill="#00d4ff" opacity="0.8">
                <animate
                  attributeName="opacity"
                  values="0.8;0.3;0.8"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="65" cy="50" r="2" fill="#00d4ff" opacity="0.8">
                <animate
                  attributeName="opacity"
                  values="0.3;0.8;0.3"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>

            {/* Company Name */}
            <text
              x="95"
              y="55"
              fontFamily="'Segoe UI', 'Helvetica Neue', Arial, sans-serif"
              fontSize="32"
              fontWeight="300"
              fill="#ffffff"
            >
              <tspan fill="#ffffff">Zero</tspan>
              <tspan fill="#00d4ff" fontWeight="500">
                Wave
              </tspan>
              <tspan fill="#ffffff">Labs</tspan>
            </text>

            {/* Tagline */}
            <text
              x="95"
              y="75"
              fontFamily="'Segoe UI', 'Helvetica Neue', Arial, sans-serif"
              fontSize="11"
              fontWeight="400"
              fill="#00d4ff"
              letterSpacing="2"
              opacity="0.9"
            >
              INNOVATE THE FUTURE
            </text>

            {/* Accent Line */}
            <line
              x1="95"
              y1="82"
              x2="245"
              y2="82"
              stroke="#00d4ff"
              strokeWidth="0.5"
              opacity="0.3"
            />
          </svg>
          </div>
          <p style={{marginBottom:'1.5rem'}}>Leading the digital revolution with innovative technology 
          <br></br> solutions that transform businesses  and create lasting value. <br></br> We blend creativity with technology, offering both free <br></br> community tools and premium client solutions.</p>
          <div className="social-links"><a href="#"><u>f</u></a><a href="#"><u>𝕏</u></a><a href="#"><u>in</u></a><a href="#"><u>ig</u></a></div>
        </div>

        <div className="footer-column">
          <h4 style={{marginBottom:"1rem"}}>Services</h4>
          <div className="footer-links"><a href="#">Cloud Solutions</a><a href="#">AI & ML</a><a href="#">Cybersecurity</a><a href="#">Data analytics</a><a href="#">DevOps</a></div>
        </div>
        <div className="footer-column">
          <h4 style={{marginBottom:"1rem"}}>Company</h4>
          <div className="footer-links"><a href="#">About Us</a><a href="#">Portfolio</a><a href="#">Team</a><a href="#">Careers</a><a href="#">Blogs</a></div>
        </div>
        <div className="footer-column">
          <h4 style={{marginBottom:"1rem"}}>Resources</h4>
          <div className="footer-links"><a href="#">Documentation</a><a href="#">Case Studies</a><a href="#">White Papers</a><a href="#">Support</a><a href="#">Contact</a></div>
        </div>
      </div>
      <div className="footer-bottom"><p>© 2025 ZeroWaveLabs. All rights reserved.</p></div>
    </footer>
  );
}
