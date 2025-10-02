import React from "react";
import "../styles/WebTemplates.css";

const templates = [
  {
    title: "Portfolio Website",
    description: "A clean portfolio template built with React and Tailwind CSS.",
    file: "/templates/portfolio-template.zip",
    image: "https://via.placeholder.com/300x200", // dummy preview image
  },
  {
    title: "Blog Template",
    description: "Responsive blog layout with modern design.",
    file: "/templates/blog-template.zip",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "E-Commerce Template",
    description: "Minimal and modern e-commerce front-end template.",
    file: "/templates/ecommerce-template.zip",
    image: "https://via.placeholder.com/300x200",
  },
];

const TemplatesPage = () => {
  return (
    <div className="templates-page">
      <h1 className="page-title">Download Web Templates</h1>
      <p className="page-subtitle">Choose from ready-made templates for your next project.</p>

      <div className="templates-grid">
        {templates.map((t, i) => (
          <div className="template-card" key={i}>
            <img src={t.image} alt={t.title} className="template-image" />
            <h2>{t.title}</h2>
            <p>{t.description}</p>
            <a href={t.file} download className="download-btn">
              Download Template
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplatesPage;
