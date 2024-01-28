import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo1 from "../images/picture-logo.png";
import logo2 from "../images/text-logo.png";
import "./Navbar.css"
import {createUser, getUsers, updateUser} from "../APIs/userdata"


export function NavBar({username, setUsername, likedTrails, setLikedTrails}) {

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  useEffect(() => {
    console.log(username)
  },[username])

  return (
    <Navbar bg="light" className="full-width-navbar">
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
            <Button onClick={async ()=> {
              let data = {
                username: username,
                likedTrails: likedTrails
              };
              
              let users = await getUsers();
              console.log(users);

              const foundUser = users.find(user => user.username === username);
              console.log(foundUser);

              if (foundUser) {
                updateUser(username, data);
              }
              else {
                createUser(data)
              }

            }} className='save-button' > Save </Button>

            <Button className="load-button"
            onClick={async () => {

                let users = await getUsers();


                const foundUser = users.find(user => user.username === username);
                console.log(foundUser);


                if (foundUser) {
                  console.log("LOADED");
                  console.log(foundUser.likedTrails);
                  setLikedTrails(foundUser.likedTrails);
                }


                
                
            }}> Load </Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

// Trailblazer is a Full-stack webapplication built to find bike trails around a specified area. We utilize multiple public datasets and apis, host the frontend in React and user information in MongoDB cloud Storage.
export default NavBar 
