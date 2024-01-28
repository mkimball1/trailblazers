import { useState,useEffect } from "react";
import {UserLikedHikes, LikedHikesHeader, updateLikedHikes} from "./Likes.js"

// import {TrailSlide} from "./Components/Slide.js"
import { Button} from 'antd';
import TrailSlide from "./Slide";

function SlideShow(trailResults, likedTrails, setLikedTrails) {
  console.log(trailResults, likedTrails, setLikedTrails)
  trailResults = trailResults.trailResults
  // console.log(trailResults)

  const [index, setIndex] = useState(0);
  const slides = trailResults ? Object.values(trailResults).map(traildata => 
    <TrailSlide key={traildata.id} trail={traildata} />
  ) : [];

  // Then, initialize the currSlide state
  const [currSlide, setCurrSlide] = useState(slides[0]);
  console.log("MY SLIDES:", slides)

  const [currentIndex, setCurrentIndex] = useState(0);
  const goToNextComponent = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
  };

  // Function to go to the previous component
  const goToPreviousComponent = () => {
      setCurrentIndex(prevIndex => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect( () => {
    console.log(slides[currentIndex])
  }, [currentIndex])

  return (
    <div>
      {slides[currentIndex]}
      <Button onClick={() => {goToPreviousComponent()}}> Prev </Button>
      <button onClick={() => {
        updateLikedHikes(slides[currentIndex], likedTrails, setLikedTrails)
      }}> I LIKE </button>
      <Button onClick={() => {goToNextComponent()}}> Next </Button>
    </div>
  );
}

export default SlideShow