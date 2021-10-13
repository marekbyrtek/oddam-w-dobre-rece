import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import decoration from "../../assets/Decoration.svg";
import { Form, Button } from "react-bootstrap";
import { useAuth } from "../AuthContext";

const LoginComponent = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const { login } = useAuth();

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push("/");
        } catch {
            setError("Nie można się zalogować");
        }
        setLoading(false);
        console.log(error);
    }

    return (
        <div className="formComponent">
            <h1>Zaloguj się</h1>
            <div className="formComponent-img">
                <img src={decoration} alt="decoration" />
            </div>
            <Form noValidate onSubmit={handleSubmit}>
                <div className="formComponent_inputs">
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" ref={emailRef} required pattern="^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Hasło</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required minLength="6" />
                    </Form.Group>
                </div>
                <div className="formComponent_buttons">
                    <Link to="/rejestracja">Załóż konto</Link>
                    <Button disabled={loading} variant="outline-dark" type="submit">Zaloguj się</Button>
                </div>
            </Form>
        </div>
    )
}

export default LoginComponent;
