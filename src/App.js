import { useState,useEffect } from "react";
import {getResponse, convertZipToLatLong} from "./APIs/prescriptiontrails"

function App() {
  const [zip, setZip] = useState("92697")
  const [trailResults, setTrailResults] = useState({})

  useEffect(() => {
    // This code runs when `zip` changes
    // console.log(zip)
    console.log(trailResults);
  }, [zip, trailResults]);


  return (
    <div>
      <button onClick={() => {
        getResponse(zip).then(response => {
          setTrailResults(response)
        })

      //   convertZipToLatLong(92697).then((data) => {
      //     console.log(`Lat: ${data.longitude}, Long: ${data.latitude}`)
      // })

        // convertZipToLatLong(92697)
      }}> TEST!! CLICK ME </button>

      {/* <button onClick={() => {
        console.log(trailResults)
      }}> CLICK ME 2</button> */}

      <h1> TEST, TEST@louie</h1>
    </div>
  );
}

export default App;
