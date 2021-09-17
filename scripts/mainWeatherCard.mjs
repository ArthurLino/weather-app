import {
  convertAngulationToDirection,
  convertMetersToKilometers,
} from "./metricsConversor.mjs";

const searcher = document.querySelector("#searchForm");
const mainCard = {
  cityName: document.querySelector("#city-name"),
  icon: document.querySelector("#weather-icon"),
  weatherDescription: document.querySelector("#weather"),
  temperature: document.querySelector("#temp"),
  feelsLikeTemperature: document.querySelector("#feels-like"),
  minTemp: document.querySelector("#min-temp"),
  maxTemp: document.querySelector("#max-temp"),
  humidity: document.querySelector("#humidity"),
  windSpeed: document.querySelector("#wind-speed"),
  windDirection: document.querySelector("#wind-direction"),
  visibility: document.querySelector("#visibility"),
};

async function initializeWithGeolocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const longitude = Math.round(position.coords.longitude);
      const latitude = Math.round(position.coords.latitude);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=ccaf063047a675aa6670957611d7896e&lang=pt_br&units=metric`
      );
      const data = await response.json();
      await buildWeatherCard(mainCard, data);
    });
  }
}

const searchCityWeather = async (form) => {
  const cityName = form.city.value;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ccaf063047a675aa6670957611d7896e&lang=pt_br&units=metric`
  );
  const data = await response.json();
  console.log(data);
  await buildWeatherCard(mainCard, data);
};

function buildWeatherCard(card, data) {
  card.icon.setAttribute("src", `./images/${data.weather[0].icon}.svg`);
  card.cityName.innerText = data.name;
  card.weatherDescription.innerText = `${data.weather[0].description}`;
  card.temperature.innerText = `Temperatura: ${Math.round(data.main.temp)}C°`;
  card.feelsLikeTemperature.innerText = `Sensação Têrmica: ${Math.round(
    data.main.feels_like
  )}C°`;
  card.minTemp.innerText = `Mínima: ${Math.round(data.main.temp_min)}C°`;
  card.maxTemp.innerText = `Máxima: ${Math.round(data.main.temp_max)}C°`;
  card.humidity.innerText = `Humidade: ${data.main.humidity}%`;
  card.windSpeed.innerText = `Velocidade do Vento: ${data.wind.speed}Km/h`;
  card.windDirection.innerText = `Sentido do Vento: ${convertAngulationToDirection(
    data.wind.deg
  )}`;
  card.visibility.innerText = `Visibilidade: ${convertMetersToKilometers(
    data.visibility
  )}Km`;
}

searcher.addEventListener("submit", (event) => {
  event.preventDefault();
  searchCityWeather(searcher);
});

initializeWithGeolocation();
