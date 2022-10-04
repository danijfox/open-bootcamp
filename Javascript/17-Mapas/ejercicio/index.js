function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 40.41786, lng: -3.7240932 },
  });

  const places = [
    [{ lat: 40.46323, lng: -3.6505348 }, "Canillas"],
    [{ lat: 40.4128661, lng: -3.7136256 }, "Plaza de la paja"],
    [{ lat: 40.4307436, lng: -3.7034788 }, "Puerta de Alcalá"],
  ];

  places.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${title}`,
    });
  });
}
