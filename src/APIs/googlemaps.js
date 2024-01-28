import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { MarkerWithLabel } from '@googlemaps/markerwithlabel';

const API_KEY = "AIzaSyD9mcHqO8sJBVKh0kKTWrAyh4ZtrJoaRqY";

function MyMap({ coordinates }) {
  const center = {
    lat: coordinates.latitude,
    lng: coordinates.longitude
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY
  });

  const [map, setMap] = React.useState(null);
  const [marker, setMarker] = React.useState(null);

  React.useEffect(() => {
    if (isLoaded && map) {
      const newMarker = new MarkerWithLabel({
        position: new window.google.maps.LatLng(coordinates.latitude, coordinates.longitude),
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
  }, [isLoaded, map, coordinates]);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    bounds.extend(new window.google.maps.LatLng("33.648836", "-117.842727"));
    map.fitBounds(bounds);

    setMap(map);
  }, [center, coordinates]);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{
        width: '400px',
        height: '400px'
      }}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <></>
    </GoogleMap>
  ) : <></>;
}

export default React.memo(MyMap);
