import React from "react";

const Resources = () => {
  const resources = [
    {
      title: "React Official Docs",
      description: "Learn React from the official documentation.",
      link: "https://react.dev",
    },
    {
      title: "MDN Web Docs",
      description: "Comprehensive reference for web technologies.",
      link: "https://developer.mozilla.org/",
    },
    {
      title: "FreeCodeCamp",
      description: "Hands-on coding tutorials and exercises.",
      link: "https://www.freecodecamp.org/",
    },
    {
      title: "JavaScript Info",
      description: "In-depth tutorials on JavaScript concepts.",
      link: "https://javascript.info/",
    },
  ];

  return (
    <div style={{ backgroundColor: "white", color: "black", padding: "5rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        📚 Resources
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {resources.map((res, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "1rem",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h2 style={{ marginBottom: "0.5rem" }}>{res.title}</h2>
            <p style={{ marginBottom: "1rem" }}>{res.description}</p>
            <a
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#007bff",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Visit →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
