import React, { useState } from "react";
import { Container, Col, Card, Form, Button } from "react-bootstrap";


function LoginPage() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };
    const handleLogin = (e) => {
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
                        maxHeight: "550px",
                    }}
                >
                    <Card.Body className=" d-flex flex-column align-items-center mx-auto w-100">
                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                        <p className="text-white-50 mb-5">
                            Please enter your login and password!
                        </p>
                        <form
                            className="d-flex flex-column align-items-center"
                            onSubmit={handleLogin}
                        >
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
                                    value={user.email}
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
                                    name="password"
                                    value={user.password}
                                    size="lg"
                                    onChange={handleChange}
                                    autoComplete="current-password"
                                />
                            </Form.Group>
                            {error && <div className="alert alert-danger">{error}</div>}

                            <Button
                                variant="outline-light"
                                type="submit"
                                className="m-2 px-5"
                                size="lg"
                            >
                                Login
                            </Button>
                        </form>
                    </Card.Body>
                </Card>
            </Col>
        </Container>
    );
}

export default LoginPage;