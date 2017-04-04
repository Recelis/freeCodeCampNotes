/*
sumFigs.js -> misspelt word
Jacky Lui

Input: integer
Do: return the sum of all odd Fibonacci numbers that are less than or equal to num
Output: integer

Do:
 can't use dynamic programming to solve Fibonacci sequence?
 use while loop with a matrix containing current number and previous number
 shift numbers back after next number is found
 sum only those fibonacci numbers that are odd
*/ 


function sumFibs(num) {
    var array = [1,1];
    var sum = 2; // assume first two numbers are already added
    while(num > array[1]){
        var nextValue = array[0] + array[1];
        if (nextValue > num) {
            console.log(nextValue);
            console.log(num);
            break; // feels messy
        }
        // shift backwards
        console.log(array);
        array[0] = array[1];
        array[1] = nextValue;
        
        console.log("nV" + nextValue);
        if (nextValue%2!=0) sum += nextValue;
        console.log("sum " + sum);
    }
    var output = sum;
    console.log(output)
  return output;
}

sumFibs(10);