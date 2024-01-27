import { useState,useEffect } from "react";
import {getResponse} from "./APIs/prescriptiontrails"

function App() {
  const [zip, setZip] = useState("")
  const [trailResults, setTrailResults] = useState({})

  // setTrailResults(getResponse(zip))
  
  useEffect(() => {
    // This code runs when `zip` changes
    console.log("RETURN: ");
    console.log(trailResults);
  }, [zip, trailResults]);


  return (
    <div>
      <button onClick={() => {
        setTrailResults(getResponse(zip))
      }}> CLICK ME </button>

      <h1> TEST, TEST@louie</h1>
    </div>
  );
}

export default App;
