const notificationElement = document.querySelector(".notification")
const iconElement = document.querySelector(".weather-icon")
const tempElement = document.querySelector(".tempratur-value p")
const descElement = document.querySelector(".temperature-description p")
const locationElement = document.querySelector(".location p")

fetch ("https://api.openweathermap.org/data/3.0/onecall?lat=56.6628826&lon=16.3662382&exclude={part}&appid=327c6ab2c31e9fa34141ecb5115d3ccb")
.then(response => response.json())
.then (data => console.log(data))

.catch(err => alert("wrong city name!"))