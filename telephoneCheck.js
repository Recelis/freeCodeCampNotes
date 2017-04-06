/*
telephoneCheck.js
Jacky Lui

Input: a string of numbers
Do: test whether numbers are true US numbers
Output: true or false bool

Do:
true US numbers formats:
3numbers-3numbers-4numbers
(brackets 3numbers)3numbers-4numbers
(brackets 3numbers) 3numbers-4numbers
3numbers 3numbers 4numbers
10numbers
1countrycode 3numbers 3numbers 4numbers

layout formats:
general test for right characters
test for big details to see if fits a specific format
    do extra tests and fail all other false cases
*/
function telephoneCheck(str) {
    // tests
    // contains the right numbers and symbols
    var matchedArr = str.match(/[^0-9-() ]/gi);
    console.log(matchedArr);
    if (matchedArr != null) return false;

    // test 1, test the right sized clumps
    var clumps = str.split("-");
    if (clumps.length == 3){
        if (clumps[0].length != 3) return false;
        if (clumps[1].length != 3) return false;
        if (clumps[2].length != 4) return false;
    }
    // test 2 & 3
    // right position of brackets
    var bracketsCheck = str.match(/[()]/gi);
    if (bracketsCheck.length == 2){
        if (bracketsCheck[0] != '(' || bracketsCheck[1] != ')' ||bracketsCheck.length != 2) return false;
        if (str[0] != '(' && str[4] != ')') return false;
        // do more tests
        var clumps2 = str.splice();
    }
    // test 4
    // test for the right sized clumps
    var clumps4 = str.split(" ");
    if (clumps4.length == 3){
        if (clumps4[0].length != 3) return false;
        if (clumps4[1].length != 3) return false;
        if (clumps4[2].length != 4) return false;
    }
    
    // if contains more than numbers

    
    // test 5
    // test for ten digits
    if (str.length == 10){
        var nonDigits = str.match(/[^0-9]/gi);
        if (nonDigits != null) return false;
    }
    // test 6
    // test for country code and then do clump length test
    if (clumps4.length == 4){
        if (clumps4[0] != '1') return false;
        if (clumps4[1].length != 3) return false;
        if (clumps4[2].length != 3) return false;
        if (clumps4[3].length != 4) return false;
    }

    // Good luck!
    return true;
}



telephoneCheck("555-555-5555");
