// import { Loader } from "@googlemaps/js-api-loader"
import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { MarkerWithLabel } from '@googlemaps/markerwithlabel';

let API_KEY = "AIzaSyD9mcHqO8sJBVKh0kKTWrAyh4ZtrJoaRqY"

// const containerStyle = {
//   width: '400px',
//   height: '400px'
// };


function MyComponent({coordinates}) {
  console.log(coordinates)
  const center = {
    lat: coordinates.latitude,
    lng: coordinates.longitude
  };
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY
  })

  const [map, setMap] = React.useState(null)
  const [marker, setMarker] = React.useState(null)

  React.useEffect(() => {
    if (isLoaded && map) {
      const newMarker = new MarkerWithLabel({
        position: new window.google.maps.LatLng(49.475, -123.84),
        clickable: true,
        draggable: true,
        map: map,
        labelContent: "foo",
        labelAnchor: new window.google.maps.Point(-21, 3),
        labelClass: "labels",
        labelStyle: { opacity: 1.0 },
      });
  
      setMarker(newMarker);
  
      return () => {
        newMarker.setMap(null); // Remove the marker from the map on cleanup
      };
    }
  }, [isLoaded, map]);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [center])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={{
          width: '400px',
          height: '400px'
        }}
        center={center}
        zoom={2}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* { test } */}
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)

