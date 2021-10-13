import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useAuth } from "../../AuthContext";

const User = () => {
    const { currentUser, logout } = useAuth();
    const history = useHistory();

    const handleLogout = e => {
        e.preventDefault();
        logout();
        history.push("/wylogowano")
    }

    if (currentUser) {
        return(
            <div className="header_nav_user d-flex justify-content-end align-items-center">
                <p>Email: {currentUser.email}</p>
                <Button variant="outline-warning" as={Link} to="/oddaj-rzeczy">Oddaj rzeczy</Button>
                <a href="#/" onClick={handleLogout}>Wyloguj</a>
            </div>
        )
    } else {
        return (
            <div className="header_nav_user d-flex justify-content-end align-items-center">
                <Link to="/logowanie">Zaloguj</Link>
                <Button variant="outline-warning" as={Link} to="/rejestracja">Załóż konto</Button>
            </div>
        )
    }
}

export default User;
