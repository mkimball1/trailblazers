import { useState,useEffect } from "react";
import Slideshow from "./Components/slideshow";
import UserInput from "./Components/UserInput";

function App() {
  const trail1 = {
    city: "Irvine", //
    country: "United States", //
    description: "fire road",
    difficulty: "Intermediate", //
    directions: "top - Ridge Park, bottom - Bommer Canyon",
    features: "",
    id: 279268, //
    lat: "33.65656",
    length: "1.0", //
    lon: "-117.80883", 
    name: "West Fork", //
    rating: 2, //
    region: "California", //
    thumbnail: "https://images.singletracks.com/blog/wp-content/uploads/2014/10/2014-10-09095330HDR-orig-scaled.jpg",//
    url: "https://www.singletracks.com/bike-trails/west-fork/"
  };

  const [zip, setZip] = useState("");
  const [trailResults, setTrailResults] = useState({});

  useEffect(() => {
    console.log(zip)
    console.log(trailResults)
  }, [zip, trailResults]);

  return (
    <><UserInput
      zip={zip}
      setZip={setZip}
      trailResults={trailResults}
      setTrailResults={setTrailResults} /><Slideshow /></>

  );
}

export default App;
