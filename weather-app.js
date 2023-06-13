let weather = {
    "apiKey": "327c6ab2c31e9fa34141ecb5115d3ccb",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
             + city 
             + "&units=metric&appid=" 
             + this.apiKey
             )
        .then ((response) => response.json ())
        .then ((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {
        const { name } = data.name;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon +"@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
    }
};

// få innerText att funka. 
//Ett huvudvärde som beskriver vädret (e.g. regn, moln, sol)
//Värden för temperatur, lufttryck, fuktighet och vind
//Datum och tid (e.g. 2023-07-20 13:23)
//Datum och tid ska uppdateras minst en gång per sekund och alla andra värden ska uppdateras minst var 30:e minut.
//Allt ska visas upp genom HTML & CSS med JavaScript som styr alla värden som kan uppdateras. Det finns inga designkrav.