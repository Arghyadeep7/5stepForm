import { Card, Form, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

const Forgot = () => {

    return (
        <Card style={{ width: '330px', padding: "7px", boxShadow: "2px 5px 3px 7px" }} className="position-absolute top-50 start-50 translate-middle">
        <Card.Body>
            
            <h1 className="text-center mb-4">RESET PASSWORD</h1>

            <Form>
                <h5 className="mt-3 mb-3">Email</h5>
                <Form.Control size="lg" type="email" placeholder="Enter email" id="email" required/>

                <div className="text-center mt-4">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        Try logging in <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </Link>
                </div>

                <div className="text-center mt-4">
                    <Button variant="outline-primary" size="lg" type="submit">SEND RESET MAIL</Button>
                </div>
            </Form>

        </Card.Body>
        </Card>
    )
}

export default Forgot