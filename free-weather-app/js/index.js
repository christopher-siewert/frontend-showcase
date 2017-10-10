$.getJSON("http://ip-api.com/json?callback=", function(response) {

  var url = "http://api.openweathermap.org/data/2.5/weather?APPID=6bfe2faaa717386a42cabb03bf39062e&lat=" + response.lat + "&lon=" + response.lon + "&callback=";
  $("#location").html(response.city);

  $.getJSON(url, function(response) {
    var celcius = Math.floor(response.main.temp - 273.15);
    var fahrenheit = Math.floor(response.main.temp * 9 / 5 - 459.67);

    function setCelcius() {
      $("#temp").html(celcius);
      $("#degrees").html("C");
    }

    function setFahrenheit() {
      $("#temp").html(fahrenheit);
      $("#degrees").html("F");
    }
    setCelcius();

    $("#units").click(function() {
      if ($("#degrees").html() == "C") {
        setFahrenheit();
      } else {
        setCelcius();
      }
    });
    
    var thunderstorm = '<div class="icon" ><div class= "cloud2"></div><div class="thunder"<div class="bolt"></div><div class="bolt"></div></div></div>';
    var drizzle = '<div class="icon"><div class="cloud2"></div><div class="drizzle"></div></div>';
    var rain = '<div class="icon"><div class="cloud2"></div><div class="rain"></div></div>';
    var snow = '<div class="icon"><div class="cloud2"></div><div class="snow"><div class="flake"></div><div class="flake"></div><div class="flake"></div><div class="flake"></div></div></div>';
    var clouds = '<div class="icon"><div class="cloud2 small-cloud"></div><div class="cloud2"></div></div>';
    var extreme = '<div class="icon"><div class="extreme text-center"><div class="harsh-wind"></div><div class="harsh-wind"></div><div class="harsh-wind"></div><div class="harsh-wind"></div><div class="harsh-wind"></div><div class="harsh-wind"></div><div class="harsh-wind"></div></div></div>';
    var clear = '<div class="icon"><div class="rays"><div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div></div><div class="sun"></div></div>';
    
    
   switch(response.weather[0].main) {
     case "Thunderstorm":
       $("#icons").html(thunderstorm);
       break;
     case "Drizzle":
       $("#icons").html(drizzle);
       break;
     case "Rain":
       $("#icons").html(rain);
       break;
     case "Snow":
       $("#icons").html(snow);
       break;
     case "Clouds":
       $("#icons").html(clouds);
       break;
     case "Extreme":
       $("#icons").html(extreme);
       break;
     case "Clear":
       $("#icons").html(clear);
       break;  
   }
    

  });

});