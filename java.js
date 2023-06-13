window.addEventListener("load", ()=> {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position =>{
           long = position.coords.longitude;
           lat = position.coords.latitude;

           const api = "https://api.openweathermap.org/data/2.5/weather?lat=56.6616&lon=16.3616&appid=327c6ab2c31e9fa34141ecb5115d3ccb" //how to make it for long/lat veriable
           fetch(api)
           .then(response => {
               return response.json()
           })
           .then(data => {
               console.log(data)
               const {weather}= data.stations
           })
        })
        } else {
        h1.textContent = "you need to allow geolocation"
    }
})

//"https://api.openweathermap.org/data/2.5/weather?lat=$(lat)&lon=$(long)&appid=327c6ab2c31e9fa34141ecb5115d3ccb"
//lat 56.6616
//long 16.3616
//const notificationElement = document.querySelector(".notification")
//const iconElement = document.querySelector(".weather-icon")
//const tempElement = document.querySelector(".tempratur-value p")
//const descElement = document.querySelector(".temperature-description p")
//const locationElement = document.querySelector(".location p")
//
////const weather = {
////
////    temperature : {
////        value : 18,
////        unit : "celcius"
////    },
////
////    description : "few clouds",
////    iconId : "01d",
////    city : "London",
////    country : "GB"
////}
////
//
//iconElement.innerHTML = 
//`<img scr="icons/${weather.iconId}.png"/>`;
//
//tempElement.innerHTML = 
//`${weather.temperature.value} ° <span>C</span>`
//
//descElement.innerHTML = 
//
//locationElement.innerHTML = 
//
//
////fetch ("https://api.openweathermap.org/data/2.5/weather?q=KALMAR&appid=327c6ab2c31e9fa34141ecb5115d3ccb")
////.then(response => response.json())
////.then (data => console.log(data))
////
////.catch(err => alert("wrong city name!"))