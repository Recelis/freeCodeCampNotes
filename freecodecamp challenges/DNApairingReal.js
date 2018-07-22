// pairs are GC or CG 
// and AT or TA
var pairs = {
    "G":"C",
    "C":"G",
    "A":"T",
    "T":"A"
};

function pairElement(str) {
  var array = str.split('');
  var pair = [];
  var output = [];
  // detect first letter of pair
  for(var count =0; count < array.length; count++){ // used as a solution to keep keep testing for extra letters
    pair = [array[count], pairs[array[count]]];
    output.push(pair);
    console.log(pair);
  }
  console.log(output);
  return output;
}

pairElement("GCG");
