import React from "react";
import "./ModelPage.css";

const modelsData = [
  {
    id: 1,
    title: "Sci-Fi Character",
    category: "Characters",
    description: "Fully rigged sci-fi character with PBR textures, ready for animation.",
    stats: { polygons: "25k", textures: "4K", format: ".FBX" },
    tag: "NEW",
    icon: "👤",
  },
  {
    id: 2,
    title: "Realistic Lion",
    category: "Animals",
    description: "High-detail lion model with fur simulation and animation-ready rig.",
    stats: { polygons: "45k", textures: "8K", format: ".BLEND" },
    tag: "POPULAR",
    icon: "🦁",
  },
  {
    id: 3,
    title: "Sports Car",
    category: "Vehicles",
    description: "Detailed sports car model with interior, perfect for racing games.",
    stats: { polygons: "35k", textures: "4K", format: ".OBJ" },
    tag: "",
    icon: "🚗",
  },
  {
    id: 4,
    title: "Medievall Sword Set",
    category: "Props",
    description: "Collection of 5 medieval swords with PBR materials.",
    stats: { polygons: "8k", textures: "2K", format: ".FBX" },
    tag: "FREE",
    icon: "⚔️",
  },
  {
    id: 5,
    title: "Modern Skyscraper",
    category: "Buildings",
    description: "Modular skyscraper with customizable floors and detailed facade.",
    stats: { polygons: "50k", textures: "4K", format: ".MAX" },
    tag: "",
    icon: "🏢",
  },
  {
    id: 6,
    title: "Game Console Pack",
    category: "Props",
    description: "Modern gaming console set with controllers and accessories.",
    stats: { polygons: "15k", textures: "2K", format: ".OBJ" },
    tag: "",
    icon: "🎮",
  },
  {
    id: 7,
    title: "Fantasy Warrior",
    category: "Characters",
    description: "Epic fantasy warrior with armor and weapons, game-ready.",
    stats: { polygons: "30k", textures: "4K", format: ".FBX" },
    tag: "",
    icon: "🦸",
  },
  {
    id: 8,
    title: "Dragon Model",
    category: "Animals",
    description: "Mythical dragon with detailed scales and animation controls.",
    stats: { polygons: "60k", textures: "8K", format: ".BLEND" },
    tag: "HOT",
    icon: "🐉",
  },
];

export default function Modelpage() {
  return (
    <div className="models-container">
      <div className="models-grid">
        {modelsData.map((model) => (
          <div className="model-card" key={model.id}>
            <div className="preview-section">
              <div className="preview-icon">{model.icon}</div>
              <p>3D Preview</p>
              {model.tag && <div className="tag">{model.tag}</div>}
            </div>

            <div className="details">
              <h3>{model.title}</h3>
              <p className="category">{model.category}</p>
              <p className="desc">{model.description}</p>

              <div className="info">
                <div>
                  <span>{model.stats.polygons}</span>
                  <p>POLYGONS</p>
                </div>
                <div>
                  <span>{model.stats.textures}</span>
                  <p>TEXTURES</p>
                </div>
                <div>
                  <span>{model.stats.format}</span>
                  <p>FORMAT</p>
                </div>
              </div>

              <div className="buttons">
                <button className="download-btn">Download Free</button>
                <button className="preview-btn">Preview</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
