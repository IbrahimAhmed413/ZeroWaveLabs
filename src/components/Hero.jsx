import "../styles/HeroSection.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-section">
      {/* Background geometric elements */}
      <div className="geometric-elements">
        <div className="blue-glow"></div>
        <div className="corner-lines top-left"></div>
        <div className="corner-lines bottom-right"></div>
        <div className="floating-dots dot-1"></div>
        <div className="floating-dots dot-2"></div>
        <div className="floating-dots dot-3"></div>
      </div>

      {/* Main content */}
      <div className="hero-content">
        <h2 className="hero-title">
          Smart Resources. Smarter Services.
        </h2>

        <p className="hero-subtitle">
          From Vision To Execution, Accelerated With Unico Connect
        </p>

        <button className="start-project-btn" onClick={() => navigate("/contact")}>Contact us</button>
      </div>

      {/* Fixed bottom right button */}
      <button className="book-meeting-btn">Book a Meeting</button>
    </div>
  );
};

export default Hero;
