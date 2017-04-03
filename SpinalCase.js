/*
spinalCase.js
Jacky Lui
Input: input str, multicase with normal spacing
Do: convert str to lowercase with spinal case spacing
Output: output str, lowercase with spinal case spacing

Do: 
use replace to replace all capitals with space and lowercase, after first value
use replace to find all of the spaces and replace with dash
convert str to lowercase
*/

function replacer(match, p1, offset, string) {
  // p1 is capital letter
  return '-' + p1.toLowerCase();
}

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var sliced = str.slice(1);
  var caps = sliced.replace(/(\s[a-z])/g, replacer);
  caps = caps.replace(/([A-Z])/g, replacer);
  
  console.log(caps);
  var output = caps.replace(/([^a-z-])/gi, '');
  output = str[0].toLowerCase() + output;
  console.log(output);
  return output;
}

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("Teletubbies say Eh-oh");