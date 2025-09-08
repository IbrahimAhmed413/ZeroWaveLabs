import React, { useEffect, useState } from "react";
import "../styles/ScrollButton.css";

const ButtonCard = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Clamp scroll between 0 → 550
  const maxScroll = 550;
  const clampedScroll = Math.min(scrollY, maxScroll);

  // Map scroll → width (start 60% → 100%)
  const minWidth = 60; // 60% width at top
  const maxWidth = 100; // full width
  const widthPercent = minWidth + (clampedScroll / maxScroll) * (maxWidth - minWidth);

  return (
    <div className="mainDiv">
      <div
        className="card-container"
        style={{
          width: `${widthPercent}%`,
          transition: "width 0.05s ease-out",
        }}
      >
        <div className="card">
          <div className="circle">
            <span className="arrow">➝</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonCard;
