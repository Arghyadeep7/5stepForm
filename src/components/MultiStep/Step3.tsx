import { useState } from "react";

import { Card, Form, Button, Badge } from "react-bootstrap";

import FileService from "../../Services/FileService";

const Step3: React.FC<{next: ({}) => void, prev: ({}) => void, data: any}> = (props) => {

  const [file, setFile] = useState<{name: string, bin: string}>(props.data.single_file===undefined?{}:props.data.single_file);

  const [uploading, setUploading] = useState<boolean>(false);


  const handleFile = async (event: any) => {

    try{

      setUploading(true);

      const f = await FileService(event.target!.files[0]);
      setFile(f);

      setUploading(false);
      
    }catch (error) {
      console.error('Error:', error);
    }
  }

  const prevHandler = () => {
    props.prev({single_file: file});
  }

  const nextHandler = () => {
    props.next({single_file: file});
  }

  return (
    
    <Card style={{padding:"15px", boxShadow: "1px 2px 3px 4px"}} className="mt-5 mb-4">

      <h2 className="text-center">STEP-3</h2>
      <hr />

      <Form >

        <h5 className="mt-3">Upload File*</h5>
        <Form.Control type="file" placeholder="Enter address line 1" id="file" onChange={handleFile}
        accept=".png, .pdf"
        required/>

        <div className="mt-1">
          <i>(only .pdf and .png files accepted)</i>
        </div>

        {file && 
          <Badge bg="primary" className="mt-2">{file.name}</Badge>
        }

        <div className="d-flex justify-content-evenly mt-4">
          <Button variant="outline-danger" size="lg" onClick={prevHandler}>
            <i className="fa-solid fa-backward"> {uploading?"Uploading file...":"PREV"}</i>
          </Button>
          <Button variant="outline-primary" size="lg" onClick={nextHandler} disabled={uploading || file.name===undefined}>
            <i className="fa-solid fa-forward"> {uploading?"Uploading file...":"NEXT"}</i>
          </Button>
        </div>

      </Form>
    </Card>
            
  );
}

export default Step3