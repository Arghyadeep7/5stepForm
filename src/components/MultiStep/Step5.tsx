import { useState } from "react";

import { Row, Col, Form, Card, Badge, Button } from "react-bootstrap";

import { useAppSelector } from "../../store/Hook";

const Step5: React.FC<{prev: ({}) => void, submit:() => void, data: any}> = (props) => {

    const [loading, setLoading] = useState<boolean>(false);

    const token = useAppSelector(state => state.profile.authToken);

    console.log(token);

    const {name, email, phone_number, address_1, address_2, city, state, country, pincode, geolocation, single_file, multi_ups1, multi_ups2, multi_ups3, multi_ups4, multi_ups5} = props.data;

    const data = {
        name, email, phone_number,
        address_1, address_2, city, state, country, pincode,
        single_file: single_file.bin,
        geolocation, multi_ups1: multi_ups1.bin, multi_ups2: multi_ups2.bin,
        multi_ups3: multi_ups3.bin, multi_ups4: multi_ups4.bin, multi_ups5: multi_ups5.bin
    };

    const submitHandler = async () => {
        console.log(data);

        setLoading(true);

        const response = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/form",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.r43LaY20ywitt_QiTkCt4mPOKAQjaxcCzZA2c5KEZoH-YfKeVoz4n2Svu1HzREoDh7owsAZPeGYg0QBf8OEImdGuEBxIJws2.ZfK_D1uP3WFuD93lPZC6tg.5o87pszKs3EgYFBwK0K32as_JWyAOARUphfR5rutaLffG145QTtIuV3X_V4XDQoWTNYLLa7pw4s-LNz8r0DJHrhxuqRDQiyPYKbKsPvIIFY0v6ZP2ESTmyaFCNGFQ-GDn_991pjn8iSwkW3RgPlzSqqpLzkG7mYkzh0zLF3Am_w.1oqmlN2DJLjy-7H1FXu8SgIL4svH0DBf9ApKUzQ7xis"
            },
            body: JSON.stringify(data)
        }).then((res) => res.json());

        console.log(response);

        setLoading(false);

        props.submit();
    }
  
    return (
        <>
            <h2 className="text-center mt-3">STEP-5</h2>
            <hr />
            <Row className="mt-4">

                <Col sm={6} lg={3}>
                    <Card className="p-3 mb-4">
                        <h4>Name:</h4>
                        <Form.Control type="text" id="name" value={name}  className="mb-4" readOnly/>

                        <h4>Email:</h4>
                        <Form.Control type="email" id="name" value={email}  className="mb-4" readOnly/>

                        <h4>Phone Number:</h4>
                        <Form.Control type="number" id="name" value={phone_number}  className="mb-4" readOnly/>
                    </Card>
                </Col>

                <Col sm={6} lg={3}>
                    <Card className="p-3 mb-4">
                        <h4>Address Line 1:</h4>
                        <Form.Control type="text" id="name" value={address_1}  className="mb-4" readOnly/>

                        <h4>Address Line 2:</h4>
                        <Form.Control type="text" id="name" value={address_2}  className="mb-4" readOnly/>

                        <h4>Pincode:</h4>
                        <Form.Control type="text" id="name" value={pincode}  className="mb-4" readOnly/>
                    </Card>
                </Col>

                <Col sm={6} lg={3}>
                    <Card className="p-3 mb-4">
                        <h4>City:</h4>
                        <Form.Control type="text" id="name" value={city}  className="mb-4" readOnly/>

                        <h4>State:</h4>
                        <Form.Control type="text" id="name" value={state}  className="mb-4" readOnly/>

                        <h4>Country:</h4>
                        <Form.Control type="text" id="name" value={country}  className="mb-4" readOnly/>
                    </Card>
                </Col>

                <Col sm={6} lg={3}>
                    <Card className="p-3 mb-4">
                        <h4>Single File:</h4>
                        <Badge bg="primary" className="mt-1 mb-4">{single_file.name}</Badge>

                        <h4 className="mt-2">Multiple File(s):</h4>
                        <div>
                            {
                                multi_ups1 && <Badge bg="primary" className="mb-1">{multi_ups1.name}</Badge>
                            }
                            {
                                multi_ups2 && <Badge bg="primary" className="mb-1">{multi_ups2.name}</Badge>
                            }
                            {
                                multi_ups3 && <Badge bg="primary" className="mb-1">{multi_ups3.name}</Badge>
                            }
                            {
                                multi_ups4 && <Badge bg="primary" className="mb-1">{multi_ups4.name}</Badge>
                            }
                            {
                                multi_ups5 && <Badge bg="primary" className="mb-1">{multi_ups5.name}</Badge>
                            }
                        </div>
                        <i>(only .pdf & .png files accepted)</i>
                    </Card>
                </Col>

            </Row>

            <Row className="mt-4 mb-4">
                <Col md={7} className="m-auto text-center mb-5">
                    <h5>Geolocated at: <i className="fa-solid fa-location-dot">&nbsp;{geolocation}</i></h5>
                </Col>
                <Col md={5} className="m-auto mb-5">
                    <div className="d-flex justify-content-evenly">
                        <Button variant="outline-danger" size="lg" onClick={props.prev} disabled={loading} >
                            <i className="fa-solid fa-backward"> EDIT</i>
                        </Button>
                        <Button variant="outline-primary" size="lg" onClick={submitHandler} disabled={loading} >
                            <i className="fa-solid fa-file-arrow-up"> 
                            {loading?" SUBMITTING...":" SUBMIT"}</i>
                        </Button>
                    </div>      
                </Col>
            </Row>

        </>
    )

}

export default Step5;