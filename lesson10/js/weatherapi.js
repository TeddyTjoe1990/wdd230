const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=93b04ac2e3dafc69e377e21afa088063";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
    });