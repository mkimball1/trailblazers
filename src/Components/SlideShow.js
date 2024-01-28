import { useState } from "react";
import {updateLikedTrails} from "./Likes.js"
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
    return null; 
  }

  return (
    <div>
      {slides[currentIndex]}
      <div className="container">
        <Button className="button" onClick={() => {
          console.log(likedTrails)
          goToPreviousComponent()
          }}> Prev </Button>
        {likedTrails.hasOwnProperty(slides[currentIndex].key) ? 
        <Button className="like" type="primary" danger onClick={() => {
          updateLikedTrails(trailResults[currentIndex], likedTrails, setLikedTrails)
        }}> Dislike </Button>
        : 
        <Button className="like" type="primary" onClick={() => {
          updateLikedTrails(trailResults[currentIndex], likedTrails, setLikedTrails)
        }}> Like </Button>
        }
        <Button className="button" onClick={() => {goToNextComponent()}}> Next </Button>
      </div>
      
    </div>
  );
}

export default SlideShow
