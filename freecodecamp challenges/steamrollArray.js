/*
steamrollArray.js
Jacky Lui

Input: an array that has nested values
Do: extract the nested values, and place them into output array
Output: an array with no nested values

Do:
use Javascript isArray function
recursive function need:
    loop through arr values
    if arr[n] is array, recurse again
    if not pass to output global array 
    
*/


function recurseArray(arr, output) {
    // I'm a steamroller, baby
    for (var ii =0; ii < arr.length; ii++){
        if (Array.isArray(arr[ii])) output = recurseArray(arr[ii], output);
        else{
            output.push(arr[ii]);
        }
    }
    return output;
}
function steamrollArray(arr){
    var output = [];
    output = recurseArray(arr, output);
    console.log(output);
    return output;
}
steamrollArray([1, [2], [3, [[4]]]]);
