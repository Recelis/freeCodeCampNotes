/*
orbitalPeriod.js
Jacky Lui

input: average altitude
do: plug into orbital period equation
output: orbital periods

do:
orbitalPeriod = orbital period equation
round to nearest whole number

remove avgAlt
add new parameter orbitalPeriod
*/
function orbitalPeriod(arr) {
  console.log(arr);
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  for (var ii =0; ii < arr.length; ii++){
    var a = earthRadius + arr[ii].avgAlt;
    var period = 2*Math.PI*Math.sqrt(Math.pow(a,3)/GM); 
    if (period - Math.floor(period) < 0.5 ) period = Math.floor(period);
    else period = Math.ceil(period);

    delete arr[ii].avgAlt;
    arr[ii].orbitalPeriod = period;
  }
  
  console.log(arr);
  return arr;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
