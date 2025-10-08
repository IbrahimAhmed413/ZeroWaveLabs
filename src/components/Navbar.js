import React, { useEffect, useState } from 'react';
import './Navbar.css';
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="nav-container container">
        <a href="#home" className="logo">
          <svg
            viewBox="0 0 400 100"
            xmlns="http://www.w3.org/2000/svg"
            width="60%"
            height="100%"
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
        </a>

        <ul className={open ? 'nav-links active' : 'nav-links'}>
          <li><a href="/" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="/services" onClick={() => setOpen(false)}>Services</a></li>
          <li><a href="/3D Models" onClick={() => setOpen(false)}>3D Models</a></li>
          <li><a href="/tempelates" onClick={() => setOpen(false)}>Tempelates</a></li>
          
          <li><a href="/tools" onClick={() => setOpen(false)}>Tools</a></li>
          {/* <li><a href="#portfolio" onClick={() => setOpen(false)}>Portfolio</a></li>
          <li><a href="#team" onClick={() => setOpen(false)}>Team</a></li> */}
          <li><a href="/about" onClick={() => setOpen(false)}>About Us</a></li>
          <li><a href="/contact" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>

        <a href="/contact" className="cta-button">Contact Us</a>

        <div className={open ? 'mobile-menu-toggle active' : 'mobile-menu-toggle'} onClick={() => setOpen(!open)}>
          <span></span><span></span><span></span>
        </div>
      </div>
    </nav>
  );
}
