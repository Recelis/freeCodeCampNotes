/*
booWho: 
Input: bool value
Do: Check if a value is classified as a boolean primitive.
What are boolean primitives?

Return: true or false.

*/
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if (bool === true || bool === false){
      return true;
  }
  return false;
}

booWho(null);
