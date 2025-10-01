import "../styles/PythonTools.css"
import image from "../assets/3Dimage-removebg-preview.png"
import image2 from "../assets/pythonlogo-removebg-preview.png"
import image3 from "../assets/12352597.png"
import rocket from "../assets/rocket.png"
const PythonToolsPage = () => {
    return (
        <div className="tools-container">
            <h1 className="tools-heading">
                Pyhton Tools
            </h1>

            {/* <div className="tools-buttons">
                <button className="view-btn">View Resources</button>
                <button className="hire-btn">Hire Our Team</button>
            </div> */}

            <div className="tools-cards">
                <div className="tool-card">
                    <img src={image} alt="3D Assets" className="tool-icon" />
                    <h3>3D Assets<br />Gallery</h3>
                </div>

                <div className="tool-card">
                    <img src={image2} alt="Python Tools" className="tool-icon" />
                    <h3>Python Tools<br />Download</h3>
                </div>

                <div className="tool-card">
                    <img src={image3} alt="Front-End" className="tool-icon" />
                    <h3>Front-End<br />Templates</h3>
                </div>

                <div className="tool-card">
                    <img src={rocket} alt="Custom Software" className="tool-icon" />
                    <h3>Custom Software<br />& Services</h3>
                </div>
            </div>

            <div className="tools-footer">
                <div className="footer-item">
                    <span className="footer-icon">⭐</span>
                    <p>100+ downloads</p>
                </div>
                <div className="footer-item">
                    <span className="footer-icon">🤝</span>
                    <p>Trusted by freelancers & startups</p>
                </div>
                <div className="footer-item">
                    <span className="footer-icon">✔️</span>
                    <p>Custom orders available</p>
                </div>
            </div>
        </div>
    );
};

export default PythonToolsPage;