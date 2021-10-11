import React, { useRef } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const { isDirty, register, handleSubmit, formState: { errors } } = useForm();
    const nameRef = useRef();
    const emailRef = useRef();
    const msgRef = useRef();

    // const onSubmit = data => console.log(data);
    // console.log(errors);

    const onSubmit = data => {
        console.log(data);
        console.log(errors);
        fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
        }})
        .then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw new Error("Błąd sieci");
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Wpisz swoje imię</Form.Label>
                    <Form.Control type="text" placeholder="Krzysztof" ref={nameRef} {...register("name", {required: true, minLength: 6,  pattern: {
                            value: /^[a-zA-Z]*$/,
                            message: "invalid name"
                        }}
                    )} />
                <p>{errors?.name && "Podane imię jest nieprawidłowe!"}</p>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Wpisz swój email</Form.Label>
                    <Form.Control type="text" placeholder="abc@xyz.pl" ref={emailRef} {...register("email", {required: true, pattern: {
                        value: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                        message: "invalid email adress"
                    }}
                    )} />
                    <p>{errors?.email && "Podany email jest nieprawidłowy!"}</p>
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridMessage">
                <Form.Label>Wpisz swoją wiadomość</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel neque posuere, auctor lorem non, porta tortor. Quisque vehicula nisi et massa commodo porttitor. Mauris facilisis ullamcorper urna ut semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum arcu nunc, facilisis et nunc in, consequat convallis lorem." ref={msgRef} {...register("message", {required: true, minLength: 120})} />
            </Form.Group>
            {console.log(errors)}
            <p>{errors?.message && "Wiadomość musi mieć conajmniej 120 znaków!"}</p>
            <Button disabled={isDirty} variant="primary" type="submit">
                Wyślij
            </Button>
        </Form>
    );
}

export default ContactForm;
