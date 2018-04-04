var section = document.querySelector('table');
var requestURL = 'https://kevin-bingham.github.io/assignments/themountainspoke/data/repair.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var repairData = request.response;
  repairPrice(repairData);
}

function repairPrice(jsonObj) {
  console.log(jsonObj)

  var repair = jsonObj;

  var service1 = document.getElementById('service1');
  service1.innerHTML = repair.services[0];
  document.getElementById('cityheading').innerHTML = `The City of ${cityname}`;
}