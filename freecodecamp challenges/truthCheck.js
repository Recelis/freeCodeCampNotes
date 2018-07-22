/*
truthCheck.js
Jacky Lui

Input: two arguments, first array of objects, second is a string
Do: check if objects containing second arg key are truthy of falsy
Output: true or false

Do:
Falsy variables
    false
    0 (zero)
    "" (empty string)
    null
    undefined
    NaN (a special Number value meaning Not-a-Number!)
Create global falsy table

loop through objects
    scan each object key to check if they are falsy
    if so, return false
return true if can't find any
*/

var falsy=[
    false,0,"",null,undefined
];

function truthCheck(collection, pre) {
  // Is everyone being true?
  for (var ii =0; ii < collection.length; ii++){
      for (var jj =0; jj <= falsy.length; jj++){
        if (collection[ii][pre]=== falsy[jj]) {
            console.log("triggered here")
            return false;
        }
        if (jj == falsy.length){
            console.log(typeof(collection[ii][pre]));
            if(isNaN(collection[ii][pre]) && typeof(collection[ii][pre])==="number") {
                return false;
            }
        }
      }
  }
  return true;
}

var out = truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
console.log(out);
