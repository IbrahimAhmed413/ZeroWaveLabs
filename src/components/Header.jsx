import { useState, useEffect } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import "../styles/Header.css"
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

  const navItems = [
    {
      name: "Services",
      dropdown: [
        { name: "UI/UX Design", link: "UI/UX_page" },
        { name: "Mobile App Development", link: "MAD_page" },
        { name: "Web App Development", link: "WEB_page" },
        { name: "Artificial Intelligence (AI)", link: "AI_page" },
        { name: "Data Analytics and Data Science", link: "DA_page" },
        { name: "Cloud and DevOps", link: "Cloud_page" },
        { name: "Google Workspace", link: "Google_page" },
      ],
    },
    {
      name: "Hire Developer",
      dropdown: [
        { name: "No Code Development", link: "nocode_page" },
        { name: "Code Stacks", link: "codestack_page" },
        { name: "AI and Analytics", link: "AI_page" },
        { name: "Managed Cloud and Devops", link: "Managecloud_page" },
      ],
    },
  ];

  const HeaderData = [
    { name: "Our Expertise" },
    { name: "Customer Success" },
    { name: "Blogs" },
    { name: "Careers" },
    { name: "About Us" },
  ];

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
      <div className={`logo ${isScrolled ? "scrolled" : ""}`}>
        <img
          src="https://cdn.prod.website-files.com/66f5247e4f75ce5791ea9638/66f52cfec100d5554794f22e_Frame.svg"
          alt="Logo"
          height="58px"
          width="160px"
        />
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
            <a className="anchor"  onClick={(e) => e.preventDefault()}>
              {item.name} <FaChevronDown />
            </a>

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
            <a className="anchor">
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
                <a className="mobile-anchor"  onClick={(e) => e.preventDefault()}>
                  {item.name}
                </a>
                <FaChevronDown className={`mobile-chevron ${activeDropdown === index ? "rotated" : ""}`} />
              </div>

              {activeDropdown === index && (
                <div className="mobile-dropdown-menu">
                  {item.dropdown.map((subItem, i) => (
                    <a key={i} href={subItem.link} className="mobile-dropdown-item">
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
              <a className="mobile-anchor" >
                {e.name}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && <div className="mobile-menu-overlay" onClick={toggleMobileMenu}></div>}
    </div>
  );
};

export default Header;