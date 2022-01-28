(function (){
    mapboxgl.accessToken = mapboxAPI_key;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-98.4916, 29.4252], // starting position [lng, lat]
        zoom: 13,// starting zoom
    });

    var popup = new mapboxgl.Popup()
        .setLngLat([-98.4921628, 29.4800839])
        .addTo(map)
        .setHTML('<h3>sabor</h3>');

    geocode("600 Navarro St #350, San Antonio, TX 78205", mapboxAPI_key).then(function(result) {
        console.log(result);
        map.setCenter(result);
        map.setZoom(20);
    });
}) ();


