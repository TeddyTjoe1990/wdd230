var myRequest = new XMLHttpRequest();
myRequest.open('GET', '\data/temples.json');

myRequest.onload = function() {
    var data = JSON.parse(myRequest.responseText);

    showMadridSpainClosures(data);
    showIdahoClosures(data);
    showCebuClosures(data);
    showProvoClosures(data);

    // Madrid Spain
    function showMadridSpainClosures(jsonObj) {
        var closureDate = jsonObj.temple[0].closures;

        $.each(closureDate, function(index) {
            var dateData = closureDate[index].date;

            var myP = document.createElement('p');
            myP.textContent = dateData;
            document.getElementById('MadridSpainClosures').appendChild(myP);
            console.log(index + ": " + dateData);
        });
    }

    // Idaho Falls
    function showIdahoClosures(jsonObj) {
        var closureDate = jsonObj.temple[1].closures;

        $.each(closureDate, function(index) {
            var dateData = closureDate[index].date;

            var myP = document.createElement('p');
            myP.textContent = dateData;
            document.getElementById('IdahoClosures').appendChild(myP);
            console.log(index + ": " + dateData);
        });
    }

    // Cebu City
    function showCebuClosures(jsonObj) {
        var closureDate = jsonObj.temple[3].closures;

        $.each(closureDate, function(index) {
            var dateData = closureDate[index].date;

            var myP = document.createElement('p');
            myP.textContent = dateData;
            document.getElementById('CebuClosures').appendChild(myP);
            console.log(index + ": " + dateData);
        });
    }

    // Provo City
    function showProvoClosures(jsonObj) {
        var closureDate = jsonObj.temple[3].closures;

        $.each(closureDate, function(index) {
            var dateData = closureDate[index].date;

            var myP = document.createElement('p');
            myP.textContent = dateData;
            document.getElementById('ProvoClosures').appendChild(myP);
            console.log(index + ": " + dateData);
        });
    }
}

myRequest.send();