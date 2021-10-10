import React from "react";
import decoration from "../../../assets/Decoration.svg";
import signature from "../../../assets/Signature.svg";

const AboutUsContent = () => {
    return (
        <div className="aboutUs_content">
            <h3>O nas</h3>
            <div>
                <img src={decoration} alt="decoration" />
            </div>
            <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
            <div className="aboutUs_content-signature">
                <img src={signature} alt="signature" />
            </div>
        </div>
    )
}

export default AboutUsContent;
