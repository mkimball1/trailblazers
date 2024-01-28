import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo1 from "../images/picture-logo.png";
import logo2 from "../images/text-logo.png";
import "./Navbar.css"
import {createUser} from "../APIs/userdata"

export function FormExample({username, setUsername, likedTrails, setLikedTrails}) {
  // console.log("HELP", username, setUsername, likedTrails, setLikedTrails)

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setUsername(e.target.value);
  };

  useEffect(() => {
    console.log(username)
  },[username])

  return (
    <Navbar bg="light">
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
              value={username}
              onChange={handleInputChange}
            />
          </Col>
          <Col>
            <Button onClick={()=> {
              let data = {
                username: username,
                likedTrails: likedTrails
              }
              createUser(data)
            }} className='save-button' > Save </Button>
            <Button onClick={() => {

            }}className="load-button"> Load </Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

export default NaviBar