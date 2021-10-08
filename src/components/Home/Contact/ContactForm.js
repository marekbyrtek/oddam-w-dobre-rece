import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Wpisz swoje imię</Form.Label>
                    <Form.Control type="text" placeholder="Krzysztof" {...register("imię", {required: true, maxLength: 20, pattern: /[a-zA-Z]+/i})} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Wpisz swój email</Form.Label>
                    <Form.Control type="email" placeholder="abc@xyz.pl" {...register("email", {required: true, maxLength: 50})} />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Wpisz swoją wiadomość</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel neque posuere, auctor lorem non, porta tortor. Quisque vehicula nisi et massa commodo porttitor. Mauris facilisis ullamcorper urna ut semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum arcu nunc, facilisis et nunc in, consequat convallis lorem." {...register("wiadomość", {required: true, minLength: 120})} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default ContactForm;
