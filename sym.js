/* sym.js
Jacky Lui

input: two or more arrays
do: get arrays that are in either arrays but not in both
output: return symmetric difference

do:
use array reduce

reduce -> call function over all values of arrays
function -> reduce -> call another function(incoming value, all values)
if no match -> return 
add all values to output array // rewrite using reduce

// actual

for loop of arguments
    for loop through first array
        remove repeating values first array
        for loop through nth array
            remove repeating values second
            if match    
                remove all matching values from both arrays
                combine two arrays into one output
sort output array
*/

function filter(array, nonSym){
    while(array.indexOf(nonSym) != -1){
        console.log("ns " + nonSym);
        index = array.indexOf(nonSym);    
        array.splice(index, 1);	
        console.log(index);
        console.log("arr " + array);
    }
    return array;    
}

function checkMatch(output, symArray0, symArray1){
    var symArrayCopy = Array.slice(symArray0);
    for (var jj =0; jj < symArrayCopy.length; jj++){ // loop through output array values 
        symArray0 = symArray0.slice(0,jj+1).concat(filter(symArray0.slice(jj+1), symArray0[jj])); // remove repeating values
        for (var kk =0; kk < symArray1.length; kk++){ // symArrays dynamically change size in loop
            symArray1 = symArray1.slice(0,kk+1).concat(filter(symArray1.slice(kk+1), symArray1[kk])); // remove repeating values
            if (symArrayCopy[jj] === symArray1[kk]) {
                var nonSym = symArray1[kk];
                console.log("nsO " + nonSym);
                // remove values in symArray0 and symArray1 
                symArray0 = filter(symArray0, nonSym);
                symArray1 = filter(symArray1, nonSym);
                break; 
            }
        }   
    }
    output = symArray0.concat(symArray1);
    return output;
}

function sym(args) {
    var output = arguments[0];
    for (var ii =1; ii < arguments.length; ii++){
        console.log(output);
        console.log(arguments[ii]);
        var symArray0 = output;
        var symArray1 = arguments[ii];
        output = checkMatch(output,symArray0, symArray1);
    }
    output = output.sort(function(a, b){return a - b;});
    return output;
}

var output = sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
console.log("final " + output);