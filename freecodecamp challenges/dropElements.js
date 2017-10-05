/*
dropElements.js
Jacky Lui

Input: an array and a function
Do: remove elements of array until function returns true
Output: an array

Do:
loop through arr
check against function
if true, return array
if not, remove value
*/


function dropElements(arr, func) {
  // Drop them elements.
  while(arr.length > 0)
    if (func(arr[0]) === true){
        console.log(arr);
        return arr;
    } else{
        arr.shift();
    }
    console.log(arr);
    return arr;
}

dropElements([1, 2, 3], function(n) {return n > 2; });
