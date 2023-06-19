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
    //getDate(data.timezone);
    console.log("weather");
}

//function getDate(timezone) {
//    var d = new Date();
//    var dt = d.getTime();
//    const utc_seconds = dt + parseInt(timezone, 10);
//    const utc_milliseconds = utc_seconds * 1000;
//    const local_date = new Date(utc_milliseconds).toUTCString();
//    console.log(local_date);
//    document.querySelector(".time").innerText = local_date;
//}

function calcTime() {
    var d = new Date().toLocaleString("en-GB", {timeZone: "CET"})
    document.querySelector(".time").innerText = d;
    console.log("time");
}

weather();
calcTime();

setInterval (calcTime, 1000);
setInterval (weather, 1800000);



//Ett huvudvärde som beskriver vädret (e.g. regn, moln, sol)
//LÄGG IN EN GEOCODE FÖR FÖRSTA VÄRDET NÄR MAN ÖPPNAR HEMSIDAN.
//Värden för temperatur, lufttryck, fuktighet och vind
//Datum och tid (e.g. 2023-07-20 13:23)
//Datum och tid ska uppdateras minst en gång per sekund och alla andra värden ska uppdateras minst var 30:e minut.
//Allt ska visas upp genom HTML & CSS med JavaScript som styr alla värden som kan uppdateras. Det finns inga designkrav.