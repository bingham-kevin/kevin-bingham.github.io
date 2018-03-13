var high = 90;
var low = 66;
var speed = 5;
var tempF = ((high - low) / 2) + low;
var windchill = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
windChill = Math.round(windchill);
document.getElementById("windchill").innerHTML = "Feels like: " + windChill + "&#8457";