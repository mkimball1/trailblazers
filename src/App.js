import { useState,useEffect } from "react";
import UserInput from "./Components/UserInput";
import SlideShow from "./Components/SlideShow.js";
import { FormExample } from "./Components/Navbar.js"

//change 
import {UserLikedHikes, LikedHikesHeader} from "./Components/Likes.js"

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
  const trail2 = {
    "id": 287295,
    "name": "Water Dog Lake Park",
    "url": "https://www.singletracks.com/bike-trails/water-dog-lake-park/",
    "length": 20,
    "description": "It's right in town (located in Belmont, just off Ralston and Alameda), and somehow that makes you think safe. Think again...if you choose to, you can get quite a bit of excitement here! Technical, very steep climbs, twisty singletrack, crazy little descents and quite a bit of poison oak make this much more challenging than Arastradero Preserve.\n\nIf you stick to the main trail (called Lake Road) it's not so bad. But if you want to do some real exploring, I'd strongly recommend riding with someone who knows the place because the network of side trails can get you confused and cause a lot of extra climbing!\n\nPlease keep in mind that this is a very busy multi-use trail system maintained by volunteers. Go out of your way to be courteous and yield the right of way to hikers. Please stay off the trails when they are wet and observe the sunset trail closure.",
    "directions": "From U.S. 101, take Ralston Av. west, past El Camino Real and The Alameda de las Pulgas. Just past this last street, keep your eyes open for Lyall Way on the left, just as the road begins to climb. Turn left on Lyall. You will come to a stop sign at Lake Road. Park on the left side of Lyall just past this stop sign. The entrance to Water Dog Lake is at the corner. A newer (and probably better) place to park is the parking lot at the end of Carlmont Drive. To reach this, turn left on Lake, then right onto Carlmont. Carlmont will dead-end at the parking lot.",
    "city": "Belmont",
    "region": "California",
    "country": "United States",
    "lat": "37.50344",
    "lon": "-122.29875",
    "difficulty": "Intermediate",
    "features": "Drinking water, E-bikes permitted, Restrooms",
    "rating": 4.42,
    "thumbnail": "https://images.singletracks.com/blog/wp-content/uploads/2005/06/1146899475-orig.jpg"
  }




  const [zip, setZip] = useState("");
  const [trailResults, setTrailResults] = useState({});
  // const [likedTrails, setLikedTrails] = useState({})

  const [likedTrails, setLikedTrails] = useState({
    287295: trail2,
    279268: trail1
  });

  // console.log(likedTrails)

  useEffect(() => {
    // console.log(zip)
    // console.log(trailResults)
  }, [zip, trailResults, likedTrails]);

  return (
    <>
    <FormExample/>
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
    
    <LikedHikesHeader/>

    <UserLikedHikes 
      likedTrails = {likedTrails}  
      setLikedTrails = {setLikedTrails}
    />

    </> 
  )
}

export default App;
