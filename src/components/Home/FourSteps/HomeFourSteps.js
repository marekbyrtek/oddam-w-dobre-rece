import React from "react";
import { Element } from "react-scroll";
import FourStepsButton from "./FourStepsButton";
import FourStepsContent from "./FourStepsContent";
import FourStepsHeader from "./FourStepsHeader";

const HomeFourSteps = () => {
    return (
        <Element name="fourSteps" className="fourSteps">
            <FourStepsHeader />
            <FourStepsContent />
            <FourStepsButton />
        </Element>
    )
}

export default HomeFourSteps;
