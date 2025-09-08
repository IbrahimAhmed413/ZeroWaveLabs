import React from "react";
import Hero from "../components/Hero";
import ScrollButton from "../components/ScrollButton"
import Experiences from "../components/Experiences";
function HomePage() {
  return (
    <div>
      <Hero />
      <ScrollButton />
      <Experiences />
    </div>
  );
}

export default HomePage;
