// print out all numbers from 1 to 100 inclusive.
// if modulus of 3 === 0, then print out Fizz
// if modulus of 5 === 0, then print out Bizz
// if both, then print out FizzBizz

for (let ii =1; ii <= 100; ii++){
    if (ii%3 === 0) {
        if (ii%5=== 0) console.log("FizzBizz");
        else console.log("Fizz");
    }
    else if (ii%5 === 0) console.log("Bizz");
    else console.log(ii);
}
