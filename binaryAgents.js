/*
binaryAgent.js
Jacky Lui

Input: a string of binary numbers 
Do: convert binary to words
Output: a string of actual words

Do:
convert strings to array with strings
loop through array:
    convert binary string to decimal using helper function
    convert each decimal in arr[n] to english using javascript's fromCharCode(), not sure how to use multiple arg input
join array back into string

helpfunction:
 
loops through length of string from back to front
    convert each element into decimals
    totalSum is += dec[n] * 2^n    
*/
function convertBinarytoDec(str){
    var totalSum = 0;
    n = 0;
    for (var ii =str.length-1; ii >= 0; ii--){
        totalSum += Number(str[ii]) * Math.pow(2,n);
        n++;
    }
    return totalSum;
}

function binaryAgent(str) {
    var array = str.split(' ');
    // console.log(array);
    for (var ii =0; ii < array.length; ii++){
        array[ii] = convertBinarytoDec(array[ii]);
        // console.log(array[ii]);
        array[ii] = String.fromCharCode(array[ii]);
        // console.log(array[ii]);
    }
    var output = array.join('');
    console.log(output);
    return output;
}

binaryAgent("01000001");
