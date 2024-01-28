import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo1 from "../images/picture-logo.png";
import logo2 from "../images/text-logo.png";
import "./Navbar.css"


function createUser(){
  const data = {
    "username": username,
    "sessions": []
  }
  axios.post('https://us-central1.gcp.data.mongodb-api.com/app/trailblazer-dufbj/endpoint/createUser', data)
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

export function NaviBar({username, setUser, currUser, setCurrUser, currSess, setCurrSess}) {
  return (
    <Navbar>
      <Form inline>
        <Row className="baseline-align">
          <Col>
            <img src={logo1} alt="description_of_image"/>
          </Col>
          <Col>
            <img className="textlogo" src={logo2} alt="description_of_image"/>
          </Col>
          <Col>
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </Col>
          <Col>
            <Button className='save-button' > Save </Button>
            <Button className="load-button"> Load </Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

export default NaviBar