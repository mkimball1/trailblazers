export const getCurrentPosition = (successCallback, errorCallback) => {
    const success = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      successCallback(latitude, longitude);
      return{latitude:latitude , longitude:longitude}
    };
      
    const error = (err) => {
      errorCallback(`ERROR(${err.code}): ${err.message}`);
    };
  
    navigator.geolocation.getCurrentPosition(success, error);
  };
  

