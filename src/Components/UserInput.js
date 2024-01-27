import { useState,useEffect } from "react";
import { getTrails } from "../APIs/rapidapi"
import { convertZipToLatLong } from "../APIs/thezipcodes"
import "./UserInput.css"

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
        console.log("HELLO: ", data)
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

    return (
      <div>
        <form>
            <input
                type="text"
                placeholder="Enter Zipcode..."
                value={zip}
                onChange={(e) => {
                    setZip(e.target.value);
                }}
            />
            <br/>
            <label> Search Radius: </label>
            <input placeholder="Search Radius" 
                   type="number" 
                   id="quantity" 
                   name="quantity"
                   min="1" 
                   defaultValue={radius}
                   onChange={(e) => {
                    setRadius(e.target.value)
                   }}></input>
            <br/>
            <label> Difficulty: </label> <br/>
            <input type="checkbox" name="Beginner" checked={difficulty.Beginner} onChange={handleCheckboxes}/>
            <label> Beginner </label><br/>
            <input type="checkbox" name="Intermediate" checked={difficulty.Intermediate} onChange={handleCheckboxes}/>
            <label> Intermediate </label><br/>
            <input type="checkbox" name="Advanced" checked={difficulty.Advanced} onChange={handleCheckboxes}/>
            <label > Advanced </label>
            <br/>

            <button onClick={(e) => {
            // setZip(getCurrentZip()); // TODO: Get current location & update zipcode
            submitZipcode(e)
            }}> Use Current Location </button>
        
            <button onClick={submitZipcode}> SUBMIT </button>
        </form>
  
        <h1> TEST, TEST@louie</h1>
      </div>
    );
}

export default UserInput