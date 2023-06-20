import {useState, useEffect} from "react";

import { Card, Form, Button, Badge, Row, Col } from "react-bootstrap";

import { F } from "../../Models/IFile";

import FileService from "../../Services/FileService";


const Step4: React.FC<{next: ({}) => void, prev: ({}) => void, data: any}> = (props) => {

  const data = props.data;

  const [geolocation, setLocation] = useState<string>(data.geolocation?data.geolocation:"Loading...");

  const [multi_ups1, setFile1] = useState<{name: string, bin:string}>(data.multi_ups1?data.multi_ups1:F);
  const [multi_ups2, setFile2] = useState<{name: string, bin:string}>(data.multi_ups2?data.multi_ups2:F);
  const [multi_ups3, setFile3] = useState<{name: string, bin:string}>(data.multi_ups3?data.multi_ups3:F);
  const [multi_ups4, setFile4] = useState<{name: string, bin:string}>(data.multi_ups4?data.multi_ups4:F);
  const [multi_ups5, setFile5] = useState<{name: string, bin:string}>(data.multi_ups5?data.multi_ups5:F);

  const [count, setCount] = useState<number>(0);

  useEffect(() => {

    setLoading(true);

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(
        async (position: GeolocationPosition) => {

          const pos = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          };
  
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.lat}&lon=${pos.lon}&appid=${process.env.REACT_APP_API_KEY}`)
                                  .then(response => response.json());

          setLocation(response.name + ", " + response.sys.country);
        }
      );
    } else {
      setLocation("Location data denined!");
    }

    setLoading(false);

    let c = 0;

    if(multi_ups5.name){
      c += 1;
    }
    if(multi_ups4.name){
      c += 1;
    }
    if(multi_ups3.name){
      c += 1;
    }
    if(multi_ups2.name){
      c += 1;
    }
    if(multi_ups1.name){
      c += 1;
    }

    setCount(c);

  }, [multi_ups1, multi_ups2, multi_ups3, multi_ups4, multi_ups5]);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);


  const handleFiles = async (event: any) => {

    const len = event.target!.files.length;

    if(len===0){  return; }

    if(len > 5){

      setError(true);
      event.target.value = [];

      setFile5(F);
      setFile4(F);
      setFile3(F);
      setFile2(F);
      setFile1(F);

    }else{

      setLoading(true);

      if(len===5){
        const f5 = await FileService(event.target!.files[4]);
        setFile5(f5);
      }else{
        setFile5(F);
      }

      if(len >= 4){
        const f4 = await FileService(event.target!.files[3]);
        setFile4(f4);
      }else{
        setFile4(F);
      }

      if(len >= 3){
        const f3 = await FileService(event.target!.files[2]);
        setFile3(f3);
      }else{
        setFile3(F);
      }

      if(len >= 2){
        const f2 = await FileService(event.target!.files[2]);
        setFile2(f2);
      }else{
        setFile2(F);
      }

      if(len >= 1){
        const f1 = await FileService(event.target!.files[0]);
        setFile1(f1);
      }else{
        setFile1(F);
      }

      setLoading(false);

      setError(false);
    }

  }

  const prevHandler = () => {
    props.prev({geolocation, multi_ups1, multi_ups2, multi_ups3, multi_ups4, multi_ups5,});
  }

  const nextHandler = () => {
    props.next({geolocation, multi_ups1, multi_ups2, multi_ups3, multi_ups4, multi_ups5,});
  }

  return (
    
    <Card style={{padding:"15px", boxShadow: "1px 2px 3px 4px"}} className="mt-5 mb-4">

      <h2 className="text-center">STEP-4</h2>
      <hr />

      <Form>

        <div className="d-flex justify-content-between mt-3">
          <h5>Upload File(s)*</h5>
          <h6 style={{color: error?"red":"black"}}>Maximum 5 files</h6>
        </div>

        <Form.Control type="file" placeholder="Enter address line 1" id="address1" 
        accept=".png, .pdf" multiple onChange={handleFiles}
        required/>

        <div className="mt-1">
          <i>(only .pdf and .png files accepted)</i>
        </div>

      </Form>

      <div className="mt-2">
        {
          multi_ups1 && <Badge bg="primary" className="m-1">{multi_ups1.name}</Badge>
        }
        {
          multi_ups2 && <Badge bg="primary" className="m-1">{multi_ups2.name}</Badge>
        }
        {
          multi_ups3 && <Badge bg="primary" className="m-1">{multi_ups3.name}</Badge>
        }
        {
          multi_ups4 && <Badge bg="primary" className="m-1">{multi_ups4.name}</Badge>
        }
        {
          multi_ups5 && <Badge bg="primary" className="m-1">{multi_ups5.name}</Badge>
        }
      </div>

      <Row className="mt-3 mb-2">
        <Col sm={4} md={3}>
          <h5>Geo-Located at:</h5>  
        </Col>
        <Col sm={8} md={9}>
          <Form.Control type="text" disabled readOnly value={geolocation===""?"Loading...":geolocation} />
        </Col>
      </Row>
      

      <div className="d-flex justify-content-evenly mt-4">
        <Button variant="outline-danger" size="lg" onClick={prevHandler} disabled={loading}>
          <i className="fa-solid fa-backward"> {loading?"Loading...":"PREV"}</i>
        </Button>
        <Button variant="outline-primary" size="lg" disabled={loading || count===0} onClick={nextHandler}>
          <i className="fa-solid fa-forward"> {loading?"Loading...":"NEXT"}</i>
        </Button>
      </div>
    </Card>
            
  );
}

export default Step4