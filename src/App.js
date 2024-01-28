import { useState,useEffect } from "react";
import UserInput from "./Components/UserInput";
import SlideShow from "./Components/SlideShow.js";

//change 
import MyComponent from "./APIs/googlemaps.js";

function App() {
  const trail1 = {
    city: "Irvine",
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
  };

  const [zip, setZip] = useState("");
  const [trailResults, setTrailResults] = useState({});

  useEffect(() => {
    console.log(zip)
    console.log(trailResults)
  }, [zip, trailResults]);

  const colors = ["#0088FE", "#00C49F", "#FFBB28"];
  const coordinates = {
    latitude: 37.554947,
    longitude: -122.271057
  }
  // console.log(coordinates)

  return (
    <>
    <UserInput
      zip={zip}
      setZip={setZip}
      trailResults={trailResults}
      setTrailResults={setTrailResults} 
    />
    <SlideShow slides={colors}/>

    <MyComponent coordinates = {coordinates}/>
    </> 
  )
}

export default App;
