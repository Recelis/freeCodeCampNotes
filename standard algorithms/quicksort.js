var testArray = [33,10,15,7, 82, 93,1,3];
sorted = quickSort(testArray);
console.log(sorted);


function quickSort(inputArray){
    // base case
    if (inputArray.length < 2){
        return inputArray;
    }
    else {
        // pick pivot
        let pivot = inputArray[0];
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