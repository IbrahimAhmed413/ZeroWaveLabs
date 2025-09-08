import React from "react";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with React and TailwindCSS to showcase my projects and skills.",
      image: "https://via.placeholder.com/400x250", // replace with real image
      link: "#",
    },
    {
      title: "E-commerce App",
      description:
        "An e-commerce web app with product listings, cart functionality, and Stripe integration.",
      image: "https://via.placeholder.com/400x250",
      link: "#",
    },
    {
      title: "Blog Platform",
      description:
        "A full-stack blog platform with authentication, CRUD posts, and a modern UI.",
      image: "https://via.placeholder.com/400x250",
      link: "#",
    },
  ];

  return (
    <div style={{ backgroundColor: "white", color: "black", padding: "5rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>🚀 Projects</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              overflow: "hidden",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <img
              src={project.image}
              alt={project.title}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
            <div style={{ padding: "1rem" }}>
              <h2 style={{ marginBottom: "0.5rem" }}>{project.title}</h2>
              <p style={{ marginBottom: "1rem" }}>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#007bff",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
