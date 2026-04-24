var APIKey = '9e1ac06a6f72dc48dc80d70b4f040583';


async function fetchWeather(city) {
 if (city === "") {
  alert("Please enter city name");
  return;
 }

 var APIURL =`https://api.openweathermap.org/data/2.5/weather?q=${  encodeURIComponent 
 (  city  )}&units=metric&appid=${  APIKey  }`;

 try {
  var response = await fetch(APIURL);
  var data = await response.json();

  if (data.cod !== 200) {
   alert("City not found");
   return;
  }

  showWeather(data);
 } catch (error) {
  console.log(error)
 }
}

function showWeather(data) {
 document.querySelector("#cityName").innerHTML =
 `${data.name}`;

 document.querySelector("#temp").innerHTML =
  `${Math.round(data.main.temp)}°C` ;

 document.querySelector("#humidity").innerHTML =
   ` ${data.main.humidity}%`;

 document.querySelector("#wind").innerHTML =
  `${data.wind.speed}km/h` ;

 document.querySelector("#condition").innerHTML =
  data.weather[0].description;

 document.querySelector("#weatherIcon").src =
  `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

document.querySelector("button").addEventListener(
 "click",
  function () {
 var city = document.querySelector("#cityInput").value.trim();
 fetchWeather(city);
 }
);

fetchWeather("Jaipur");
