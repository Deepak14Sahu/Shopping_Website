import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";


function NavBar() {

    return (
        <Navbar sticky="top" expand="lg" style={{ background: "#5a5a5a" }}>
            <Container fluid>
                <img src={logo} style={{ width: "6%" }} alt="" />

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px", fontSize: "18px" }}
                        navbarScroll
                    >
                        <NavLink
                            to="/"
                            className="nav-link"
                            style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "orange" : "beige",
                                };
                            }}
                        >
                            Home
                        </NavLink>


                        <NavLink
                            to="/products"
                            className="nav-link"
                            style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "orange" : "beige",
                                };
                            }}
                        >
                            Products
                        </NavLink>

                    </Nav>

                    <Nav className=" my-2 my-lg-0 ">
                        <NavLink to="/wishlist" className="mx-3">
                            <i className="fa fa-heart fa-2x" style={{ color: "black" }}></i>
                            <span className="position-absolute  translate-middle badge rounded-pill bg-danger">
                                2
                            </span>
                        </NavLink>
                        <NavLink to="/cart" className="mx-3">
                            <i
                                className="fa fa-shopping-cart fa-2x"
                                style={{ color: "black" }}
                            ></i>

                            <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                                2
                            </span>
                        </NavLink>
                    </Nav>



                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;