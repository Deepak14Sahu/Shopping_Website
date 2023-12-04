import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { getCartProducts, removeCartProduct } from "../features/CartSlice";

function CartItem({ product }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = () => {
        dispatch(removeCartProduct(product.id))

    };
    const handleQuantityChange = (e, productId) => {
        const newQuantity = parseInt(e.target.value, 10);
    };

    return (
        <tr>
            <td data-th="Product">
                <div className="row">
                    <div className="col-md-3 text-left">
                        <img
                            src={product.image}
                            alt=""
                            className="img-fluid d-none d-md-block rounded mb-2 shadow"
                            onClick={() =>
                                navigate(`../products/${product.id}`, { state: product })
                            }
                        />
                    </div>
                    <div className="col-md-9 text-left mt-sm-2">
                        <h4>{product.name}</h4>
                        <p className="font-weight-light">
                            {product.description.slice(0, 100)}...
                        </p>
                    </div>
                </div>
            </td>
            <td data-th="Price">&#8377; {product.price}</td>
            <td data-th="Quantity">
                <input
                    type="number"
                    className="form-control form-control-lg text-center"
                    value={product.quantity || 1}
                    onChange={(e) => handleQuantityChange(e, product.id)}
                />
            </td>
            <td className="actions" data-th="" style={{ textAlign: "center" }}>
                <div className="text-right">
                    <button
                        className="btn btn-white border-secondary bg-white btn-md mb-2"
                        onClick={handleDelete}
                    >
                        <i className="fa fa-trash" style={{ color: "red" }}></i>
                    </button>
                </div>
            </td>
        </tr>
    );
}

function CartPage() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCartProducts())
    }, [dispatch])
    const products = useSelector((state) => state.cart.cart);
    const cartQuantity = products.reduce(
        (cartQuantity, product) => cartQuantity + product.quantity,
        0
    );

    const total = useMemo(() => {
        return products.reduce(
            (total, product) => total + parseFloat(product.price),
            0
        );
    }, [products]);

    return products.length === 0 ? (
        <>
            <h3 className="display-5 my-2 text-center">Shopping Cart</h3>
            <p className="mb-5 text-center">
                <i className="text-info font-weight-bold">{products.length} </i>
                items in your cart
            </p>
            <p className="h4 text-center " style={{ margin: "6.7%" }}>
                Cart is empty!! Add something
            </p>
        </>
    ) : (
        <>
            <section className="pt-5 pb-5">
                <div className="container">
                    <div className="row w-100">
                        <div className="col-lg-12 col-md-12 col-12">
                            <h3 className="display-5 mb-2 text-center">Shopping Cart</h3>
                            <p className="mb-5 text-center">
                                <i className="text-info font-weight-bold">{cartQuantity} </i>
                                items in your cart
                            </p>

                            <table
                                id="shoppingCart"
                                className="table table-condensed table-responsive"
                            >
                                <thead>
                                    <tr>
                                        <th style={{ width: "60%" }}>Product</th>
                                        <th style={{ width: "12%" }}>Price/unit</th>
                                        <th style={{ width: "10%" }}>Quantity</th>
                                        <th style={{ width: "16%" }}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product) => (
                                        <CartItem key={product.id} product={product} />
                                    ))}
                                </tbody>
                            </table>
                            <div className="float-right text-right">
                                <h4>Total Amount:</h4>
                                <h1>&#8377; {total}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4 d-flex align-items-center">
                        <div className="col-sm-6 order-md-2 text-right">
                            <Link className="btn btn-primary mb-4 btn-lg pl-5 pr-5">
                                Checkout
                            </Link>
                        </div>
                        <div className="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
                            <Link to="/products" className="text-decoration-none">
                                <i className="fa fa-arrow-left mr-2"></i> Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CartPage;