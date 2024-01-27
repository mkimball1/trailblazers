import { useState,useEffect } from "react";
import { getTrails } from "../APIs/rapidapi"
import { convertZipToLatLong } from "../APIs/thezipcodes"
import "./UserInput.css"

import { Card } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Flex, Tooltip } from 'antd';
import { Input } from 'antd';
import { Slider } from 'antd';
import { Checkbox } from 'antd';



function UserInput({zip, setZip, trailResults, setTrailResults}) {
    const [radius, setRadius] = useState(25)
    const [difficulty, setDifficulty] = useState({
        Beginner: true,
        Intermediate: true,
        Advanced: true,
    })

    useEffect(() => {
    //   console.log(radius)
    //   console.log(difficulty)
    }, [radius, difficulty]);
  
    const submitZipcode = (e) => {
      e.preventDefault();
      convertZipToLatLong(zip).then(data => {
        console.log("Data: ", data)
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
            // TODO: Get current long and lat & update zipcode
            // Make API call to find lat & long
            let latitude = 37.5538 //placeholder value
            let longitude = -122.27 //placeholder value
            let my_data = {
                latitude: latitude, 
                longitude: longitude,
                radius: radius,
                difficulty: difficulty
            }
            getTrails(my_data).then(response => {
                setTrailResults(response)
            })
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