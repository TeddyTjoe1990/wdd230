// Madrid Spain
var madridRequest = new XMLHttpRequest();
madridRequest.open('GET', '//api.openweathermap.org/data/2.5/weather?id=' + 3117735 + '&units=imperial&async=true' + '&APPID=93b04ac2e3dafc69e377e21afa088063');
madridRequest.onload = function() {

    var data = JSON.parse(madridRequest.responseText);


    var temp = data.main.temp;
    var humid = data.main.humidity;

    function rain(precip) {
        if (precip == undefined) {
            precip = 0;
        } else {
            precip = data.rain['3h'];
        }
        return precip;
    }
    var precip = rain();
    var wind = data.wind.speed;
    document.getElementById('curTempMadrid').innerHTML = temp + "&deg;F";
    document.getElementById('humidityMadrid').innerHTML = humid + "&#37;";
    document.getElementById('precipitationMadrid').innerHTML = precip + " inches";
    document.getElementById('windMadrid').innerHTML = wind + " mph";


    var f = 35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);

    var chill = parseFloat(f).toFixed(2);
    document.getElementById('windChillMadrid').innerHTML = chill;

    var wImg = document.getElementById('wImageMadrid');

    var myImage = document.createElement('img');


    myImage.src = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
    wImg.appendChild(myImage);

    document.getElementById('imgDescriptionMadrid').innerHTML = "<p>" + data.weather[0].description + "</p>";

    document.getElementById('curDescMadrid').innerHTML = "<p>" + data.weather[0].description + "</p>";

};

madridRequest.send();

// Idaho Falls
var idahoRequest = new XMLHttpRequest();
idahoRequest.open('GET', '//api.openweathermap.org/data/2.5/weather?id=' + 5596475 + '&units=imperial&async=true' + '&APPID=93b04ac2e3dafc69e377e21afa088063');
idahoRequest.onload = function() {

    var data = JSON.parse(idahoRequest.responseText);


    var temp = data.main.temp;
    var humid = data.main.humidity;

    function rain(precip) {
        if (precip == undefined) {
            precip = 0;
        } else {
            precip = data.rain['3h'];
        }
        return precip;
    }
    var precip = rain();
    var wind = data.wind.speed;
    document.getElementById('curTempIdaho').innerHTML = temp + "&deg;F";
    document.getElementById('humidityIdaho').innerHTML = humid + "&#37;";
    document.getElementById('precipitationIdaho').innerHTML = precip + " inches";
    document.getElementById('windIdaho').innerHTML = wind + " mph";


    var f = 35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);

    var chill = parseFloat(f).toFixed(2);
    document.getElementById('windChillIdaho').innerHTML = chill;

    var wImg = document.getElementById('wImageIdaho');

    var myImage = document.createElement('img');


    myImage.src = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
    wImg.appendChild(myImage);

    document.getElementById('imgDescriptionIdaho').innerHTML = "<p>" + data.weather[0].description + "</p>";

    document.getElementById('curDescIdaho').innerHTML = "<p>" + data.weather[0].description + "</p>";

};

idahoRequest.send();

// Cebu City
var cebuRequest = new XMLHttpRequest();
cebuRequest.open('GET', '//api.openweathermap.org/data/2.5/weather?id=' + 1717512 + '&units=imperial&async=true' + '&APPID=93b04ac2e3dafc69e377e21afa088063');
cebuRequest.onload = function() {

    var data = JSON.parse(cebuRequest.responseText);


    var temp = data.main.temp;
    var humid = data.main.humidity;

    function rain(precip) {
        if (precip == undefined) {
            precip = 0;
        } else {
            precip = data.rain['3h'];
        }
        return precip;
    }
    var precip = rain();
    var wind = data.wind.speed;
    document.getElementById('curTempCebu').innerHTML = temp + "&deg;F";
    document.getElementById('humidityCebu').innerHTML = humid + "&#37;";
    document.getElementById('precipitationCebu').innerHTML = precip + " inches";
    document.getElementById('windCebu').innerHTML = wind + " mph";


    var f = 35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);

    var chill = parseFloat(f).toFixed(2);
    document.getElementById('windChillCebu').innerHTML = chill;

    var wImg = document.getElementById('wImageCebu');

    var myImage = document.createElement('img');


    myImage.src = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
    wImg.appendChild(myImage);

    document.getElementById('imgDescriptionCebu').innerHTML = "<p>" + data.weather[0].description + "</p>";

    document.getElementById('curDescCebu').innerHTML = "<p>" + data.weather[0].description + "</p>";

};

cebuRequest.send();

// Provo City
var provoRequest = new XMLHttpRequest();
provoRequest.open('GET', '//api.openweathermap.org/data/2.5/weather?id=' + 5780026 + '&units=imperial&async=true' + '&APPID=93b04ac2e3dafc69e377e21afa088063');
provoRequest.onload = function() {

    var data = JSON.parse(provoRequest.responseText);


    var temp = data.main.temp;
    var humid = data.main.humidity;

    function rain(precip) {
        if (precip == undefined) {
            precip = 0;
        } else {
            precip = data.rain['3h'];
        }
        return precip;
    }
    var precip = rain();
    var wind = data.wind.speed;
    document.getElementById('curTempProvo').innerHTML = temp + "&deg;F";
    document.getElementById('humidityProvo').innerHTML = humid + "&#37;";
    document.getElementById('precipitationProvo').innerHTML = precip + " inches";
    document.getElementById('windProvo').innerHTML = wind + " mph";


    var f = 35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);

    var chill = parseFloat(f).toFixed(2);
    document.getElementById('windChillProvo').innerHTML = chill;

    var wImg = document.getElementById('wImageProvo');

    var myImage = document.createElement('img');


    myImage.src = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
    wImg.appendChild(myImage);

    document.getElementById('imgDescriptionProvo').innerHTML = "<p>" + data.weather[0].description + "</p>";

    document.getElementById('curDescProvo').innerHTML = "<p>" + data.weather[0].description + "</p>";

};

provoRequest.send();