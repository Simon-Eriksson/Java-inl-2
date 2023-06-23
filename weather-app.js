function weather() {
    var apiKey = "327c6ab2c31e9fa34141ecb5115d3ccb";
    fetchWeather(apiKey);

}

function fetchWeather(key) {
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="
         + "kalmar" 
         + "&units=metric&appid=" 
         + key
         )
    .then ((response) => response.json ())
    .then ((data) => displayWeather(data))
}

function displayWeather (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon +"@2x.png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
    console.log("weather");
}

function calcTime() {
    var d = new Date().toLocaleString("en-GB", {timeZone: "CET"})
    document.querySelector(".time").innerText = d;
    console.log("time");
}

weather();
calcTime();

setInterval (calcTime, 1000);
setInterval (weather, 1800000);