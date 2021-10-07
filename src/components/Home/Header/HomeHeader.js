import React from "react";
import { Element } from "react-scroll";
import HeaderNav from "./HeaderNav";
import HeaderContent from "./HeaderContent";
import headerImage from "../../../assets/Home-Hero-Image.jpg";

const HomeHeader = () => {
    return (
        <Element name="header" className="header">
            <img src={headerImage} alt="header-img" className="header_img" />
            <div className="header_right">
                <HeaderNav />
                <HeaderContent />
            </div>
        </Element>
    )
}

export default HomeHeader;
