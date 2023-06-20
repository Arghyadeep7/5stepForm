import { Link } from "react-router-dom";

import { useAppDispatch } from "../../store/Hook";
import { logOut } from "../../store/ProfileSlice";

import { Container, Row, Col, ProgressBar, Button } from "react-bootstrap";

const Submitted = () => {

    const dispatch = useAppDispatch();

    return (
        <Container className="mt-4">
            
            <Row className="mt-4">
                <Col xs={10} sm={11}>
                    <h5>PROGRESS:</h5>
                    <ProgressBar animated now={100} label={`${100}%`} style={{padding: "0"}} />
                </Col>
                <Col xs={2} sm={1}>
                    <Button variant="outline-danger m-auto mt-3" onClick={()=>dispatch(logOut())}>
                        <i className="fa-solid fa-right-from-bracket"></i>
                    </Button>
                </Col>
            </Row>

            <div className="position-absolute top-50 start-50 translate-middle text-center">
                <h3>The form has been successfully submitted!</h3>
                <Button variant = "primary mt-3">
                    <Link to="/multistep" style={{textDecoration: "none", color:"white"}}>Submit another form</Link>
                </Button>
            </div>
        </Container>
    )
}

export default Submitted