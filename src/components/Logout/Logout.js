import React from "react";
import { Link } from "react-router-dom";
import HeaderNav from "../Home/Header/HeaderNav";
import decoration from "../../assets/Decoration.svg"
import { Button } from "react-bootstrap";

const Logout = () => {
    return (
        <div className="logout">
            <HeaderNav />
            <div className="logoutComponent">
                <h1>Wylogowanie nastąpiło pomyślnie!</h1>
                <div>
                    <img src={decoration} alt="decoration" />
                </div>
                <Button variant="outline-dark" as={Link} to="/">Strona główna</Button>
            </div>
        </div>
    )
}

export default Logout;
