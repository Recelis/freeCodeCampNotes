// take in list of numbers in array
var array = Array.apply(null, Array(1000)).map(Number.prototype.valueOf,Math.floor(0));
array = fillArrayWithRandomNumbers(array);
array = quickSort(array);

function fillArrayWithRandomNumbers(editArray){
    for (let ii =0; ii < editArray.length; ii++){
        editArray[ii] = Math.floor((Math.random() * 1000) + 1);
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

function splitArray(editArray){
    
    return editArray;
}


console.log(array);