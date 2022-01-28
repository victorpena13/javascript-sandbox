(function (){
    const restaurants = [
        {
            name : "Sabor",
            address : "4331 McCullough Ave, San Antonio, TX 78212",
        },
        {
            name : "HEB",
            address : "516 S Flores St, San Antonio, TX 78204",
        },
        {
            name : "Alemeda Cafe",
            address : "342 W Houston St, San Antonio, TX 78205",
        },
]
    mapboxgl.accessToken = mapboxAPI_key;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-98.4916, 29.4252],
        zoom: 13,// starting zoom
    });

    function placeMarkerAndPopup(info, token, map) {
        geocode(info.address, token).then(function(coordinates) {
            var marker = new mapboxgl.Marker()
                .setLngLat(coordinates)
                .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
                        .setHTML(info.name)
                )
                .addTo(map)
        });
    }

    restaurants.forEach(function (restaurant){
        placeMarkerAndPopup(restaurant, mapboxAPI_key, map);
    });

    function zoomFive() {
        map.setZoom(5);
    }
    function zoomFifthteen() {
        map.setZoom(15);
    }
    function zoomTwenty() {
        map.setZoom(20);
    }
    $('#zoom-five').click(zoomFive);
    $('#zoom-fifthteen').click(zoomFifthteen);
    $('#zoom-twenty').click(zoomTwenty);

}) ();





