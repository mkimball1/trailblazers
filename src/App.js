import { useState,useEffect } from "react";
import UserInput from "./Components/UserInput";

function App() {
  const [zip, setZip] = useState("")
  const [trailResults, setTrailResults] = useState({})

  useEffect(() => {
    console.log(zip)
    console.log(trailResults)
  }, [zip, trailResults]);

  return (
    <UserInput
      zip={zip}
      setZip={setZip}
      trailResults={trailResults}
      setTrailResults={setTrailResults}
    />
  );
}

export default App;
