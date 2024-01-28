import "./Likes.css"
import {TrailSlide} from "./Slide"

export function updateLikedTrails(trailSelected, likedTrails, setLikedTrails){
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

export const LikedTrailsHeader = () => {
    return (
        <div className="header">
            <h1> LIKED TRAILS </h1>
        </div>
    )
}

export const UserLikedTrails= ({ likedTrails, setLikedTrails }) => {
    const likedTrailsArray = Object.values(likedTrails);
  
    // Function to chunk an array into rows of a specific size
    const chunkArray = (arr, size) => {
      const result = [];
      for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
      }
      return result;
    };
  
    // Organize liked trails into rows of three
    const rows = chunkArray(likedTrailsArray, 3);
  
    return (
      <>
        <div className="liked-container">
          {rows.map((row, rowIndex) => (
            <div className="liked-row" key={rowIndex}>
              {row.map((trail, index) => (
                <div key={index}>
                  <TrailSlide trail={trail} showPhoto={false} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </>
    );
  };
  
  
