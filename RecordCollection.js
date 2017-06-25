/* RecordCollection.js
Jacky Lui

Input: music id, music property, value
Do: modify data in JSON,If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.
Output: return entire changed collection

Do:
If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before adding the new value to the album's corresponding property.
If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.
If value is empty (""), delete the given prop property from the album.

if statement to test for condition, isn't tracks and value isn't empty, update or set value
else if (tracks):
  if empty: create empty array
  else: push value to existing
else if (value is empty): 
  delete prop property from album
else: 
  do nothing

*/
// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  if (prop !== "tracks" && value !== ""){
    // set or update value    
    collection[id][prop] = value;
  } else if (value === ""){
    delete collection[id][prop];
  } else if (prop === "tracks"){
    if (collection[id].hasOwnProperty(prop)) {
      collection[id][prop].push(value);
    }
    else {
      collection[id][prop] = [];
      collection[id][prop].push(value);
    }
  } else{

  }
  return collection;
}

// Alter values below to test your code
var obj = updateRecords(2548, "tracks", "");
console.log(obj);
