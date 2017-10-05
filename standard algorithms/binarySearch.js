// take in list of numbers in array
var array = Array.apply(null, Array(5)).map(Number.prototype.valueOf,Math.floor(0));
var index = null;
var lookup = 3;
(function binarySearch(number){
    array = fillArrayWithRandomNumbers(array);
    array = quickSort(array);
    index = splitArray(array, number);
})(lookup);

function fillArrayWithRandomNumbers(editArray){
    for (let ii =0; ii < editArray.length; ii++){
        editArray[ii] = Math.floor((Math.random() * 6) + 1);
    }
    return editArray;    
}

function quickSort(inputArray){
    // base case
    if (inputArray.length < 2){
        return inputArray;
    }
    else {
        // pick pivot
        let pivot = [inputArray[0]];
        // loop through input Array
        let less = [];
        let more = [];
        let pivotValues = pivot;
        for (let ii =1; ii < inputArray.length; ii ++){
            if (inputArray[ii] < pivot) less.push(inputArray[ii]);
            else if (inputArray[ii] === pivot) pivotValues.push(inputArray[ii]);
            else more.push(inputArray[ii]); 
        }
        let sortedArray = Array.prototype.concat.apply([], [quickSort(less),pivotValues,quickSort(more)]);
        return sortedArray;
    }
}

function splitArray(editArray, number){
    let guess = Math.floor(editArray.length/2);
    console.log('guess: ' + guess);
    console.log("edit guess: " + editArray[guess]);
    console.log("editArray: " + editArray);
    if (number < editArray[guess]) return splitArray(editArray.slice(0,guess), number);
    else if (number > editArray[guess]) {
        let value = splitArray(editArray.slice(guess+1), number);
        if (value !== null) value += guess+1;
            return value;
        }
         
    else if (number === editArray[guess]) return guess;
    else return null;
}


console.log(array);
console.log(lookup);
console.log(index);