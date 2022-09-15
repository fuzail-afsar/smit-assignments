const weatherContainerElem = document.getElementById("weather");
const locationElem = weatherContainerElem.getElementsByTagName("h3")[0];
const dateElem = weatherContainerElem.getElementsByTagName("p")[0];
const temperatureElem = weatherContainerElem.querySelector("#temperature");
const iconElem = weatherContainerElem.getElementsByTagName("img")[0];
const weatherElem = weatherContainerElem.getElementsByTagName("h6")[0];
const weatherUnitElem = weatherContainerElem.querySelector(".units");
const weatherUnitElems = weatherContainerElem.querySelectorAll(".weather-unit");

const weatherDetailElem = document.getElementById("weather-detail");
const humidityElem = weatherDetailElem.querySelector(".humidity h4");
const feelsLikeElem = weatherDetailElem.querySelector(".feels-like h4");
const pressureElem = weatherDetailElem.querySelector(".pressure h4");

const form = document.getElementsByTagName("form")[0];

class Script extends Main {
  #leaflet = new Leaflet();
  _openWeather = new OpenWeather();
  #toast = Toast();
  constructor() {
    super();
    this.init();
  }
  init() {
    this.#toast.init();
    this.getUserLocation();
    this.userLocationHandler({ latitude: 30, longitude: 70 });
    this.initEvents();
  }

  initEvents() {
    form.addEventListener("submit", this.searchHandler.bind(this));
    weatherUnitElems.forEach((element) =>
      element.addEventListener("click", this.weatherUnitClickHandler.bind(this))
    );
  }

  setMapAndWeather(response) {
    const { lat, lon } = response.coord;
    this.#leaflet.setView({ latitude: lat, longitude: lon });
    this.updateDOM(response);
  }

  updateDOM(data) {
    const {
      name,
      sys: { country },
      main: { temp, feels_like: feelsLike, humidity, pressure },
      weather: [{ id: weatherCode, main: weather }],
    } = data;

    const date = new Date();

    locationElem.innerHTML = `${name}, ${country}`;
    dateElem.innerHTML = `${date.getWeekDayName()}, ${date
      .getMonthName()
      .slice(0, 3)} ${date.getFullYear()}`;
    temperatureElem.innerHTML = temp;
    iconElem.src = this.getWeatherIconByCode(weatherCode);
    weatherElem.innerHTML = weather;

    humidityElem.innerHTML = humidity + "%";
    feelsLikeElem.innerHTML = feelsLike;
    pressureElem.innerHTML = pressure;

    weatherUnitElem
      .getElementsByClassName("weather-unit")[0]
      .classList.add("active");
    weatherUnitElem
      .getElementsByClassName("weather-unit")[1]
      .classList.remove("active");
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.userLocationHandler.bind(this),
        () => {
          this.#toast.show("Sorry!", "Could not get geo location");
        }
      );
    }
  }

  getWeatherIconByCode(weatherCode) {
    let iconTitle = "";
    switch (weatherCode) {
      // Thunder Strom
      case 200:
      case 210:
      case 211:
      case 230:
      case 231:
        iconTitle = "thunderstorms";
        break;
      case 201:
      case 202:
      case 232:
        iconTitle = "scattered-thunderstorms";
        break;
      case 212:
      case 221:
        iconTitle = "severe-thunderstorm";
        break;
      // Drizzling
      case 300:
      case 301:
      case 302:
      case 311:
      case 312:
      case 313:
      case 314:
      case 321:
        iconTitle = "rainy-1";
        break;
      // Rain
      case 500:
      case 501:
      case 520:
      case 521:
        iconTitle = "rainy-2";
        break;
      case 502:
      case 503:
      case 504:
      case 522:
      case 531:
        iconTitle = "rainy-3";
        break;
      case 511:
      case 615:
      case 616:
        iconTitle = "rain-and-snow-mix";
        break;
      // Snow
      case 600:
        iconTitle = "snowy-1";
        break;
      case 601:
      case 620:
      case 621:
        iconTitle = "snowy-2";
        break;
      case 602:
      case 622:
        iconTitle = "snowy-3";
        break;
      case 611:
        iconTitle = "hail";
        break;
      case 612:
      case 613:
        iconTitle = "rain-and-sleet-mix";
        break;
      // Atmosphere
      case 701:
      case 711:
      case 741:
        iconTitle = "fog";
        break;
      case 721:
        iconTitle = "haze";
        break;
      case 731:
      case 751:
      case 761:
      case 762:
        iconTitle = "dust";
        break;
      case 771:
      case 781:
        iconTitle = "wind";
        break;
      case 801:
      case 802:
      case 803:
      case 804:
        iconTitle = "cloudy";
        break;
      default:
        iconTitle = "clear-day";
    }
    return `./assets/images/weather-icons/${iconTitle}.svg`;
  }

  // Handlers
  async userLocationHandler(event) {
    try {
      const { latitude, longitude } = event.coords || event;
      const coords = { latitude, longitude };
      const response = await this._openWeather.getWeatherByCoords(coords);
      if (response.cod === "404") throw new Error(response.message);

      this.setMapAndWeather(response);
    } catch (error) {
      console.warn(error);
      this.#toast.show("Sorry", error);
    }
  }

  async searchHandler(event) {
    event.preventDefault();
    const inputElem = event.target[0];
    const inputValue = inputElem.value.trim();
    if (!inputValue) return;
    try {
      this.showLoader();
      const response = await this._openWeather.getWeatherByName(inputValue);
      if (response.cod === "404") throw new Error(response.message);
      this.setMapAndWeather(response);
    } catch (error) {
      this.#toast.show("Sorry!", error);
      console.warn(error);
    } finally {
      inputElem.value = "";
      this.hideLoader();
    }
  }

  weatherUnitClickHandler(event) {
    const element = event.target;
    if (element.classList.contains("active")) return;
    if (element.innerText === "°F") {
      temperatureElem.innerHTML = this.celsiusToFahrenheit(
        temperatureElem.innerText
      ).toFixed(2);
      feelsLikeElem.innerHTML = this.celsiusToFahrenheit(
        feelsLikeElem.innerText
      ).toFixed(2);
    } else {
      temperatureElem.innerHTML = this.fahrenheitToCelsius(
        temperatureElem.innerText
      ).toFixed(2);
      feelsLikeElem.innerHTML = this.fahrenheitToCelsius(
        feelsLikeElem.innerText
      ).toFixed(2);
    }
    weatherUnitElem.querySelector(".active").classList.remove("active");
    element.classList.add("active");
  }

  celsiusToFahrenheit(tempCelsius) {
    return tempCelsius * 1.8 + 32;
  }

  fahrenheitToCelsius(tempFahrenheit) {
    return (tempFahrenheit - 32) * (5 / 9);
  }
}

(function () {
  new Script();
})();
