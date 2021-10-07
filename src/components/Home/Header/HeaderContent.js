import React from "react";
import decoration from "../../../assets/Decoration.svg"
import { Button } from "react-bootstrap";

const HeaderContent = () => {
    return (
        <div className="header_content">
            <h2>Zacznij pomagać!<br />Oddaj niechciane rzeczy w zaufane ręce</h2>
            <img src={decoration} alt="decoration" className="header_decoration" />
            <div className="header_buttons">
                <Button variant="outline-dark" className="header_btn">ODDAJ<br />RZECZY</Button>
                <Button variant="outline-dark" className="header_btn">ZORGANIZUJ ZBIÓRKĘ</Button>
            </div>
        </div>
    )
}

export default HeaderContent;
