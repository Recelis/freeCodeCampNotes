
// take in list of numbers in array
var array = Array.apply(null, Array(100)).map(Number.prototype.valueOf,Math.floor(0));
array = fillArrayWithRandomNumbers(array);



function fillArrayWithRandomNumbers(editArray){
    for (let ii =0; ii < editArray.length; ii++){
        editArray[ii] = Math.floor((Math.random() * 100) + 1);
    }
    return editArray;    
}

function splitArray(editArray){
    
    return editArray;
}


console.log(array);