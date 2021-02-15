let days = [
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"
];

let now = new Date();
let currentDay = days[now.getDay()];
let currentDate = now.getDate();
let currentHour = now.getHours();
let currentMin = now.getMinutes();
let formatedDate = `Today is ${currentDay}  ${currentDate},  ${currentHour}:${currentMin}`;
console.log(formatedDate);
let today = document.querySelector("h3");
today.innerHTML = formatedDate;

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);

function displayWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
  
  document.querySelector("#hum").innerHTML = response.data.main.humidity;
  document.querySelector("#win").innerHTML = Math.round(response.data.wind.speed);
  document.querySelector("#description").innerHTML = response.data.weather[0].main;
}

function searchCity (event) {
event.preventDefault();
let apiKey= "4d364ba4e39ef8d80cbd625e530da69c";
let city= document.querySelector("#city-input").value ;
let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayWeather);
};

function searchLocation(position) {
  let apiKey = "4d364ba4e39ef8d80cbd625e530da69c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}



function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);





