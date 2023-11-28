import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <div className=" mt-3 ">
            <footer style={{ backgroundColor: " #deded5" }}>
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mb-4">
                            <h5
                                className="mb-3"
                                style={{ letterSpacing: "2px", color: "#818963" }}
                            >
                                De-Mart
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                                atque ea quis molestias. Fugiat pariatur maxime quis culpa
                                corporis vitae repudiandae aliquam voluptatem veniam, est atque
                                cumque eum delectus sint!
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <h5
                                className="mb-3"
                                style={{ letterSpacing: "2px", color: "#818963" }}
                            >
                                links
                            </h5>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-1">
                                    <NavLink
                                        to="/"
                                        style={({ isActive }) => {
                                            return {
                                                fontWeight: isActive ? "bold" : "",
                                                color: isActive ? "orange" : "#4f4f4f",
                                            };
                                        }}
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="mb-1">
                                    <NavLink
                                        to="/products"
                                        style={({ isActive }) => {
                                            return {
                                                fontWeight: isActive ? "bold" : "",
                                                color: isActive ? "orange" : "#4f4f4f",
                                            };
                                        }}
                                    >
                                        Products
                                    </NavLink>
                                </li>
                                <li className="mb-1">
                                    <NavLink
                                        to="/wishlist"
                                        style={({ isActive }) => {
                                            return {
                                                fontWeight: isActive ? "bold" : "",
                                                color: isActive ? "orange" : "#4f4f4f",
                                            };
                                        }}
                                    >
                                        Wishlist
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/cart"
                                        style={({ isActive }) => {
                                            return {
                                                fontWeight: isActive ? "bold" : "",
                                                color: isActive ? "orange" : "#4f4f4f",
                                            };
                                        }}
                                    >
                                        Cart
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <h5
                                className="mb-1"
                                style={{ letterSpacing: " 2px", color: "#818963" }}
                            >
                                opening hours
                            </h5>
                            <table
                                className="table"
                                style={{ color: "#4f4f4f", borderColor: "#666" }}
                            >
                                <tbody>
                                    <tr>
                                        <td>Mon - Fri:</td>
                                        <td>8am - 9pm</td>
                                    </tr>
                                    <tr>
                                        <td>Sat - Sun:</td>
                                        <td>8am - 1am</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: "#5a5a5a" }}>
                    © 2023 Copyright: Deepak Sahu
                </div>
            </footer>
        </div>
    );
}