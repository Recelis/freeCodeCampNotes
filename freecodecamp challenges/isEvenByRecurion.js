function isEven(n){
    if (n === 0){
        console.log("true");
        return true;
    } 
    if (n === 1) {
        console.log("false");
        return false;
    }
    return isEven(n-2);
}