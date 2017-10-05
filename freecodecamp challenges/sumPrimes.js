/*
sumPrimes.js
Jacky Lui

Input: number
Do: Sum all the prime numbers up to and including the provided number.
Output: sum

Do:
loop through all previous numbers 2-> num
check if they can be subdivided by numbers behind (to add prime)
if can, then skip.
if not, then add that to sum. 
*/

function helperSummer(ii, sum){
    for (var jj =2; jj < ii; jj++){
            if (ii%jj==0) return sum;
    }
    return sum+=ii;
}

function sumPrimes(num) {
    var sum =0;
    for (var ii =2; ii <= num; ii++){
        sum = helperSummer(ii, sum);
    }
    console.log(sum);
    return sum;
}

sumPrimes(11);
