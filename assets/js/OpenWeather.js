class OpenWeather {
  #getAppId() {
    return "af5e43df65e4ecf5dcb9240f9a3bc084";
  }
  getWeatherByCoords(coords) {
    const { latitude, longitude } = coords;
    return new Promise((resolve, reject) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${this.#getAppId()}`
      )
        .then((res) => res.json())
        .then((resJson) => resolve(resJson))
        .catch((err) => reject(err));
    });
  }

  getWeatherByName(name) {
    return new Promise((resolve, reject) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${this.#getAppId()}&units=metric`
      )
        .then((res) => res.json())
        .then((resJson) => resolve(resJson))
        .catch((err) => reject(err));
    });
  }
}
