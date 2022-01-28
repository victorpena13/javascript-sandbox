(function (){
    geocode("4331 McCullough Ave, San Antonio, TX 78212", mapboxAPI_key).then(function(result) {
        var x = parseFloat(result[0]);
        var y = parseFloat(result[1]);
        console.log(x + " " + y);
        mapboxgl.accessToken = mapboxAPI_key;
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [x,y], // starting position [lng, lat]
            zoom: 18,// starting zoom
        });
        var saborMarker = new mapboxgl.Marker()
            .setLngLat([x,y])
            .setPopup(
                new mapboxgl.Popup({ offset: 25 }) // add popups
                    .setHTML(`sabor`)
            )
            .addTo(map);
    });
}) ();


