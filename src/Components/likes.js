import { useEffect } from "react";
import "./Likes.css"
import { TrailSlide } from "./Slide";


export function updateLikedHikes(trailSelected, likedTrails, setLikedTrails){
    const id = trailSelected.id; // Make sure trailSelected and its id are defined and passed to this function
    const copyStorage = { ...likedTrails }; // Create a shallow copy of likedTrails

    if (copyStorage.hasOwnProperty(id)) {
        // If the hike is already in the liked list, delete it (toggle like/unlike)
        delete copyStorage[id];
    } else {
        // If the hike is not in the liked list, add it
        copyStorage[id] = trailSelected;
    }

    setLikedTrails(copyStorage); // Update the state with the new object
}

export const LikedHikesHeader = () => {
    return (
        <div className="header">
            <div className="horizontal-line"></div>
            <div> LIKED HIKES </div>
            <div className="horizontal-line"></div> 
        </div>
    )
}

export const UserLikedHikes = ({ likedTrails, setLikedTrails }) => {
    const likedTrailsArray = Object.values(likedTrails);
  
    return (
      <div className="liked-slides-container">
        {likedTrailsArray.reduce((rows, slide, index) => {
          if (index % 3 === 0) rows.push([]);
          rows[rows.length - 1].push(
            <div className="liked-slide" key={index}>
              <TrailSlide trail={slide} />
            </div>
          );
          return rows;
        }, []).map((row, index) => (
          <div className="liked-slides-row" key={index}>
            {row}
          </div>
        ))}
      </div>
    );
  };
  