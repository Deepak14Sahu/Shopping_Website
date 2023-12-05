import "./CSS/ProductList.css"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getAllProducts, getCartProducts, addCartProduct } from "../features/apiProvider";

function ProductList() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getAllProducts())
        dispatch(getCartProducts())
    }, [dispatch])

    const Products = useSelector((state) => state.product.products)
    const cart = useSelector((state) => state.cart.cart)

    return (
        <div className="container" style={{ marginTop: "20px" }}>
            <div className="row">
                {Products &&
                    Products.map((product) => (
                        <div className="col-md-3 my-3" key={product.id}>
                            <div className="card-sl">
                                <div className="card-image ">
                                    <img
                                        src={product.image}
                                        alt="Product"
                                        onClick={() =>
                                            navigate(`${product.id}`)
                                        }
                                    />
                                </div>
                                <Link className="card-action">
                                    <i className="fa fa-heart fa-2x"></i>
                                </Link>
                                <div className="card-heading">{product.name}</div>
                                <div className="card-text">
                                    {product.description.slice(0, 90)}...
                                </div>
                                <div className="card-text">&#8377; {product.price}</div>

                                {cart.length !== 0 && cart.some((item) => item.id === product.id) ? <Link to={'/cart'}
                                    className="card-button text-decoration-none"
                                >
                                    Go to Cart
                                </Link> : <Link
                                    className="card-button text-decoration-none"
                                    onClick={() => dispatch(addCartProduct(product.id))}
                                >
                                    Add to Cart
                                </Link>}


                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default ProductList;