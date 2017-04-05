/*
findElement.js
Jacky Lui

input: an arr of numbers
do: checks each number through function
output: returns first number that passes function

do: 
use Javascript's filter function to check if passed
return first value in output of filter
*/
function findElement(arr, func) {
  var num = 0;
  var filtArr = filtered = arr.filter(func);
  return filtArr[0]; // assume will always return a number
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
