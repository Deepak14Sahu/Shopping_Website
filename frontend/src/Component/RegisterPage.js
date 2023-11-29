import React, { useState } from "react";
import { Container, Col, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";



function RegisterPage() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password1: '',
        password2: ''
    }
    )
    const [error, setError] = useState(false)


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.password1 || !formData.password2) {
            toast.error("All fields are required")

        }
        if (formData.password1 !== formData.password2) {
            toast.error("Password Don't match")
            setError(true)

        }

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
                                className="mx-5 w-100"
                                controlId="FullName"
                            >
                                <Form.Label className="text-white">Full Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    size="lg"
                                    onChange={handleChange}
                                    autoComplete="Full Name"
                                    required

                                />
                            </Form.Group>
                            <Form.Group
                                className="mx-5 w-100"
                                controlId="formBasicEmail"
                            >
                                <Form.Label className="text-white">Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    size="lg"
                                    onChange={handleChange}
                                    value={formData.email}
                                    autoComplete="Email"
                                    required

                                />

                            </Form.Group>

                            <Form.Group
                                className="mx-5 w-100"
                                controlId="formBasicPassword1"
                            >
                                <Form.Label className="text-white">Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password1"
                                    value={formData.password1}
                                    size="lg"
                                    onChange={handleChange}
                                    autoComplete="current-password"
                                    required
                                    isInvalid={error}
                                />
                            </Form.Group>
                            <Form.Group
                                className=" mx-5 w-100"
                                controlId="formBasicPassword2"
                            >
                                <Form.Label className="text-white">Confirm Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password2"
                                    value={formData.password2}
                                    size="lg"
                                    onChange={handleChange}
                                    autoComplete="current-password"
                                    required
                                    isInvalid={error}
                                />
                            </Form.Group>

                            <Button
                                variant="outline-light"
                                type="submit"
                                className="m-2 px-5"
                                size="lg"
                            >
                                Register
                            </Button>

                            <p>
                                Already have an account? <Link to="/login" style={{ marginLeft: "5px", textDecoration: "none", fontWeight: "bold", color: "orange" }} >Login</Link>
                            </p>
                        </form>
                    </Card.Body>
                </Card>
            </Col>
        </Container>
    );
}

export default RegisterPage;