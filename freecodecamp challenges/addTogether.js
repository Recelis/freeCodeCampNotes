/*
addTogether.js
Jacky Lui

Input: either two arguments or one argument
Do: if two arguments, return both of them added together or return a function that is waiting to add to another variable
Output: variable or function

Do:
if statement to check for two variables or one
if two, return sum
if not, then create adding function taking input and adding original variable

*/

function addTogether() {
    for (var ii =0; ii < arguments.length; ii++){
        if (!Number.isInteger(arguments[ii])) return undefined;
    }
    if (arguments.length == 1){
        var add = arguments[0];
        return function sumTogether(add2){
            for (var ii =0; ii < arguments.length; ii++){
                if (!Number.isInteger(arguments[ii])) return undefined;
            }
            return add + add2;
        };
    }        
    else if (arguments.length == 2){
        return arguments[0] + arguments[1];
    } else{
        return undefined;
    } 
}

var sum = addTogether(2,"3");
console.log(sum);