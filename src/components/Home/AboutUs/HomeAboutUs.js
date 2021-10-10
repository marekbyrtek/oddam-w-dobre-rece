import React from "react";
import { Element } from "react-scroll";
import AboutUsContent from "./AboutUsContent";
import people from "../../../assets/People.jpg";

const HomeAboutUs = () => {
    return (
        <Element name="aboutUs" className="aboutUs">
            <AboutUsContent />
            <img src={people} alt="people" />
        </Element>
    )
}

export default HomeAboutUs;
