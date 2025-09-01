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

  // Map scroll → margin (0% to 5%)
  const marginPercent = (clampedScroll / maxScroll) * 5;
  console.log(scrollY)
  return (
    <div className="mainDiv">
      <div
        className="card-container"
        style={{
          marginLeft: `${-marginPercent}%`,
          marginRight: `${-marginPercent}%`,
          transition: "margin 0.05s ease-out"
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
