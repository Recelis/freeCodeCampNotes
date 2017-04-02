// roman numeral converter
var romanLetters = {
1:["I","V", "X"],
2:["X","L", "C"],
3:["C", "D", "M"]
};

var combinations = {    
1:[0],
2:[0,0],
3:[0,0,0],
4:[0,1],
5:[1],
6:[1,0],
7:[1,0,0],
8:[1,0,0,0],
9:[0,2]
};

function convertToRoman(num) {
// find divider 
var digit = 1;
var result = "";
var newNum = num;
while(newNum > 0){
    var partResult = "";
    var combObject = newNum%10;
    newNum = Math.floor(newNum/10);
    if (combObject == 0) {
        digit ++; 
        continue;
    }
    console.log("newNum " + newNum);
    console.log("combObject " + combObject);
    // loop over combinations
    var combMatrix = combinations[combObject];
    console.log("combMatrix " + combMatrix);
    for (var ii =0; ii < combMatrix.length; ii++){
        partResult+=romanLetters[digit][combMatrix[ii]];
        console.log(romanLetters[digit][combMatrix[ii]]);
    }
    result = partResult + result;
    console.log(result);
    digit++;
}
return result;
}

convertToRoman(500)
