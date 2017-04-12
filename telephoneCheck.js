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
general test for 
test for big details to see if fits a specific format
    do extra tests and fail all other false cases
*/
function telephoneCheck(str) {
    // tests
    // contains the right numbers and symbols
    var matchedArr = str.match(/[^0-9-() ]/gi);
    console.log(matchedArr);
    if (matchedArr != null) return false;
    // remove digits
    var numberCheck = str.replace(/[^0-9]/gi,'');
    console.log(numberCheck); 
    // contains 9 or 10 numbers
    if (numberCheck.length != 10 && numberCheck.length != 11) return false;

    // test 1, test the right sized clumps
    var clumps = str.split("-");
    console.log("clumps:" + clumps);
    if (clumps.length == 3){
        console.log("test1 " + clumps);
        var nonNumbers = str.match(/[^0-9-]/gi);
        if (nonNumbers == null){
            if (clumps[0].length != 3) return false;
            if (clumps[1].length != 3) return false;
            if (clumps[2].length != 4) return false;
        }
    }
    // test 2 & 3
    // right position of brackets
    var bracketsCheck = str.match(/[()]/gi);
    if (bracketsCheck != null){
        console.log("test2&3 " + bracketsCheck);
        if (bracketsCheck.length == 2){
            if (bracketsCheck[0] != '(' || bracketsCheck[1] != ')' ||bracketsCheck.length != 2) return false;
            // see if have country code
            if(numberCheck.length == 11){
                console.log("test2 nC11");
                if (str.indexOf('(') == 1){
                    if (str.indexOf(')') != 5) return false;
                    // check country code
                    if (str[0] != '1') return false; 
                    var slicePos = 6;
                } else if (str.indexOf('(') == 2){
                    if (str.indexOf(')') != 6) return false;
                    var slicePos = 7;
                } else return false;
            } else if (numberCheck.length == 10){
                console.log("test2 nC10");
                var slicePos = 5;
                if (str[0] != '(' && str[4] != ')') return false;
            } else return false;
            // do more tests
            var portioned = str.slice(slicePos);
            var clumps2 = portioned.split("-");
            console.log("clumps2: " + clumps2);
            if (clumps2[0].length == 4){
                if (clumps2[0][0] != ' ') return false;
            } else if (clumps2[0].length == 3){
                if (clumps2[1].length != 4) return false;
            } else{ 
                return false;
            }
        } else{
            return false;
        }
    }
    
    // test 4
    // test for the right sized clumps
    var clumps4 = str.split(" ");
    console.log("clumps4:" + clumps4);
    if (clumps4.length == 3){
        // hard code for mixed ' ' and '-' delimiters
        if (numberCheck.length != 11){
            console.log("test4 " + clumps4);
            if (clumps4[0].length != 3) return false;
            if (clumps4[1].length != 3) return false;
            if (clumps4[2].length != 4) return false;
        } else{
            if (bracketsCheck == null){ // no brackets
                console.log("test4 " + clumps4 + " with country code");
                if (clumps4[0].length != 1 || clumps4[0] != '1') return false;
                if (clumps4[1].length != 3) return false;
                if (clumps4[2].length != 8) return false;
            } else{
                if (clumps4[0].length != 1 || clumps4[0] != '1') return false;
                if (clumps4[1].length != 5) return false;
                if (clumps4[2].length != 8) return false;
            }
        }

    }
    
    // if contains more than numbers

    
    // test 5
    // test for ten digits
    if (clumps4.length == 1 && clumps.length == 1){
        console.log("test 5");
        if (str.length == 10){
            var nonDigits = str.match(/[^0-9]/gi);
            console.log("test5 " + nonDigits);
            if (nonDigits != null) return false;
        } else{
            return false;
        }  
    }
    // test 6
    // test for country code and then do clump length test
    if (clumps4.length == 4){
        console.log("test6 " + clumps4);
        if (clumps4[0] != '1') return false;
        if (clumps4[1].length != 3) return false;
        if (clumps4[2].length != 3) return false;
        if (clumps4[3].length != 4) return false;
    }

    // Good luck!
    return true;
}



var output = telephoneCheck("1 (555) 555-5555");
console.log(output);

// input 1 555-555-5555 not tested