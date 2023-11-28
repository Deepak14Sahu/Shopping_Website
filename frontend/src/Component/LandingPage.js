import Carousel from "react-bootstrap/Carousel";
import image1 from "./LandingPageImage/image1.jpg"
import image2 from "./LandingPageImage/image2.jpg"
import image3 from "./LandingPageImage/image3.jpg"

function LandingPage() {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    src={image1}
                    alt="First slide"
                    style={{ height: "580px" }}
                />
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    src={image2}
                    alt="Second slide"
                    style={{ height: "580px" }}
                />
                <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    src={image3}
                    alt="Third slide"
                    style={{ height: "580px" }}
                />
                <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default LandingPage;