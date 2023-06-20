import { Container, ProgressBar, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

const Submitted = () => {
  return (
    <Container className="mt-4">
        <h5>PROGRESS:</h5>
        <ProgressBar animated now={100} label={`${100}%`} style={{padding: "0"}} />
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