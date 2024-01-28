// React-related imports
import { useEffect, useState } from "react";

// Project-specific APIs
import { getCurrentPosition } from "../APIs/currentloc";
import { getTrails } from "../APIs/rapidapi";
import { convertZipToLatLong } from "../APIs/thezipcodes";
// Stylesheet
import "./UserInput.css";

// External libraries or frameworks
import { Button, Card, Checkbox, Input, Slider } from 'antd';
import { EnvironmentOutlined, SearchOutlined } from '@ant-design/icons';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function UserInput({zip, setZip, trailResults, setTrailResults}) {
    const [radius, setRadius] = useState(50)
    const [difficulty, setDifficulty] = useState({
        Beginner: true,
        Intermediate: true,
        Advanced: true,
    })

    useEffect(() => {
    }, [radius, difficulty]);
  
    const submitZipcode = (e) => {
      e.preventDefault();
      convertZipToLatLong(zip).then(data => {
          if (data) {
              let my_data = {
                  latitude: data.latitude,
                  longitude: data.longitude,
                  radius: radius,
                  difficulty: difficulty
              }

              getTrails(my_data).then(response => {
                  setTrailResults(response);

                  // Toast: Results found
                  toast.success("Results found");
              })
          } else {
              // Toast: Invalid Zip Code
              toast.error("Invalid Zip Code");
              console.log("Invalid Zipcode")
          }
      });
  }

  const handleCurrentLocationClick = (e) => {
      e.preventDefault();
      getCurrentPosition((latitude, longitude) => {
          const my_data = {
              latitude: latitude,
              longitude: longitude,
              radius: radius,
              difficulty: difficulty
          };

          getTrails(my_data).then(response => {
              setTrailResults(response);

              // Toast: Results found
              toast.success("Results found");
          });
      }, (error) => {
          // Toast: Error fetching current position
          toast.error("Error fetching current position");
          console.error(error);
      });
  };

    const handleCheckboxes = (event) => {
        setDifficulty({
            ...difficulty,
            [event.target.name]: event.target.checked
        });
    };

    const formatter = (value) => `${value} miles`;
    
    return (
      <div style={{margin: "50px"}}>
        <ToastContainer />
        <Card  className="form">
        <div className="row">
          <Input className="zipInput" size="large" placeholder="Zipcode" prefix={<EnvironmentOutlined/>} 
          value={zip}
          onChange={(e) => {
              setZip(e.target.value);
          }}/>
          <Button className="submitButton" type="primary" icon={<SearchOutlined />} 
          // TOAST: searching!
          onClick={submitZipcode}>
          Search
          </Button>
          <Button danger className="currentLocation" type="primary" icon={<EnvironmentOutlined/>}
          onClick={handleCurrentLocationClick}
            />
        </div>
        
        <div className="row" style={{height: "30px", paddingTop: "10px"}}>
          <p> Radius: {radius} miles</p>
          <Slider className="slider" defaultValue={50} tooltip={{formatter}}
          onChange={(e) => {
            setRadius(e)
          }}
          />
        </div>

        <div className="row" style={{height: "30px"}}>
          <p> Difficulty: </p>
        </div>
        <div className="row">
          <Checkbox className="checkbox" name="Beginner" checked={difficulty.Beginner} onChange={handleCheckboxes} > Beginner </Checkbox>
          <Checkbox className="checkbox" name="Intermediate" checked={difficulty.Intermediate} onChange={handleCheckboxes}> Intermediate </Checkbox>
          <Checkbox className="checkbox" name="Advanced" checked={difficulty.Advanced} onChange={handleCheckboxes}> Advanced </Checkbox>
        </div>
        </Card>
      </div>
    );
}

export default UserInput