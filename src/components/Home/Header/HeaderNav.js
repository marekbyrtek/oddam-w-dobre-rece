import React from "react";
import User from "./User";
import { Nav } from "react-bootstrap";
import { Link } from "react-scroll";

const HeaderNav = () => {
    return (
        <div className="header_nav">
            <User />
            <Nav className="justify-content-end header_nav_scroll">
                <Nav.Item>
                    <Link to="threeColumns" smooth={true} duration={1000}>Start</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="fourSteps" smooth={true} duration={1000}>O co chodzi?</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="aboutUs" smooth={true} duration={1000}>O nas</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="whoWeHelp" smooth={true} duration={1000}>Fundacja i organizacje</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="contact" smooth={true} duration={1000}>Kontakt</Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default HeaderNav;
