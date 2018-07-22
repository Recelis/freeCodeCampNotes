// find missing letter
function fearNotLetter(str) {
    for (var ii =0; ii < str.length -1; ii++){ // exit case built in
        var charCodeArr = [];
        var charCode = str[ii].charCodeAt();
        var charCodeNext = str[ii+1].charCodeAt();
        // make sure that you're counting up
        console.log(charCode);
        console.log(charCodeNext);
        if(charCode+1 != charCodeNext){
            // add string value
            console.log(String.fromCharCode(charCode+1));
            return String.fromCharCode(charCode+1);
        }
    }
    return undefined;
}

fearNotLetter("abce");
