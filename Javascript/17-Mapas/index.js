let marker, map;

function initMap() {
  //definiendo la posición por defecto
  const position = {
    lat: -25.354,
    lng: 131.044,
  };
  //definiendo el mapa
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: position,
  });

  //definiendo el marker
  marker = new google.maps.Marker({
    position: lugares,
    map,
    title: "Posicion Inicial",
  });

  //obtener localizacion
  getGeoPosition();
}

function getGeoPosition() {
  const options = { timeout: 60000 };
  navigator.geolocation.getCurrentPosition(mapCenter, mapError, options);
}

function mapCenter(pos) {
  const newPosition = {
    lat: pos.coords.latitude,
    lng: pos.coords.longitude,
  };
  marker.setPosition(newPosition);
  map.setCenter(newPosition);
}
function mapError(error) {
  console.log("hay un error");
}
