import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';


type InputsErrors = {
    login: string,
    password: string,
};

const AuthForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<InputsErrors>();
    const onSubmit: SubmitHandler<any> = data => console.log(data);

    // console.log(watch("example")) // watch input value by passing the name of it

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                {errors.login && <span>This field is required</span>}
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                {errors.password && <span>This field is required</span>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default AuthForm;