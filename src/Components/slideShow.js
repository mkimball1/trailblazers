import { useState,useEffect } from "react";
import { Button} from 'antd';

function SlideShow(slides) {
  slides = slides.slides
  const [index, setIndex] = useState(0);
  const [currSlide, setCurrSlide] = useState(
    // Tentative
    slides[0]
  )

  const changeCurrSlide = (move) => {
    let newIndex = index+move
    if(newIndex < 0){
      //tentative
      setIndex(slides.length-1)
    } 
    else if (newIndex >= slides.length){
      setIndex(0)
    }
    else{
      setIndex(newIndex)
    }
  }

  useEffect(() => {
    // tentative
    setCurrSlide(slides[index])
    // console.log(index, slides)
  }, [index])

  return (
    <div>
      <p> {currSlide} </p>
      <Button onClick={() => {changeCurrSlide(-1)}}> Prev </Button>
      <Button onClick={() => {changeCurrSlide(1)}}> Next </Button>
    </div>
  );
}

export default SlideShow