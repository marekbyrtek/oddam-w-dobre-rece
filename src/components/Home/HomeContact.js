import React from "react";
import { Link, Element } from "react-scroll";

const HomeContact = () => {
    return (
        <Element name="contact" style={{height: "100vh"}}>
            <h1>Skontaktuj się z nami</h1>
            <ul>
                <li><Link to="header" smooth={true} duration={1000}>Nagłówek</Link></li>
                <li><Link to="threeColumns" smooth={true} duration={1000}>Trzy kolumny</Link></li>
                <li><Link to="fourSteps" smooth={true} duration={1000}>Wystarczą 4 proste kroki</Link></li>
                <li><Link to="aboutUs" smooth={true} duration={1000}>O nas</Link></li>
                <li><Link to="whoWeHelp" smooth={true} duration={1000}>Komu pomagamy</Link></li>
                <li><Link to="contact" smooth={true} duration={1000}>Skontaktuj się z nami</Link></li>
            </ul>
        </Element>
    )
}

export default HomeContact;
