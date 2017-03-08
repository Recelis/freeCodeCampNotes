var divider = [1000,500,100,50,10,5,1];
var romanLetters = ["M","D","C","L","X","V","I"];
var result = [];
var ii = 0;
function convertToRoman(num){
    var remainder = -1;
    var maxRemainder = 1;
     var newNum = num;
    while (remainder < 0){
        if (Math.floor(num/divider[ii]) > 0) maxRemainder = Math.floor(num/divider[ii]);
        remainder = num - divider[ii]; // loop through divider until gives remainder
        console.log("");
        console.log("num" + num);
        console.log("divider" + divider[ii]);
        console.log("maxRemainder " + maxRemainder);
        console.log("remainder " + remainder);
        console.log("odd or even "+ ii%2);
        if (ii%2 == 1 && remainder == 4){ // is odd so it ends with 5 and remainder is 4
            
            console.log("5! " + divider[ii]);
            remainder = 9;
        } 
        ii++;
    }
    if (remainder > 0){
        // remove zeros
        var removedZeros = remainder;
        while(removedZeros >= 10){
            removedZeros = Math.floor(removedZeros/10);
        }
        alert(removedZeros);
        // letters out to result
        if (removedZeros == 9 || removedZeros == 3){
            
            if (removedZeros == 9){
                console.log("nine: " + romanLetters[ii]+romanLetters[ii-2]);
                result.push(romanLetters[ii]+romanLetters[ii-2]);
                newNum = num - 9*divider[ii+1];
            }
            if (removedZeros == 3){
                console.log("four: " + romanLetters[ii-1]+romanLetters[ii-2]);
                result.push(romanLetters[ii-1]+romanLetters[ii-2]);
                newNum = num - 4*divider[ii-1];
            }
        }else{
            for (var jj =0; jj < removedZeros; jj++){
                console.log("testing");
                console.log(romanLetters[ii-1]);
                result.push(romanLetters[ii-1]);
                newNum = num - maxRemainder*divider[ii-1];
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
        console.log("newNum: " + newNum);
        if (newNum > 0){
            convertToRoman(newNum);
        }
    }
}
convertToRoman(649);
console.log(result.join(''));
