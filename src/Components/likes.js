import { useEffect } from "react";
import "./Likes.css"
import { Slider } from "antd";
import {TrailSlide} from "./Slide"

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
    return (
        <>
        <div className="container">
            {Object.values(likedTrails).map((trail, index) => (
                <div>
                    <TrailSlide key={index} trail={trail}/>
                </div>
                
            ))}
        </div>
            

            <div style={{display: "flex"}}>
                <p style={{width: "30%"}}> 1 </p>
                <p style={{width: "30%"}}> 2 </p>
                <p style={{width: "30%"}}> 3 </p>
            </div>
        </>
    );
};
