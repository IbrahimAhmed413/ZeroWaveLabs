import { useState, useEffect } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import "../styles/Header.css";
import Logo from "../assets/Logo.png";
import { HeaderData, navItems } from "./HeaderData";
import { Link } from "react-router-dom";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [activeDropdown, setActiveDropdown] = useState(null);
  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };
  const onMouseOut = () => {
    setTimeout(() => {
      setActiveDropdown(null);
    }, 2000);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };
  return (
    <div className={`mainheader ${isScrolled ? "scrolled" : ""}`}>
      <div className={`logo ${isScrolled ? "scrolled" : ""}`} >
       <Link to="/">
         <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={Logo}
          alt="Logo"
        />
       </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="links desktop-links">
        {/* Dropdown menus */}
        {navItems.map((item, index) => (
          <div
            key={index}
            className="dropdown-container"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={onMouseOut}
          >
            <p className="anchor" onClick={(e) => e.preventDefault()}>
              {item.name} <FaChevronDown />
            </p>

            {activeDropdown === index && (
              <div className="Dropdown-menu">
                {item.dropdown.map((subItem, i) => (
                  <a key={i} href={subItem.link} className="dropdown-item">
                    {subItem.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Static header items */}
        {HeaderData.map((e, index) => (
          <span key={index} className="service-links">
            <a className="anchor" href={e.link}>
              {e.name}
            </a>
          </span>
        ))}
      </div>
      
      {/* Desktop Contact Button */}
      <div className={`buttondiv ${isScrolled ? "scrolled" : ""}`}>
        <button className="button">Contact</button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-content">
          {/* Mobile Dropdown menus */}
          {navItems.map((item, index) => (
            <div key={index} className="mobile-dropdown-container">
              <div
                className="mobile-anchor-container"
                onClick={() => toggleMobileDropdown(index)}
              >
                <p
                  className="mobile-anchor"
                  onClick={(e) => e.preventDefault()}
                >
                  {item.name}
                </p>
                <FaChevronDown
                  className={`mobile-chevron ${
                    activeDropdown === index ? "rotated" : ""
                  }`}
                />
              </div>

              {activeDropdown === index && (
                <div className="mobile-dropdown-menu">
                  {item.dropdown.map((subItem, i) => (
                    <a
                      key={i}
                      href={subItem.link}
                      className="mobile-dropdown-item"
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Static header items */}
          {HeaderData.map((e, index) => (
            <div key={index} className="mobile-service-links">
              <a className="mobile-anchor" href={e.link}>
                {e.name}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMobileMenu}></div>
      )}
    </div>
  );
};

export default Header;
