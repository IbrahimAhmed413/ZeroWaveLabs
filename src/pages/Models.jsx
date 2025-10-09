import ModelPage from "../components/Modelpage"
import "./Models.css"
export default function Models() {
    return (
        <>
            <div className="main_div">
                <h1>Free <span className="main_heading">3D Models</span> Library
                </h1>
                <p className="writing">High-quality 3D assets for games, animations, and digital content. Download and use in your projects.</p>
               <div className="stats">
                 <div className="stats_main"><p>500+</p><p className="changep">3D MODELS</p></div>
                    <div className="stats_main"><p>5</p><p className="changep">CATEGORIES</p></div>
                    <div className="stats_main"><p>100%</p><p className="changep">FREE TO USE</p></div>
               </div>
            </div>
            <ModelPage />
        </>
    )
}
