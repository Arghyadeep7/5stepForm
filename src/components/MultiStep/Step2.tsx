import {useState} from "react";

import { Card, Form, Row, Col, Button } from "react-bootstrap";

const Step2: React.FC<{next: ({}) => void, prev: ({}) => void, data: any}> = (props) => {

  const data = props.data;

  const [city, setCity] = useState<string>(data.city?data.city:"");
  const [cityError, setCityError] = useState<boolean>(false);

  const cityHandler = (event: any) => {
    const val = event.target!.value.trim();
    if(/^[a-zA-Z\s]*$/.test(val)===true){
      setCity(val);
      setCityError(false);
    }else{
      setCityError(true);
    }
  }


  const [state, setState] = useState<string>(data.state?data.state:"");
  const [stateError, setStateError] = useState<boolean>(false);

  const stateHandler = (event: any) => {
    const val = event.target!.value.trim();
    if(/^[a-zA-Z\s]*$/.test(val)===true){
      setState(val);
      setStateError(false);
    }else{
      setStateError(true);
    }
  }

  
  const [country, setCountry] = useState<string>(data.country?data.country:"");
  const [countryError, setCountryError] = useState<boolean>(false);

  const countryHandler = (event: any) => {
    const val = event.target!.value.trim();
    if(/^[a-zA-Z\s]*$/.test(val)===true){
      setCountry(val);
      setCountryError(false);
    }else{
      setCountryError(true);
    }
  };

  const [address_1, setAddress1] = useState<string>(data.address_1?data.address_1:"");
  const address1Handler = (event: any) => {
    setAddress1(event.target!.value);
  }

  const [address_2, setAddress2] = useState<string>(data.address_2?data.address_2:"");
  const address2Handler = (event: any) => {
    setAddress2(event.target!.value);
  }

  const [pincode, setPincode] = useState<number>(data.pincode?data.pincode:"");
  const pincodeHandler = (event: any) => {
    setPincode(event.target!.value);
  }

  const nextHandler = () => {
    props.next({address_1, address_2, city, state, pincode, country});
  }

  const prevHandler = () => {
    props.prev({address_1, address_2, city, state, pincode, country});
  }

  return (
    
    <Card style={{padding:"15px", boxShadow: "1px 2px 3px 4px"}} className="mt-5 mb-4">

      <h2 className="text-center">STEP-2</h2>
      <hr />

      <Form >

        <Row>
          <Col md={6}>
            <h5 className="mt-3">Address Line 1*</h5>
            <Form.Control type="text" placeholder="Enter address line 1" id="address_1" value={address_1} onChange={address1Handler} required/>
          </Col>
          <Col md={6}>
            <h5 className="mt-3">Address Line 2</h5>
            <Form.Control type="text" placeholder="Enter address line 2" id="address_2" value={address_2} onChange={address2Handler}/>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <h5 className="mt-3">City*</h5>
            <Form.Control type="text" placeholder="Enter city" id="city" value={city} onChange={cityHandler}/>
            {
              cityError && 
              <div style={{color: "red", fontWeight: "bold"}} className="mt-2">
                Please enter a valid city name!
              </div>
            }
          </Col>
          <Col md={6}>
            <h5 className="mt-3">State*</h5>
            <Form.Control type="text" placeholder="Enter state" id="state" value={state} onChange={stateHandler}/>
            {
              stateError && 
              <div style={{color: "red", fontWeight: "bold"}} className="mt-2">
                Please enter a valid state name!
              </div>
            }
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <h5 className="mt-3">Pincode*</h5>
            <Form.Control type="number" placeholder="Enter pincode" id="pincode" value={pincode===0?"":pincode} onChange={pincodeHandler}/>
          </Col>
          <Col md={6}>
            <h5 className="mt-3">Country*</h5>
            <Form.Control type="text" placeholder="Enter country" id="country" value={country} onChange={countryHandler}/>
            {
              countryError && 
              <div style={{color: "red", fontWeight: "bold"}} className="mt-2">
                Please enter a valid country name!
              </div>
            }
          </Col>
        </Row>

        <div className="d-flex justify-content-evenly mt-4">
          <Button variant="outline-danger" size="lg" onClick={prevHandler}><i className="fa-solid fa-backward"> PREV</i></Button>

          <Button variant="outline-primary" size="lg" onClick={nextHandler}
            disabled = {!address_1 || !pincode || cityError || !city || stateError || !state
                        || countryError || !country}
          ><i className="fa-solid fa-forward"> NEXT</i></Button>
        </div>

      </Form>
    </Card>
            
  );
}

export default Step2