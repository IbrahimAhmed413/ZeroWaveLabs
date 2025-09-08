import React from "react";
import "../styles/Experience.css";
import { statsData } from "./HeaderData";
function Experiences() {
 
  return (
    <>
      <div className="main-div">
        With ZeroWave Lab, Get Ahead With Future-Ready Technology
      </div>
      <div className="exp-div">
        <div className="stats-container">
          <div className="stats-grid">
            {statsData.map((stat) => (
              <div key={stat.id} className="stat-card">
                <div className={`stat-icon ${stat.iconBg} ${stat.iconColor}`}>
                  {stat.icon}
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Experiences;
