import "../styles/ServiceSlide.css";
import download from "../assets/download.png"
const ServiceSlide = (props) => {
    return (
        <>
            <section className="uiux-section">
                <div className="uiux-container">
                    <div className="uiux-left">
                        <div className="uiux-step">{props.number}</div>
                        <h2 className="uiux-title">{props.title}</h2>
                        <p className="uiux-description">
                          {props.desc}
                        </p>
                        <button className="uiux-btn">Know More</button>
                    </div>

                    <div className="uiux-right">
                      
                           <img src={download} alt=""  width={"100%"} height={"100%"} />
                     
                    </div>
                </div>
            </section>
        </>

    );
};

export default ServiceSlide;
