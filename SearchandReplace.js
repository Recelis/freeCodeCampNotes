// use match, replace
function myReplace(str, before, after) {
    // find before string
    // splice string
    var array=str.split(' ');
    // loop through for before string
    for (var ii =0; ii < array.length; ii++){
        if (array[ii].toLowerCase() === before.toLowerCase()){
            // check capitalisation of string word
            if (array[ii] == array[ii].toLowerCase()) array[ii] = after;
            else{ // convert after to upperCase
                var capitalAfter = after.split('');
                var firstLetter = capitalAfter.shift();
                capitalAfter.unshift(firstLetter.toUpperCase());
                capitalAfter = capitalAfter.join('');
                array[ii] = capitalAfter;
            }
        }
    } 
    var ret = array.join(' ');
    console.log(ret);
    return ret;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
