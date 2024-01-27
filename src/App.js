import { useState,useEffect } from "react";
import {trailResults, findTrails} from "./APIs/prescriptiontrails"

function App() {
  const [zip, setZip] = useState("")
  
  useEffect(() => {
    // This code runs when `zip` changes
    console.log(zip);
  }, [zip]);


  return (
   <div>
    <form onSubmit={(e) => {
        e.preventDefault();
        // do stuff

      }}>
      <input type="text" placeholder="name" onChange={(e) => {
        setZip(e.target.value)
      }}/>
      <input type="submit" value="Submit"/>
    </form>
   </div>
  );
}

export default App;
