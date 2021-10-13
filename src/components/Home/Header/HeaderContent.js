import React from "react";
import decoration from "../../../assets/Decoration.svg"
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const HeaderContent = () => {
    return (
        <div className="header_content">
            <h2>Zacznij pomagać!<br />Oddaj niechciane rzeczy w zaufane ręce</h2>
            <img src={decoration} alt="decoration" className="header_decoration" />
            <div className="header_buttons">
                <Button as={Link} to="./oddaj-rzeczy" variant="outline-dark" className="header_btn">ODDAJ<br />RZECZY</Button>
                <Button as={LinkScroll} to="fourSteps" variant="outline-dark" className="header_btn">ZORGANIZUJ ZBIÓRKĘ</Button>
            </div>
        </div>
    )
}

export default HeaderContent;
