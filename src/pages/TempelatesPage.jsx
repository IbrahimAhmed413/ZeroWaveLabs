import React, { useState } from 'react';
import './TempelatesPage.css';
import screenimg from "../assets/screenimg.png"
const TemplatesPage = () => {
  const [activeFilter, setActiveFilter] = useState('All Templates');
  const [activeView, setActiveView] = useState('Grid');

  const templates = [
    {
      id: 1,
      emoji: '📁',
      name: 'Creative Portfolio Pro',
      category: 'Portfolio',
      rating: 5,
      description: 'Modern portfolio template with smooth animations, dark mode, and project showcase sections.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Animations'],
      license: 'MIT License',
      badges: ['HOT', 'Responsive']
    },
    {
      id: 2,
      emoji: '🛒',
      name: 'ShopHub E-commerce',
      category: 'E-commerce',
      rating: 5,
      description: 'Complete e-commerce template with product galleries, cart functionality, and checkout pages.',
      tags: ['Bootstrap 5', 'Shopping Cart', 'Product Gallery'],
      license: 'Free Commercial',
      badges: ['NEW']
    },
    {
      id: 3,
      emoji: '💼',
      name: 'Corporate Business',
      category: 'Business',
      rating: 4,
      description: 'Professional business template with service sections, team profiles, and contact forms.',
      tags: ['Clean Design', 'SEO Friendly', 'Fast Loading'],
      license: 'GPL License',
      badges: ['Popular']
    },
    {
      id: 4,
      emoji: '📝',
      name: 'Minimal Blog',
      category: 'Blog',
      rating: 5,
      description: 'Clean and minimal blog template with focus on readability and content presentation.',
      tags: ['Minimalist', 'Typography', 'Blog'],
      license: 'MIT License',
      badges: []
    },
    {
      id: 5,
      emoji: '🚀',
      name: 'SaaS Landing Page',
      category: 'Landing Page',
      rating: 5,
      description: 'High-converting landing page with pricing tables, testimonials, and CTA sections.',
      tags: ['Conversion', 'Modern', 'SaaS'],
      license: 'Free to Use',
      badges: ['HOT']
    },
    {
      id: 6,
      emoji: '📊',
      name: 'Admin Dashboard Pro',
      category: 'Admin Dashboard',
      rating: 4,
      description: 'Feature-rich admin dashboard with charts, tables, and various UI components.',
      tags: ['Dashboard', 'Charts', 'Tables', 'Forms'],
      license: 'MIT License',
      badges: ['NEW']
    },
    {
      id: 7,
      emoji: '🍕',
      name: 'Restaurant Deluxe',
      category: 'Business',
      rating: 5,
      description: 'Elegant restaurant template with menu sections, reservation forms, and gallery.',
      tags: ['Restaurant', 'Food', 'Menu'],
      license: 'Free Commercial',
      badges: []
    },
    {
      id: 8,
      emoji: '🎯',
      name: 'Creative Agency',
      category: 'Portfolio',
      rating: 5,
      description: 'Modern agency template with portfolio grid, services, and creative animations.',
      tags: ['Agency', 'Creative', 'Portfolio'],
      license: 'MIT License',
      badges: ['Featured']
    }
  ];

  const filterCategories = [
    'All Templates',
    'Portfolio',
    'Business',
    'E-commerce',
    'Blog',
    'Landing Page',
    'Admin Dashboard',
    'SaaS'
  ];

  const handleDownload = (templateName) => {
    alert(`Downloading ${templateName}...\n\nThank you for choosing ZeroWaveLabs templates!`);
  };

  const handlePreview = (action, templateName) => {
    alert(`${action} for ${templateName}`);
  };

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className="templates-page">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Premium <span className="gradient">Front-End Templates</span></h1>
            <p>Beautiful, responsive HTML/CSS templates ready to launch. Perfect for portfolios, businesses, e-commerce, and more.</p>
            <div className="hero-features">
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>100% Responsive</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>Clean Code</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>Free License</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>Easy Customization</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <img height={"100%"} width={"100%"} style={{objectFit:"fill"}} src={screenimg} alt="Hero Visual" />
          </div>
        </div>
      </section>
      {/* Templates Grid */}
      <section className="templates-section">
        <div className="templates-grid">
          {templates.map((template) => (
            <div key={template.id} className="template-card">
              <div className="template-thumbnail">
                <div className="template-image">{template.emoji}</div>
                <div className="template-overlay">
                  <button 
                    className="overlay-btn"
                    onClick={() => handlePreview('Live Preview', template.name)}
                  >
                    Live Preview
                  </button>
                  <button 
                    className="overlay-btn secondary"
                    onClick={() => handlePreview('Details', template.name)}
                  >
                    Details
                  </button>
                </div>
                {template.badges.length > 0 && (
                  <div className="template-badges">
                    {template.badges.map((badge, index) => (
                      <span 
                        key={index} 
                        className={`badge ${badge === 'HOT' ? 'hot' : badge === 'NEW' ? 'new' : ''}`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="template-info">
                <div className="template-header">
                  <div>
                    <h3 className="template-name">{template.name}</h3>
                    <p className="template-category">{template.category}</p>
                  </div>
                  <div className="template-rating">
                    {renderStars(template.rating)}
                  </div>
                </div>
                <p className="template-description">{template.description}</p>
                <div className="template-footer">
                  <button 
                    className="download-btn"
                    onClick={() => handleDownload(template.name)}
                  >
                    Download Free
                  </button>
                  <span className="template-license">{template.license}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">150+</div>
            <div className="stat-label">Free Templates</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50K+</div>
            <div className="stat-label">Downloads</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Responsive</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">Free</div>
            <div className="stat-label">Commercial Use</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TemplatesPage;