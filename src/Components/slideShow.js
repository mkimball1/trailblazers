import { useState,useEffect } from "react";
import {UserLikedHikes, LikedHikesHeader, updateLikedHikes} from "./Likes.js"
import "./SlideShow.css"
import { Button} from 'antd';
import TrailSlide from "./Slide.js";

function SlideShow({trailResults, likedTrails, setLikedTrails}) {
  console.log(trailResults)

  const slides = trailResults ? Object.values(trailResults).map(traildata => 
    <TrailSlide key={traildata.id} trail={traildata} />
  ) : [];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPreviousComponent = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + slides.length) % slides.length);
  };
  const goToNextComponent = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
  };

  if (slides.length === 0) {
    // Optionally render something else or nothing if there are no slides
    return null; // or return <SomeOtherComponent /> or any JSX you prefer
}
  console.log("liked trails: ", likedTrails)
  console.log("curr trail: ", slides[currentIndex].key)

  return (
    <div>
      {slides[currentIndex]}
      <div className="container">
        <Button onClick={() => {goToPreviousComponent()}}> Prev </Button>
        

        {likedTrails.hasOwnProperty(slides[currentIndex].key) ? 
        <Button type="primary" danger onClick={() => {
          updateLikedHikes(trailResults[currentIndex], likedTrails, setLikedTrails)
        }}> Dislike </Button>
        : 
        <Button type="primary" onClick={() => {
          updateLikedHikes(trailResults[currentIndex], likedTrails, setLikedTrails)
        }}> Like </Button>
        }


        

        <Button onClick={() => {goToNextComponent()}}> Next </Button>
      </div>
      
    </div>
  );
}

export default SlideShow
