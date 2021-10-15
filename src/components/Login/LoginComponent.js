import React, {  useState } from "react";
import { Link, useHistory } from "react-router-dom";
import decoration from "../../assets/Decoration.svg";
import { Form, Button } from "react-bootstrap";
import { useAuth } from "../AuthContext";
import { useForm } from 'react-hook-form';

const LoginComponent = () => {
    const [error, setError] = useState("");
    const history = useHistory();
    const { login } = useAuth();
    const { isDirty, register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async(data) => {
        try {
            setError("");
            await login(data.email, data.password);
            history.push("/");
        } catch {
            setError("Nie można się zalogować");
        }
    }

    return (
        <div className="formComponent">
            <h1>Zaloguj się</h1>
            <div className="formComponent-img">
                <img src={decoration} alt="decoration" />
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <p className="error-login">{(error==="Nie można się zalogować") && ("Nie można się zalogować")}</p>
                <div className="formComponent_inputs">
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control className={errors?.email && "input-error"} type="text" {...register("email", {required: true, pattern: {
                        value: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                        message: "invalid email adress"
                    }}
                    )} />
                        <p className="error">{errors?.email && "Podany email jest nieprawidłowy!"}</p>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Hasło</Form.Label>
                        <Form.Control className={errors?.password && "input-error"} type="password" {...register("password", {required: true, minLength: 6})} />
                        <p className="error">{errors?.password && "Podane hasło jest za krótkie"}</p>
                    </Form.Group>
                </div>
                <div className="formComponent_buttons">
                    <Link to="/rejestracja">Załóż konto</Link>
                    <Button disabled={isDirty} variant="outline-dark" type="submit">Zaloguj się</Button>
                </div>
            </Form>
        </div>
    )
}

export default LoginComponent;
