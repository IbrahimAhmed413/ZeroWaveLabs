import {useNavigate } from "react-router-dom";
import "./Tools.css";
import { use } from "react";
const categories = [
  { icon: "📧", title: "Automation", tools: "15 Tools" },
  { icon: "📊", title: "Data Processing", tools: "12 Tools" },
  { icon: "🕷️", title: "Web Scraping", tools: "8 Tools" },
  { icon: "🤖", title: "AI/ML Tools", tools: "10 Tools" },
  { icon: "🔧", title: "Utilities", tools: "20 Tools" },
];

const tools = [
  {
    icon: "🖼️",
    badge: "POPULAR",
    name: "Background Remover",
    category: "Automation",
    desc: "Complete email automation system with scheduling, templates, and bulk sending capabilities.",
    features: [
      "Schedule emails with cron",
      "HTML template support",
      "CSV contact management",
      "Attachment handling",
    ],
    actions: { github: true, tutorial: true },
  },
  {
    icon: "🕷️",
    badge: "NEW",
    name: "Scraper",
    category: "Web Scraping",
    desc: "Intelligent web scraper with BeautifulSoup and Selenium support.",
    features: [
      "Dynamic content scraping",
      "Proxy rotation support",
      "Data export to JSON/CSV",
      "Rate limiting built-in",
    ],
    actions: { github: true, tutorial: true },
  },
  {
    icon: "📊",
    badge: "FEATURED",
    name: "Data-Visualization",
    category: "Data Processing",
    desc: "Generate realistic test data for development and testing.",
    features: [
      "Faker integration",
      "Custom data patterns",
      "Multiple export formats",
      "Relationship handling",
    ],
    actions: { github: true, tutorial: true },
  },
  {
    icon: "📸",
    badge: "PRO",
    name: "Image Compressor",
    category: "Automation",
    desc: "Automated lead generation from multiple sources.",
    features: [
      "Multi-source collection",
      "Email validation",
      "Data enrichment APIs",
      "CRM export ready",
    ],
    actions: { github: true, tutorial: true },
  },
   {
    icon: "🔳",
    badge: "PRO",
    name: "QR code Generator",
    category: "Automation",
    desc: "Automated lead generation from multiple sources.",
    features: [
      "Multi-source collection",
      "Email validation",
      "Data enrichment APIs",
      "CRM export ready",
    ],
    actions: { github: true, tutorial: true },
  },
   {
    icon: "🎥",
    badge: "PRO",
    name: "Screen Recorder",
    category: "Automation",
    desc: "Automated lead generation from multiple sources.",
    features: [
      "Multi-source collection",
      "Email validation",
      "Data enrichment APIs",
      "CRM export ready",
    ],
    actions: { github: true, tutorial: true },
  },
];

const stats = [
  { number: "65+", label: "Python Tools" },
  { number: "10K+", label: "Downloads" },
  { number: "100%", label: "Open Source" },
  { number: "24/7", label: "Support" },
];
const Tools = () => {
    const navigate = useNavigate();
  const handleDownload = (name) => {
    navigate(`/${name.slice()}`);
  };

  const handleCategoryClick = (category) => {
    alert(`Filtering by ${category} category...`);
  };

  return (
    <div className="python-tools-page">

      <section className="hero">
        <div className="hero-contentt">
          <h1>
            Free <span className="python">Python Tools</span> & Scripts
          </h1>
          <p>Powerful automation scripts, data tools, and utilities to streamline your workflow.</p>
          <div className="code-preview">
            <div className="code-line"><span className="code-comment"># Automate your workflow</span></div>
            <div className="code-line"><span className="code-keyword">import</span> zerowavelabs</div>
            <div className="code-line"></div>
            <div className="code-line"><span className="code-keyword">def</span> innovate():</div>
            <div className="code-line">  <span className="code-keyword">return</span> <span className="code-string">"Transform your ideas"</span></div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="tools-section">
        <div className="section-header">
          <h2>
            Featured <span className="highlight">Python Tools</span>
          </h2>
          <p>Download ready-to-use scripts or customize them.</p>
        </div>
        <div className="tools-grid">
          {tools.map((tool, i) => (
            <div className="tool-card" key={i}>
              <div className="tool-header">
                <div className="tool-icon">{tool.icon}</div>
                <span className="tool-badge">{tool.badge}</span>
              </div>
              <h3 className="tool-name">{tool.name}</h3>
              <p className="tool-category">{tool.category}</p>
              <p className="tool-description">{tool.desc}</p>
              <ul className="tool-features">
                {tool.features.map((f, j) => <li key={j}>{f}</li>)}
              </ul>
              <div className="tool-actions">
                <button
                  className="btn-download-py"
                  onClick={() => handleDownload(tool.name)}
                >
                 Use. py
                </button>
                {tool.actions.tutorial && <a href="#" className="btn-tutorial">How to use</a>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="stats-banner">
        <div className="stats-container">
          {stats.map((s, i) => (
            <div className="stat-item" key={i}>
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tools;
