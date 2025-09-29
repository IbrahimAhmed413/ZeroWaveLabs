import Hero from "../components/Hero";
import ScrollButton from "../components/ScrollButton"
import Experiences from "../components/Experiences";
import ServiceSlide from "../components/ServiceSlide";
function HomePage() {
  return (
    <div>
      <Hero />
      <ScrollButton />
      <Experiences />
      <ServiceSlide number="01" title="UI/UX Design" desc="  As an agency our UI/UX teams focus on creating, visually appealing and user-friendly
                            interfaces that significantly enhance engagement and user satisfaction. These intuitive
                            experiences play a key role in custom software development services aimed at improving
                            product usability."  />
    </div>
  );
}

export default HomePage;
