import "./slideshow.css"
const Slideshow = ({name, location}) => { //TODO Need to change
    return (
      <div class="container">
        <h2>{name}</h2>
        <h3>{location}</h3>
      </div>
    );
  };
  
  export default Slideshow;