/*
smallestCommons.js
Jacky Lui

Input: an array of two numbers
Do: find smallest common multiple of all numbers between the two given by the array inclusive 
Output: the smallest common multiple, a number

Do: 
sort arr into order
find LCM using pair trick of arr numbers
    LCM helper function
        GCF helper function + other stuff
loop: while(arr[0]+n < arr[1])
    check if (arr[0] + n) divisible by LCM
        if not: 
            get factors of arr[0] +n using factors helper function
            sort factors ascending
            loop through factors:
                multiply each factor by LCM, check to see if multiplied LCM divisible by arr[0]+n
                if divisible, LCM is now new multiplied LCM
*/
function factorsHelper(num, scm){
    // get factors of num
    var factors = [];
    for (var ii =1; ii <= num; ii++){
        if (num%ii === 0){
            if (scm*ii%num === 0) { // if new scm is divisible by num
                return scm*ii;
            }
        }
    }
    return scm*num; // return largest possible multiple, should never enter here
}

function GCFhelper(arr){ //sorted arr
    // loop down from smaller arr value until find common factor
    for (var ii =arr[0]; ii >= 1; ii--){
        if (arr[0]%ii=== 0 && arr[1]%ii === 0) return ii;
    } 
    return 1; // should never get here
}

function LCM(arr){ // don't have mathematical proof that this works except for a few trials
    // get Greatest Common Factor    
    var gcf = GCFhelper(arr);
    return arr[0]/gcf * arr[1]; 
}

function smallestCommons(arr) {
    // sort arr
    if (arr[0] > arr[1]){
        var temp = arr[0];
        arr[0] = arr[1];
        arr[1] = temp;
    }
    var scm = LCM(arr);
    // build up smallest common multiple scm
    var n =1;
    while (arr[0] + n < arr[1]){
        if (scm%(arr[0] + n)===0) n++;
        else{
            scm = factorsHelper(arr[0] + n, scm);
            n++;
        }
    }
    console.log(scm);
    return scm;
}


smallestCommons([1,13]);
