import React, { useState } from "react";
import { Container, Col, Card, Form, Button, Spinner } from "react-bootstrap";



function RegisterPage() {

    const [input, setInput] = useState({
        name: '',
        email: '',
        password1: '',
        password2: ''
    }

    )


    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleRegister = (e) => {
        e.preventDefault();


    }

    return (
        <Container
            fluid
            className="d-flex justify-content-center align-items-center h-100"
        >
            <Col xs={12} md={6}>
                <Card
                    className="bg-dark text-white my-3 mx-auto"
                    style={{
                        borderRadius: "1rem",
                        maxWidth: "510px",

                    }}
                >
                    <Card.Body className=" d-flex flex-column align-items-center mx-auto w-100">
                        <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                        <p className="text-white-50">
                            Please enter your details!
                        </p>
                        <form
                            className="d-flex flex-column align-items-center"
                            onSubmit={handleRegister}
                        >
                            <Form.Group
                                className="mb-4 mx-5 w-100"
                                controlId="formBasicPassword"
                            >
                                <Form.Label className="text-white">Full Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={input.name}
                                    size="lg"
                                    onChange={handleChange}
                                    autoComplete="current-password"
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-4 mx-5 w-100"
                                controlId="formBasicEmail"
                            >
                                <Form.Label className="text-white">Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    size="lg"
                                    onChange={handleChange}
                                    value={input.email}
                                    autoComplete="username"
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-4 mx-5 w-100"
                                controlId="formBasicPassword"
                            >
                                <Form.Label className="text-white">Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password1"
                                    value={input.password1}
                                    size="lg"
                                    onChange={handleChange}
                                    autoComplete="current-password"
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-4 mx-5 w-100"
                                controlId="formBasicPassword"
                            >
                                <Form.Label className="text-white">Confirm Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password2"
                                    value={input.password2}
                                    size="lg"
                                    onChange={handleChange}
                                    autoComplete="current-password"
                                />
                            </Form.Group>
                            {is_error && <div className="alert alert-danger">{is_error}</div>}

                            <Button
                                variant="outline-light"
                                type="submit"
                                className="m-2 px-5"
                                size="lg"
                            >
                                {is_loading ? <Spinner /> : "Register"}
                            </Button>
                        </form>
                    </Card.Body>
                </Card>
            </Col>
        </Container>
    );
}

export default RegisterPage;