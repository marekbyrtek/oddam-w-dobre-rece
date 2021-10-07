import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const User = () => {
    return (
        <div className="header_nav_user d-flex justify-content-end align-items-center">
            <Link to="/logowanie">Zaloguj</Link>
            <Button variant="outline-warning" as={Link} to="/rejestracja">Załóż konto</Button>
        </div>
    )
}

export default User;
