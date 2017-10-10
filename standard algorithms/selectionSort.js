
var array = [42, 34, 25, 65, 235, 23, 764, 1, 4, 75, 2];
let sortedArray = selectionSort(array);

function selectionSort(array) {
    // set current index as 0
    currentIndex = 0;
    // loop for all values
    while (currentIndex < array.length) {
        // find minimum value from currentIndex to end
        let smallestIndex = getMinimumValue(currentIndex, array);
        // swap currentIndex value with minimum value
        array = swapValue(currentIndex, smallestIndex, array);
        currentIndex++;
    }
    return array;
}

console.log(sortedArray);

function getMinimumValue(currentIndex, array) {
    let smallestNum = array[currentIndex];
    let smallestIndex = currentIndex;
    for (let ii = currentIndex; ii < array.length; ii++) {
        if (array[ii] < smallestNum) {
            smallestNum = array[ii];
            smallestIndex = ii;
        }
    }
    return smallestIndex;
}

// swap minimum value with array
function swapValue(currentIndex, smallestIndex, array) {
    // get currentIndex value
    let currentIndexValue = array[currentIndex];
    array[currentIndex] = array[smallestIndex];
    array[smallestIndex] = currentIndexValue;
    return array;
}