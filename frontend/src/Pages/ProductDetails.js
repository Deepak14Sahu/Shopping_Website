import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";
import "./CSS/ProductDetails.css"
import { productDetailsAPI } from "../features/apiProvider";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCartProduct } from "../features/CartSlice";
import { useSelector } from 'react-redux'


const Check = ({ productId }) => {
    const cartProducts = useSelector(state => state.cart.cart)
    const response = cartProducts.filter((product) => product.id === parseInt(productId))
    if (response.length !== 0) {
        return true
    }
    return false
}



export default function ProductDetails() {
    const dispatch = useDispatch()
    const { productId } = useParams()
    const [productData, setProductData] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await productDetailsAPI({ productId })
                setProductData(data)
            } catch (error) {
                navigate("/*")
            }
        }
        fetchData()
    }, [productId, navigate])

    return (
        <Card className="product-card">
            <Row>
                <Col xs={1} style={{ alignSelf: "center" }}>
                    <Card.Img
                        className="product-image"
                        src={productData.image}
                    />
                </Col>
                <Col xs={4}>
                    <Card.Img src={productData.image} />
                </Col>
                <Col xs={6}>
                    <Card.Body>
                        <Card.Title className="product-title">{productData.name}</Card.Title>
                        <Card.Text className="product-description">{productData.description}</Card.Text>
                        <span className="product-price">&#8377; {productData.price}</span>
                        {Check({ productId }) ?
                            <Button variant="secondary" className="add-to-cart-btn" onClick={() => navigate("/cart")}>
                                Go to Cart
                            </Button> :
                            <Button variant="secondary" className="add-to-cart-btn" onClick={() => dispatch(addCartProduct(productId))}>
                                Add to Cart
                            </Button>
                        }

                    </Card.Body>
                </Col>
                <Col xs={1}>
                    <i
                        className="fa fa-heart fa-2x"
                        aria-hidden="true"
                    ></i>
                </Col>
            </Row>
        </Card>
    );
}