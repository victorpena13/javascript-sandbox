(function (){
    // MapBox API:
    mapboxgl.accessToken = mapboxAPI_key;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-98.4916, 29.4252],
        zoom: 13,// starting zoom
    });

    //search through clicking on the map
    map.on('click', (e) => {
        var lng = e.lngLat.lng;
        var lat = e.lngLat.lat;
        $.get("http://api.openweathermap.org/data/2.5/weather", {
            APPID: openWeatherAPI_key,
            lat: lat,
            lon: lng,
            units: "imperial"
        }).done(function (data){
            console.log(data);
            var weatherData = data.weather[0].description;
            $('#weather-conditions').html(weatherData);
        });
        document.getElementById('info').innerHTML =
// `e.point` is the x, y coordinates of the `mousemove` event
// relative to the top-left corner of the map.
            JSON.stringify(e.point) +
            '<br />' +
            // `e.lngLat` is the longitude, latitude geographical position of the event.
            JSON.stringify(e.lngLat.wrap());
    });

    //searchBar:
    const geocoder = new MapboxGeocoder({
        // Initialize the geocoder
        accessToken: mapboxgl.accessToken, // Set the access token
        mapboxgl: mapboxgl, // Set the mapbox-gl instance
        marker: true // Do not use the default marker style
    });
    map.addControl(geocoder);
    geocoder.on('result', (event) => {
        var userInput = event.result.center;
        var lon = userInput[0];
        var lat = userInput[1];
        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: openWeatherAPI_key,
            lat: lat,
            lon: lon,
            //cnt sets the number of forecast the api call will deliver
            cnt: 5,
            units: "imperial"
        }).done(function (data){
            var fiveDayForecast = data.list;
            console.log(fiveDayForecast);
            htmlString = '';
            for(var i = 0; i < fiveDayForecast.length; i++) {
                htmlString += '<div class="col">' + fiveDayForecast[i].main.temp + '</div>';
            }
            $('.row').html(htmlString);
        });
    });
}) ();


