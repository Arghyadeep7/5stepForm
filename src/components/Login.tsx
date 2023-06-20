import { useState } from "react";

import { useAppDispatch } from "../store/Hook";
import { logIn } from "../store/ProfileSlice";

import { Card, Form, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

const Login = () => {

    const dispatch = useAppDispatch();

    const [email, setEmail] = useState<string>("");
    const [emailError, setEmailError] = useState<boolean>(false);

    const [password, setPassword] = useState<string>("");

    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const emailHandler = (event: any) => {

        setError(false);

        const val = event.target!.value.trim();
        if(val.length>0 && /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(val) === true) {
            setEmail(val);
            setEmailError(false);
        }else{
            setEmailError(true);
        }

    };

    const passwordHandler = (event: any) => {

        setError(false);

        const val = event.target!.value.trim();
        setPassword(val);
    };

    const submitHandler = async (event: any) => {

        event.preventDefault();

        setLoading(true);

        setError(false);

        const response = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password})
        }).then((res) => res.json());

        setLoading(false);

        if(response.authToken){
            dispatch(logIn(response.authToken));
        }else{
            setError(true);
        }

    }

    return (
        <Card 
        style={{ width: '330px', padding: "7px", boxShadow: "2px 5px 3px 7px" }}
        className="position-absolute top-50 start-50 translate-middle">
            <Card.Body>
                
                <h1 className="text-center mb-4">LOGIN</h1>

                <Form onSubmit={submitHandler}>
                    <h5 className="mt-3 mb-3">Email</h5>
                    <Form.Control size="lg" type="email" placeholder="Enter email" id="email" onChange={emailHandler}/>
                    {
                        emailError && 
                        <div style={{color: "red", fontWeight: "bold"}} className="mt-2">
                            Please enter a valid email address!
                        </div>
                    }

                    <br />

                    <h5 className="mt-3 mb-3">Password</h5>
                    <Form.Control size="lg" type="password" placeholder="Enter password" id="password" onChange={passwordHandler}/>

                    {error && 
                        <h6 className="mt-4 text-center" style={{color: "red"}}>INVALID CREDENTIALS!</h6>
                    }

                    <div className="text-center mt-3">
                        <Link to="/forgot" style={{ textDecoration: "none" }}>
                            Forgot Password <i className="fa-solid fa-circle-question"></i>
                        </Link>
                    </div>

                    <div className="text-center mt-4">
                        <Button variant="outline-primary" size="lg" type="submit"
                        disabled={error || loading || email==="" || emailError || password===""}>
                            {loading?"Authenticating...":"LOG IN"}
                        </Button>
                    </div>
                </Form>

            </Card.Body>
        </Card>
    )
}

export default Login