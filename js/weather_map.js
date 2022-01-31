(function (){
    mapboxgl.accessToken = mapboxAPI_key;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-98.4916, 29.4252],
        zoom: 13,// starting zoom
    });

    map.on('click', (e) => {
        document.getElementById('info').innerHTML =
// `e.point` is the x, y coordinates of the `mousemove` event
// relative to the top-left corner of the map.
            JSON.stringify(e.point) +
            '<br />' +
            // `e.lngLat` is the longitude, latitude geographical position of the event.
            JSON.stringify(e.lngLat.wrap());
    });

    const geocoder = new MapboxGeocoder({
        // Initialize the geocoder
        accessToken: mapboxgl.accessToken, // Set the access token
        mapboxgl: mapboxgl, // Set the mapbox-gl instance
        marker: true // Do not use the default marker style
    });

    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: openWeatherAPI_key,
        q:     "San Antonio, US",
        units: "imperial"
    }).done(function (data){
        console.log(data);
    });
}) ();