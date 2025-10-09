import Hero from "./Hero"
import Portfolio from "./Portfolio"
import TechStack from "./TechStack"
import Stats from "./Stats"
import About from "./About"
import Team from "./Team"   
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