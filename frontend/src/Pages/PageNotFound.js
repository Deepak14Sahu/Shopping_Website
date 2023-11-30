import { Card } from "react-bootstrap"
import "./CSS/PageNotFound.css"
import { Link } from "react-router-dom"

export const PageNotFound = () => {
    return (
        <Card className="m-auto mt-3">

            <div className="page-not-found">
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
                <p>Try <Link to='/' style={{ marginLeft: "5px", textDecoration: "none", fontWeight: "bold", color: "orange" }}>Homepage</Link></p>
            </div>
        </Card>
    )
}


