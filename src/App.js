import { useState,useEffect } from "react";
import Slideshow from "./Components/slideshow"

function App() {
  const trail1 = {
    city:  "Irvine",
    country: "United States",
    description: "fire road",
    difficulty: "Intermediate",
    directions: "top - Ridge Park, bottom - Bommer Canyon",
    features: "",
    id: 279268,
    lat: "33.65656",
    length: "1.0",
    lon: "-117.80883",
    name: "West Fork",
    rating: 2,
    region: "California",
    thumbnail: "https://images.singletracks.com/blog/wp-content/uploads/2014/10/2014-10-09095330HDR-orig-scaled.jpg",
    url: "https://www.singletracks.com/bike-trails/west-fork/"
  }
  return (
    <div>
      <h1> TEST, TEST@louie</h1>
      <Slideshow name={trail1.city} location={trail1.name} />
    </div>
    
import {getResponse} from "./APIs/prescriptiontrails"

function App() {
  const [zip, setZip] = useState("")
  const [trailResults, setTrailResults] = useState({})

  useEffect(() => {
    // This code runs when `zip` changes
    console.log(zip)
    console.log(trailResults);
  }, [zip, trailResults]);


  return (
    <div>
      <button onClick={() => {
        getResponse(zip).then(response => {
          setTrailResults(response)
        })
      }}> CLICK ME </button>

      {/* <button onClick={() => {
        console.log(trailResults)
      }}> CLICK ME 2</button> */}

      <h1> TEST, TEST@louie</h1>
    </div>
  );
}

export default App;
