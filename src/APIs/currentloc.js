

export const getCurrentPosition = (successCallback, errorCallback) => {
    const success = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(longitude)
      console.log(latitude)
      successCallback(latitude, longitude);
      return{latitude:latitude , longitude:longitude}
    };
      
    const error = (err) => {
      errorCallback(`ERROR(${err.code}): ${err.message}`);
    };
  
    navigator.geolocation.getCurrentPosition(success, error);
  };
  
  // Now you can call this function when you need to get the current position
//   getCurrentPosition();

