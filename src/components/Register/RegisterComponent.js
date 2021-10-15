import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import decoration from "../../assets/Decoration.svg";
import { Form, Button } from "react-bootstrap";
import { useAuth } from "../AuthContext";
import { useForm } from 'react-hook-form';

const RegisterComponent = () => {
    const [error, setError] = useState("");
    const history = useHistory();
    const { signup } = useAuth();
    const { isDirty, register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async(data) => {
        if (data.password !== data.passwordConfirm) {
            return setError("Hasła się nie zgadzają");
        }
        
        try {
            setError("");
            await signup(data.email, data.password);
            history.push("/");
        } catch {
            setError("Błąd sieci");
        }
    }

    return (
        <div className="formComponent">
            <h1>Załóż konto</h1>
            <div>
                <img src={decoration} alt="decoration" />
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <p className="error-login">{(error==="Błąd sieci") && ("Błąd sieci")}</p>
                <div className="formComponent_inputs">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control className={errors?.email && "input-error"} type="text" {...register("email", {required: true, pattern: {
                        value: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                        message: "invalid email adress"
                    }}
                    )} />
                    <p className="error">{errors?.email && "Podany email jest nieprawidłowy!"}</p>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Hasło</Form.Label>
                        <Form.Control className={((errors?.password) || (error==="Hasła się nie zgadzają")) && "input-error"} type="password" {...register("password", {required: true, minLength: 6})} />
                        <p className="error">{errors?.password && "Podane hasło jest za krótkie"}</p>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password-confirm">
                        <Form.Label>Powtórz hasło</Form.Label>
                        <Form.Control className={((errors?.passwordConfirm) || (error==="Hasła się nie zgadzają")) && "input-error"} type="password" {...register("passwordConfirm", {required: true, minLength: 6})} />
                        <p className="error">{((errors?.passwordConfirm) || (error==="Hasła się nie zgadzają")) && ("Hasła się nie zgadzają")}</p>
                    </Form.Group>
                </div>
                <div className="formComponent_buttons">
                    <Link to="/logowanie">Zaloguj się</Link>
                    <Button disabled={isDirty} variant="outline-dark" type="submit">Załóż konto</Button>
                </div>
            </Form>
        </div>
    )
}

export default RegisterComponent;
