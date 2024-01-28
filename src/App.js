import { useState,useEffect } from "react";
import UserInput from "./Components/UserInput";
import SlideShow from "./Components/SlideShow.js";
import { NaviBar } from "./Components/Navbar.js"


import backgroundImg from "./images/background.png";

//change 
import {UserLikedTrails, LikedTrailsHeader} from "./Components/Likes.js"

function App() {
  const [zip, setZip] = useState("");
  const [trailResults, setTrailResults] = useState({});
  const [likedTrails, setLikedTrails] = useState({});

  const [username, setUsername] = useState("");

  useEffect(() => {
    console.log(username)
    console.log(likedTrails)
    console.log(trailResults)
  }, [username, likedTrails]);

  return (
    <div style={{
      margin: "0px",
      backgroundImage: `url(${backgroundImg})`, // Using template literals
      height: "100vh", // Full height
      backgroundPosition: "center", // Center the image
      backgroundRepeat: "repeat", // Do not repeat the image
      backgroundSize: "cover" // Resize the background image to cover the entire container
    }}>
      <NaviBar 
        username={username} 
        setUsername={setUsername}
        likedTrails={likedTrails}
        setLikedTrails={setLikedTrails}
      />
      <UserInput
        zip={zip}
        setZip={setZip}
        trailResults={trailResults}
        setTrailResults={setTrailResults}
        // likes={likeStore}
        // likeResultes={setLikes}
      />

    <SlideShow 
      trailResults={trailResults}
      likedTrails = {likedTrails}  
      setLikedTrails = {setLikedTrails}
    />
      
      <LikedTrailsHeader/>

      <UserLikedTrails
        likedTrails = {likedTrails}  
        setLikedTrails = {setLikedTrails}
      />
    </div>
  )
}

export default App;
