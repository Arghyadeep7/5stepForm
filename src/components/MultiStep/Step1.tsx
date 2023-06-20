import {useState} from "react";

import { Card, Form, Button } from "react-bootstrap";

const Step1: React.FC<{next: ({}) => void, data: any}> = (props) => {

  const data = props.data;

  const [name, setName] = useState<string>(data.name?data.name:"");
  const [nameError, setNameError] = useState<boolean>(false);

  const nameHandler = (event: any) => {

    const val = event.target!.value;
    if(/^[a-zA-Z\s]*$/.test(val.trim())===true){
      setNameError(false);
    }else{
      setNameError(true);
    }

    setName(val);

  };


  const [email, setEmail] = useState<string>(data.email?data.email:"");
  const [emailError, setEmailError] = useState<boolean>(false);

  const emailHandler = (event: any) => {

    const val = event.target!.value;
    if(val.length>0 && /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(val.trim()) === true  && val.trim().includes(' ') === false) {
      setEmailError(false);
    }else{
      setEmailError(true);
    }

    setEmail(val);

  };


  const [phone_number, setNumber] = useState<string>(data.phone_number?data.phone_number:"");
  const [numberError, setNumberError] = useState<boolean>(false);

  const numberHandler = (event: any) => {

    const val = event.target!.value;
    if(/^[0-9]+$/.test(val)===true) {
      setNumberError(false);
    }else{
      setNumberError(true);
    }
    setNumber(val);

  };

  const nextHandler = () => {
    props.next({name: name.trim(), email: email.trim(), phone_number});
  }


  return (
    
    <Card style={{padding:"15px", boxShadow: "1px 2px 3px 4px"}} className="mt-5 mb-4">

      <h2 className="text-center">STEP-1</h2>
      <hr />

      <Form>
        <h5 className="mt-3">Name*</h5>
        <Form.Control type="text" placeholder="Enter name" id="name" value={name} onChange={nameHandler}/>
        {
          nameError && 
          <div style={{color: "red", fontWeight: "bold"}} className="mt-2">
            Name can only contain letters and spaces and must not be empty!
          </div>
        }

        <h5 className="mt-3">Email*</h5>
        <Form.Control type="email" placeholder="Enter email" id="email" value={email} onChange={emailHandler} />
        {
          emailError && 
          <div style={{color: "red", fontWeight: "bold"}} className="mt-2">
            Please enter a valid email address!
          </div>
        }

        <h5 className="mt-3">Phone Number*</h5>
        <Form.Control type="string" placeholder="Enter number" id="phone_number" value={phone_number===""?"":phone_number} onChange={numberHandler} />
        {
          numberError && 
          <div style={{color: "red", fontWeight: "bold"}} className="mt-2">
            Please enter a valid phone number!
          </div>
        }

        <div className="text-center mt-4">
          <Button variant="outline-primary" size="lg" onClick={nextHandler}
          disabled={ nameError || !name || emailError || !email || numberError || !phone_number}>
            <i className="fa-solid fa-forward"> NEXT</i>
          </Button>
        </div>
      </Form>
    </Card>
            
  );
}

export default Step1