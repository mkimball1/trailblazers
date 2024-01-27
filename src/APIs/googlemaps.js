let map;

async function initMap(location) {
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: location,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluruxx
  const marker = new AdvancedMarkerElement({
    map: map,
    position: location,
    title: "Uluru",
  });
}