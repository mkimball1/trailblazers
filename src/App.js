import { useState,useEffect } from "react";
import {getResponse, convertZipToLatLong} from "./APIs/prescriptiontrails"

function App() {
  const [zip, setZip] = useState("94404")
  const [trailResults, setTrailResults] = useState({})

  useEffect(() => {
    // This code runs when `zip` changes
    console.log(trailResults);
  }, [zip, trailResults]);

  const submitZipcode = () => {
    convertZipToLatLong(zip).then(data => {
      let my_data = {
        latitude: data.latitude,
        longitude: data.longitude
      }
      getResponse(my_data).then(response => {
          setTrailResults(response)
      })
  })
  }

  return (
    <div>
      <button onClick={submitZipcode}> SUBMIT </button>

      <h1> TEST, TEST@louie</h1>
    </div>
  );
}

export default App;
