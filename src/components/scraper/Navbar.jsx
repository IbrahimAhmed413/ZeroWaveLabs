import React from "react";
import { NavLink } from "react-router-dom";
import '../../pages/Scrapper.css'
export default function Navbar() {
  return (
    <header id="main-navbar" className="navbar">
      <div className="navbar-inner container">


        <nav className="nav-links" role="navigation" aria-label="Main navigation">
          <NavLink to="/csv" className={({isActive}) => isActive ? "nav-btn nav-btn-active" : "nav-btn"}>CSV/Excel Charts</NavLink>
          <NavLink to="/text" className={({isActive}) => isActive ? "nav-btn nav-btn-active" : "nav-btn"}>Text Analysis</NavLink>
          <NavLink to="/pie" className={({isActive}) => isActive ? "nav-btn nav-btn-active" : "nav-btn"}>Manual Pie Chart</NavLink>
          <NavLink to="/survey" className={({isActive}) => isActive ? "nav-btn nav-btn-active" : "nav-btn"}>Survey & Correlation</NavLink>
        </nav>
      </div>
    </header>
  );
}
