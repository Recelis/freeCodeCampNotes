var divider = [1000,500,100,50,10,5,1];
var romanLetters = ["M","D","C","L","X","V","I"];
var result = [];
var ii = 0;
function convertToRoman(num){
    var remainder = 0;
    while (remainder == 0){
        remainder = num%divider[ii]; // loop through divider until gives remainder
        // alert(ii);
        ii++;
        console.log("remainder " + remainder);
        console.log(ii%Math.floor(ii/2));
        if (ii%Math.floor(ii/2) == 1 && remainder == 4){ // is odd so it ends with 5 and remainder is 4
            
            console.log("5! " + divider[ii]);
            remainder = 9;
            // ii--;
        } 
    }
    if (remainder > 0){
        // remove zeros
        var removedZeros = remainder%10;
        while(removedZeros >= 10){
            removedZeros = removedZeros%10;
        }
        // alert(removedZeros);
        // letters out to result
        if (removedZeros == 9 || removedZeros == 4){
            
            if (removedZeros == 9){
                console.log(romanLetters[ii - 1]+romanLetters[ii-3]);
                result.push(romanLetters[ii - 1]+romanLetters[ii-3])
            }
            if (removedZeros == 4){
                console.log(romanLetters[ii - 1]+romanLetters[ii-2]);
                result.push(romanLetters[ii - 1]+romanLetters[ii-2]);
            }
        }else{
            for (var jj =0; jj < removedZeros; jj++){
                console.log("testing");
                console.log(romanLetters[ii-1]);
                result.push(romanLetters[ii-1])
            }    
        } 
    }
    // alert("num"+ num + "remainder" + remainder + " rZ" + removedZeros + " ii"+(ii-1) +"+ div" + divider[ii-1]);
    // base case: 
    if (remainder == 0 && ii >= 6 || ii > 7){
        console.log("leave recursion");
        // leave recursion
    } else{ // remove the first digit in number
        // alert("recurse");
        // alert(remainder + " rZ" + removedZeros + " ii"+(ii-1) +"+ div" + divider[ii-1]);
        var newNum = num - removedZeros*divider[ii-1];
        if (newNum > 0){
            convertToRoman(newNum);
        }
    }
}
convertToRoman(9);
console.log(result.join(''));
