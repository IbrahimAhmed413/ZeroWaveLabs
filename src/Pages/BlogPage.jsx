import React from "react";

const BlogPage = () => {
  const posts = [
    {
      title: "Getting Started with React",
      date: "September 1, 2025",
      excerpt:
        "React is a powerful library for building user interfaces. In this post, we'll cover the basics to help you get started quickly.",
      link: "#",
    },
    {
      title: "10 JavaScript Tips for Beginners",
      date: "August 20, 2025",
      excerpt:
        "Mastering JavaScript takes time, but here are 10 useful tips and tricks that will make your coding life much easier.",
      link: "#",
    },
    {
      title: "CSS Grid vs Flexbox",
      date: "August 5, 2025",
      excerpt:
        "Both CSS Grid and Flexbox are powerful layout tools. But when should you use one over the other? Let's break it down.",
      link: "#",
    },
  ];

  return (
    <div style={{ backgroundColor: "white", color: "black", padding: "5rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>📝 Blog</h1>

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        {posts.map((post, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "1.5rem",
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
            <h2 style={{ marginBottom: "0.5rem" }}>{post.title}</h2>
            <p style={{ fontSize: "0.9rem", color: "gray" }}>{post.date}</p>
            <p style={{ margin: "1rem 0" }}>{post.excerpt}</p>
            <a
              href={post.link}
              style={{
                color: "#007bff",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
