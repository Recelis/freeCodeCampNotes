/* 
convertHTML.js
Jacky Lui
Input: a string containing characters &, <, >, " (double quote), and ' (apostrophe)
Do: find all special characters, replace with HTML entities
Output: a string with characters changed to HTML entities 

Do: use the replace function, for each character in a loop
*/

var characters = [
    [/&/gi, '&amp;'],
    [/</gi, '&lt;'],
    [/>/gi, '&gt;'],
    [/"/gi, '&quot;'],
    [/'/gi, '&apos;']
];
    

function convertHTML(str) {
  for (var ii =0; ii < characters.length;ii++){
      str = str.replace(characters[ii][0], characters[ii][1]);
  }
  console.log(str);
  return str;
}

convertHTML("Dolce & Gabbana");
