import { useState,useEffect } from "react";
import {trailResults, findTrails} from "./APIs/prescriptiontrails"

function App() {
  const [zip, setZip] = useState("")
  
  useEffect(() => {
    // This code runs when `zip` changes
    console.log(zip);
  }, [zip]);


  return (
    <h1> TEST, TEST@louie</h1>
  );
}

export default App;
