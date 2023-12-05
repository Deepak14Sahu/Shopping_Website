import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getWishlistProducts, removeWishlistProduct } from "../features/apiProvider";

function Wishlist() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getWishlistProducts())
    }, [dispatch])
    const products = useSelector(state => state.wishlist.wishlist)
    return (
        <>
            <p className="h1 text-center my-3">
                Your Wishlist - {products.length} item
            </p>
            {products.length === 0 ? (
                <p className="h4 text-center " style={{ margin: "8%" }}>
                    Nothing in the wishlist
                </p>
            ) : (
                <div className="container" style={{ marginTop: "20px" }}>
                    <div className="row">
                        {products && products.map((product) => (
                            <div className="col-md-3 my-3" key={product.id}>
                                <div className="card-sl">
                                    <div className="card-image ">
                                        <img
                                            src={product.image}
                                            alt="Product"
                                            onClick={() => navigate(`../products/${product.id}`)}
                                        />
                                    </div>

                                    <div className="card-heading">{product.name}</div>
                                    <div className="card-text">
                                        {product.description.slice(0, 90)}...
                                    </div>
                                    <div className="card-text">${product.price}</div>
                                    <Link
                                        className="card-button text-decoration-none"
                                        onClick={() => dispatch(removeWishlistProduct(product.id))}
                                    >
                                        Remove
                                        <i
                                            className="fa fa-trash align-self-center mx-2"
                                            style={{ fontSize: "20px", color: "red" }}
                                        ></i>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default Wishlist;