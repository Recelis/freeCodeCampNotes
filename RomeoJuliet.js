
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var sourceKeys = Object.keys(source);
  // loop through collection
  for (var ii =0; ii < collection.length; ii++){
      var count = 0;
      // loop through source keys
      for (var jj =0; jj < sourceKeys.length; jj++){
          if (collection[ii][sourceKeys[jj]] !== source[sourceKeys[jj]]) break;
          else{
              count++;
          }
      }
      if (count === sourceKeys.length) arr.push(collection[ii]);      
  }
 
  
  // Only change code above this line
  console.log(arr);
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })
