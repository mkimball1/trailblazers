import { useEffect } from "react";
import "./Likes.css"

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
    const newTrail = {
        "id": 273508,
        "name": "Laurelwood Park",
        "url": "https://www.singletracks.com/bike-trails/various-unnamed-and-named/",
        "length": "3.0",
        "description": "Drop down to the playground and go south to the trail head, starts out as a fire road for 1/4 mile. Lots of choices to explore. Not too technical but flowy and narrow well maintained",
        "directions": "Laurelwood Park",
        "city": "Belmont",
        "region": "California",
        "country": "United States",
        "lat": "37.52222",
        "lon": "-122.32356",
        "difficulty": "",
        "features": "Restrooms",
        "rating": 0,
        "thumbnail": null
    }

    return (
        <>
            <button onClick={() => {
                updateLikedHikes(newTrail, likedTrails, setLikedTrails)
            }}> Toggle Like </button>
            
            {Object.values(likedTrails).map((trail, index) => (
                //Need to replace with Slides
                <div key={index}>
                    <h2>{trail.name}</h2>
                </div>
            ))}
        </>
    );
};
