  var section = document.querySelector('section');
  var requestURL = 'https://api.wunderground.com/api/e61d8ead2b2d7e5e/conditions/q/MN/Franklin.json';
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    var townData = request.response;
    weatherData(townData);
  }

  function weatherData(jsonObj) {
    var weather = jsonObj['current_observation'];

    var locationName = document.getElementById('cityname');
    var cityname = weather['display_location'].city;
    locationName.innerHTML = cityname;
    var current = document.getElementById('conditions');
    current.innerHTML = weather.weather;
    var precip = document.getElementById('precipitation');
    precip.innerHTML = "Precipitation: " + weather.precip_today_in + " inches";
    var windSpeed = document.getElementById('wind');
    windSpeed.innerHTML = "Wind Speed: " + weather.wind_mph + " mph";
    var feelsLike = document.getElementById('windchill');
    feelsLike.innerHTML = "Feels like: " + weather.windchill_f + "&deg; F";
    var currentPic = new Image();
    currentPic.src = weather.icon_url;
    document.getElementById('currentPic').appendChild(currentPic);
    document.getElementById('cityheading').innerHTML = `The City of ${cityname}`;
  }

  var section1 = document.querySelector('section');
  var requestURL1 = 'https://api.wunderground.com/api/e61d8ead2b2d7e5e/forecast/q/MN/Franklin.json';
  var request1 = new XMLHttpRequest();
  request1.open('GET', requestURL1);
  request1.responseType = 'json';
  request1.send();
  request1.onload = function() {
    var highLow = request1.response;
    currentData(highLow);
  }

  function currentData(jsonData) {
    var jsonRoot = jsonData['forecast'];
    console.log(jsonRoot);
    var highTemp = document.getElementById('high');
    highTemp.innerHTML = "High: " + jsonRoot.simpleforecast.forecastday[0].high.fahrenheit + "&deg; F";
    var lowTemp = document.getElementById('low');
    lowTemp.innerHTML = "Low: " + jsonRoot.simpleforecast.forecastday[0].low.fahrenheit + "&deg; F";
    var fcttext = document.getElementById('forecasttext');
    fcttext.innerHTML = jsonRoot.txt_forecast.forecastday[0].fcttext;
  }