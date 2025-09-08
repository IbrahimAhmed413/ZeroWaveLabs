import React from "react";

const AboutUs = () => {
  return (
    <div style={{ backgroundColor: "white", color: "black", padding: "5rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          👋 About Us
        </h1>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "1.5rem" }}>
          Welcome to our website! We are a passionate team of developers and
          designers dedicated to creating modern, user-friendly web
          applications. Our mission is to make technology more accessible and
          impactful for everyone.
        </p>

        <h2 style={{ marginBottom: "1rem" }}>🌟 Our Mission</h2>
        <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "1.5rem" }}>
          Our mission is simple: to provide high-quality learning resources,
          tools, and services that empower individuals and businesses to grow in
          today’s digital world.
        </p>

        <h2 style={{ marginBottom: "1rem" }}>🤝 Our Values</h2>
        <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li>Innovation – We embrace creativity and new ideas.</li>
          <li>Collaboration – Teamwork drives everything we do.</li>
          <li>Integrity – We believe in transparency and honesty.</li>
          <li>Excellence – Always striving to deliver the best.</li>
        </ul>

        <h2 style={{ marginBottom: "1rem" }}>👨‍💻 Our Team</h2>
        <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
          We are a diverse team of developers, designers, and educators who
          believe in the power of technology to make a difference. Each of us
          brings unique skills and experiences to the table, making us stronger
          together.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
