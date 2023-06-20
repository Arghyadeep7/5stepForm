import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Container, ProgressBar, Row, Col, Button } from "react-bootstrap";

import { useAppDispatch } from "../../store/Hook";
import { logOut } from "../../store/ProfileSlice";

import { Obj, initialState} from "../../Models/Obj";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

const MultiStep = () => {

    const dispatch = useAppDispatch();

    const [step, setStep] = useState<number>(0);

    const [data, setData] = useState<Obj>(initialState);

    const prevHandler = (data: any) => {

        setData((prevState) => {
            return {...prevState, ...data};
        })

        setStep((prevState) => {
            return prevState - 1;
        });
    };

    const nextHandler = (data: any) => {

        setData((prevState) => {
            return {...prevState, ...data};
        })

        setStep((prevState) => {
            return prevState + 1;
        });

    };

    const navigate = useNavigate();

    const submitHandler = () => {
        
        navigate("/submitted");

    }

    return (
        <Container>

            <Row className="mt-4">
                <Col xs={10} sm={11}>
                    <h5>PROGRESS:</h5>
                    <ProgressBar animated now={step*20} label={`${step*20}%`} style={{padding: "0"}} />
                </Col>
                <Col xs={2} sm={1}>
                    <Button variant="outline-danger m-auto mt-3" onClick={()=>dispatch(logOut())}>
                        <i className="fa-solid fa-right-from-bracket"></i>
                    </Button>
                </Col>
            </Row>
            
            <Row>
                <Col>
                { step===0 && <Step1 next={nextHandler} data={data} />}
                { step===1 && <Step2 prev={prevHandler} next={nextHandler} data={data} />}
                { step===2 && <Step3 prev={prevHandler} next={nextHandler} data={data} />}
                { step===3 && <Step4 prev={prevHandler} next={nextHandler} data={data} />}
                { step===4 && <Step5 prev={prevHandler} submit={submitHandler} data={data} />}
                </Col>
            </Row>
            

        </Container>
    )
}

export default MultiStep