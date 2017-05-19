/*
pairWise.js
Jacky Lui

input: an array and an argument
do: find the pair from the array which sum to the argument
output: sum all the indices of the pairs, but cannot reuse numbers in different pairs

do:
test all pair permutations
if match then sum to total sum, and put NaNs to replace values so that they cannot be used again
*/
function pairwise(arr, arg) {
    var sum = 0;
    for (var ii =0; ii < arr.length; ii++){
        for (var jj =0; jj < arr.length -1; jj++){
            var total = arr[ii]+arr[jj];
            if (jj ===ii) continue;
            if (arr[ii] + arr[jj] === arg){
                sum = sum + ii + jj;
                arr[ii] = NaN;
                arr[jj] = NaN;
            }
      }
  }
  return sum;
}

var sum = pairwise([1, 1, 1], 2);
console.log(sum);