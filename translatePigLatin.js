
var vowels = ['a','e','i','o','u'];

function translatePigLatin(str) {
    var cluster = [];
    // break string into array
    var array = str.split('');
    arrayCopy = array.slice();
    // loop through letters until first vowel is found
    for (var jj =0; jj < array.length; jj++){
        // if word begins with vowel
        for (var ii =0; ii < vowels.length;ii++){  
            if (array[0] === vowels[ii]){
                array.push('way');
                var string = array.join('');
                console.log(string);
                return string; // good way to filter out things
            }
            // what's left is obviously not a vowel
            if (array[jj] === vowels[ii]){ // will only start activating after the first letter
                cluster = cluster.join('');
                arrayCopy.push(cluster);
                arrayCopy.push('ay');
                var string = arrayCopy.join('');
                console.log(string);
                return string;
            }
        } cluster.push(arrayCopy.shift()); // filled with the entire consonant cluster
    }
    return array; // will never get here
}

translatePigLatin("glove");
