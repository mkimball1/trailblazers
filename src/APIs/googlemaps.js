import { Loader } from "@googlemaps/js-api-loader"
let map;

const loader = new Loader({
    apiKey: "AIzaSyD9mcHqO8sJBVKh0kKTWrAyh4ZtrJoaRqY",
    version: "weekly"
});

async function initMap(location, name) {
  try {
    // Load the Google Maps API
    await loader.load();

    // Access the loaded libraries
    const { google } = loader;

    // Create the map
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: location,
      mapId: "MAP-ID",
    });

    // Create a marker
    const marker = new google.maps.Marker({
      map: map,
      position: location,
      title: name,
    });
  } catch (error) {
    console.error("Error loading Google Maps API:", error);
  }
}

export default initMap;
