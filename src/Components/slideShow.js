import { useState,useEffect } from "react";
import {UserLikedHikes, LikedHikesHeader, updateLikedHikes} from "./Likes.js"

import { Button} from 'antd';
import TrailSlide from "./Slide";

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

  return (
    <div>
      {slides[currentIndex]}
      <Button onClick={() => {goToPreviousComponent()}}> Prev </Button>
      <button onClick={() => {
          updateLikedHikes(trailResults[currentIndex], likedTrails, setLikedTrails)
      }}> Toggle Like </button>
      <Button onClick={() => {goToNextComponent()}}> Next </Button>
    </div>
  );
}

export default SlideShow