import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import decoration from "../../assets/Decoration.svg";
import { Form, Button } from "react-bootstrap";
import { useAuth } from "../AuthContext";

const RegisterComponent = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const { signup } = useAuth();

    const handleSubmit = async(e) => {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Hasła się nie zgadzają");
        }

        try {
            setError("");
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push("/");
        } catch {
            setError("Nie można stworzyć konta");
        }
        setLoading(false);
        console.log(error);
    }

    return (
        <div className="formComponent">
            <h1>Załóż konto</h1>
            <div>
                <img src={decoration} alt="decoration" />
            </div>
            <Form onSubmit={handleSubmit}>
                <div className="formComponent_inputs">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Hasło</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required minLength="6" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password-confirm">
                        <Form.Label>Powtórz hasło</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} required minLength="6" />
                    </Form.Group>
                </div>
                <div className="formComponent_buttons">
                    <Link to="/logowanie">Zaloguj się</Link>
                    <Button disabled={loading} variant="outline-dark" type="submit">Załóż konto</Button>
                </div>
            </Form>
        </div>
    )
}

export default RegisterComponent;
