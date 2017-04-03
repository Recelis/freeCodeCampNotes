/*
uniteUnique.js
Jacky Lui
Input: an array of arrays
Do: combine the matrices together, one matrix at a time, no overlap
Output: one array

Do:
read array,
check arrays behind
if not duplicate, add to output array
*/
var output = [];

function helperLoop(val){
    // check against output array
    for (var kk =0; kk < output.length; kk++){
        if (val === output[kk]) {
            console.log("value " + val);
            console.log("output " + output[kk]);
            return;// do something
        }
    }
    // add to output if not in output array
    console.log("added" + val);
    output.push(val);
}


function uniteUnique(arr) {
  // loop through each value in arr
    console.log(arguments.length);
    // loop through values in each array       
    for(var ii =0; ii < arguments.length; ii++){
        console.log(arguments[ii]);
        for (var jj =0; jj < arguments[ii].length; jj++){
            helperLoop(arguments[ii][jj]);
        }
    }
    console.log(output);
    return output;
}

uniteUnique([1, 2, 3], [5, 2, 1]);
