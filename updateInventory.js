/*
updateInventory.js
Jacky Lui

input: two arrays
do: merge the two arrays together
output: one array

do: 
convert current array to objects
convert new inventory shipment to objects

compare new shipment old, 
if exist: 
    updated inventory = current + new
else: 
    create new category
    updated inventory = new
convert updated object to array, sorted on property
*/ 
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    var updateInventory = {};
    for (var ii = 0; ii < arr1.length; ii ++){
        updateInventory[arr1[ii][1]] = arr1[ii][0];
    }
    // add inventory 
    for (var ii =0 ; ii < arr2.length; ii++){
        if (updateInventory[arr2[ii][1]] == undefined){
            updateInventory[arr2[ii][1]] = arr2[ii][0];
        } else{
            updateInventory[arr2[ii][1]] += arr2[ii][0];
        }
    }
    // convert updateInventory to sorted array
    var outputArr = [];
    var updateKeys = Object.keys(updateInventory);
    updateKeys = updateKeys.sort();
    console.log(updateKeys);
    for (var ii =0; ii < updateKeys.length; ii++) {
        outputArr.push([updateInventory[updateKeys[ii]], updateKeys[ii]]);
    }
    console.log(updateInventory);
    console.log(outputArr);
    return outputArr;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
