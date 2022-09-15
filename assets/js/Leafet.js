class Leaflet {
  #coords;
  #zoom;
  #map;
  #marker;

  constructor(coords = { latitude: 30, longitude: 70 }, zoom = 5) {
    this.#coords = coords;
    this.#zoom = zoom;

    const { latitude, longitude } = this.#coords;
    this.#map = L.map("map").setView([latitude, longitude], this.#zoom);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(this.#map);
  }

  setView(coords, zoom = this.#zoom) {
    const { latitude, longitude } = coords;
    this.#map.setView([latitude, longitude], zoom, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
    this.#renderMarker(coords);
  }

  #renderMarker(coords) {
    const { latitude, longitude } = coords;
    if (this.#marker) this.#marker.removeFrom(this.#map);

    this.#marker = L.marker([latitude, longitude]).addTo(this.#map);
  }
}
