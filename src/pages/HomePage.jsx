import Hero from "../components/Hero"
import Portfolio from "../components/Portfolio"
import TechStack from "../components/TechStack"
import Stats from "../components/Stats"
import About from "../components/About"
import Team from "../components/Team"   
export default function HomePage  (){
    return (
        <>
            <Hero />
            <About />
            <Portfolio />
            <TechStack />
            <Stats />
        </>
    )
}