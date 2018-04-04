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

  var repair1 = repair.services.tuneUp;
  var servicename1 = document.getElementById('servicename1');
  servicename1.innerHTML = repair1.name;
  var serviceprice1 = document.getElementById('serviceprice1');
  serviceprice1.innerHTML = repair1.price;

  var repair2 = repair.services.brakeRepair;
  var servicename2 = document.getElementById('servicename2');
  servicename2.innerHTML = repair2.name;
  var serviceprice2 = document.getElementById('serviceprice2');
  serviceprice2.innerHTML = repair2.price;

  var repair3 = repair.services.tireBalancing;
  var servicename3 = document.getElementById('servicename3');
  servicename3.innerHTML = repair3.name;
  var serviceprice3 = document.getElementById('serviceprice3');
  serviceprice3.innerHTML = repair3.price;

  var repair4 = repair.services.chainReplacement;
  var servicename4 = document.getElementById('servicename4');
  servicename4.innerHTML = repair4.name;
  var serviceprice4 = document.getElementById('serviceprice4');
  serviceprice4.innerHTML = repair4.price;

  var part1 = repair.services.tuneUp;
  var partname1 = document.getElementById('partname1');
  partname1.innerHTML = part1.name;
  var partprice1 = document.getElementById('partprice1');
  partprice1.innerHTML = part1.price;

  var part2 = repair.services.brakeRepair;
  var partname2 = document.getElementById('partname2');
  partname2.innerHTML = part2.name;
  var partprice2 = document.getElementById('partprice2');
  partprice2.innerHTML = part2.price;

  var part3 = repair.services.tireBalancing;
  var partname3 = document.getElementById('partname3');
  partname3.innerHTML = part3.name;
  var partprice3 = document.getElementById('partprice3');
  partprice3.innerHTML = part3.price;
}