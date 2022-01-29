$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: openWeatherAPI_key,
    q:     "San Antonio, US"
}).done(function (data){
    console.log(data);
});

