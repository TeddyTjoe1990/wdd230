const tempNum = parseFloat(document.querySelector("#temp").textContent);
const speedNum = parseFloat(document.querySelector("#speed").textContent);

let windChill =
    35.74 +
    0.6215 * tempNum -
    35.75 * Math.pow(speedNum, 0.16) +
    0.4275 * tempNum * Math.pow(speedNum, 0.16);

windChill = Math.round(windChill);

if (tempNum <= 50 && speedNum > 3) {
    document.querySelector("#chill").textContent = `${windChill}\xB0F`;
} else {
    document.querySelector("#chill").textContent = "N/A";
}

//-- CURRENT WEATHER --//

const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Jakarta&units=metric&appid=93b04ac2e3dafc69e377e21afa088063";

fetch(apiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
        // console.log(weatherInfo);

        // City Temperature
        let temp = weatherInfo.main.temp;
        let wholeTemp = Math.round(temp);
        document.querySelector("#temp").textContent = wholeTemp;

        // Weather Image
        const iconsrc = `https://openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png`;

        // Weather Forecast
        const desc = weatherInfo.weather[0].description;
        const descWords = desc.split(" ");

        // Capitalize each first letter of weather forecast
        for (let i = 0; i < descWords.length; i++) {
            descWords[i] = descWords[i][0].toUpperCase() + descWords[i].substr(1);
        }

        // Add weather image and forecast to html page
        document.querySelector("#weathericon").setAttribute("src", iconsrc);
        document.querySelector("#weathericon").setAttribute("alt", desc);
        document.querySelector(".forecast").textContent = descWords.join(" ");

        // Get windspeed and add to html page
        let windSpeed = weatherInfo.wind.speed;
        let wholeWindSpeed = Math.round(windSpeed);
        document.querySelector("#speed").textContent = wholeWindSpeed;
    });