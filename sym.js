/* sym.js
Jacky Lui

input: two or more arrays
do: get arrays that are in either arrays but not in both
output: return symmetric difference

do:
use array reduce

reduce -> call function over all values of arrays
function -> reduce -> call another function(incoming value, all values)
if no match -> return 
add all values to output array


*/
function sym(args) {
    for (var ii =0; ii < args.length; ii++){
            var output = args.reduce(function(acc, value,index, array) {
            var checkAgainst = args.reduce(function(acc1, value1,index1, array1){

            });// inefficient
        }, 0);
    }
    

  return output;
}

sym([1, 2, 3], [5, 2, 1, 4]);
