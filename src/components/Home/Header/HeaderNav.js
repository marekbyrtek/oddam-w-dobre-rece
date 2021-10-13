import React from "react";
import User from "./User";
import { Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import { Link as LinkRoute } from "react-router-dom";

const HeaderNav = () => {
    return (
        <div className="header_nav">
            <User />
            <Nav className="justify-content-end header_nav_scroll">
                <Nav.Item>
                    <LinkRoute to="/">Start</LinkRoute>
                </Nav.Item>
                <Nav.Item>
                    <Link to="fourSteps" duration={1000}>O co chodzi?</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="aboutUs" duration={1000}>O nas</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="whoWeHelp" duration={1000}>Fundacja i organizacje</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="contact" duration={1000}>Kontakt</Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default HeaderNav;
