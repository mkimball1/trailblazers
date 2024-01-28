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
        if (data){
          let my_data = {
            latitude: data.latitude,
            longitude: data.longitude,
            radius: radius,
            difficulty: difficulty
          }

          getTrails(my_data).then(response => {
              setTrailResults(response)
          })
          // TODO: Toast that says: Loaded zipcode: {zip}
        }
        else {
          // TODO : Toast that says: "invalid zip code"
          console.log("Invalid Zipcode")
        }
      })
    }

    const handleCheckboxes = (event) => {
        setDifficulty({
            ...difficulty,
            [event.target.name]: event.target.checked
        });
    };

    const formatter = (value) => `${value} miles`;
    
    return (
      <div>
        <Card className="form">
        <div className="row">
          <Input className="zipInput" size="large" placeholder="Zipcode" prefix={<EnvironmentOutlined/>} 
          value={zip}
          onChange={(e) => {
              setZip(e.target.value);
          }}/>
          <Button className="submitButton" type="primary" icon={<SearchOutlined />} 
          onClick={submitZipcode}>
          Search
          </Button>
          <Button danger className="currentLocation" type="primary" icon={<EnvironmentOutlined/>}
          onClick={(e) => {
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
                });
            }, (error) => {
                console.error(error);
            });
            }}
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