const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=93b04ac2e3dafc69e377e21afa088063";

fetch(apiURL)
    .then((response) => response.json())
    .then((x) => {
        //console.log(x);

        const currentTemp = document.querySelector('#current-temp');
        const weathericon = document.querySelector("#weathericon");

        currentTemp.textContent = x.main.temp.toFixed(0);
        let imgsrc = `https://openweathermap.org/img/w/${x.weather[0].icon}.png`;
        let imgalt = x.weather[0].description;
        //imgalt = imgalt.split(' ').map(capitalize).join(' ');

        currentTemp.textContent = x.main.temp.toFixed(0);
        weathericon.setAttribute('src', imgsrc);
        weathericon.setAttribute('alt', imgalt);
    });