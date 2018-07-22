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
  var firstLetter = '';
  var count = 0; 
  var pair = [];
  var output = [];
  // detect first letter of pair
  while(count < array.length || firstLetter != ''){ // used as a solution to keep keep testing for extra letters
      if (firstLetter === ''){ // if first letter is empty
        firstLetter = array[count]; 
        console.log("firstLetter is "+firstLetter); 
      } else{ // checking second letter
        if (array[count] === pairs[firstLetter]){
            pair = [firstLetter, pairs[firstLetter]];
            output.push(pair);
            console.log(pair);
            firstLetter = '';
        } else{
            console.log("pairs is" + pairs[firstLetter]);
            pair = [firstLetter, pairs[firstLetter]];
            output.push(pair);
            firstLetter = '';
        }
      }
      count++;
  }
  console.log(output);
  return output;
}

pairElement("GCG");
