function hundredDoors (numDoors) {
        // forget about negative numbers
        if (numDoors <= 0) return null;

        // initialise a door array
        let door = Array(numDoors).fill(false);
        console.log(door);
        // initialise jj
        let jj = 1;
        // loop through 100 times
        for (let ii = 1; ii <= numDoors; ii++){
            // initialise a count value that goes through door array
            let count = jj-1;
            while ( count < numDoors){
                // check every jj door start from first door
                door[count] = !door[count];
                count = count + jj; // if higher than 100th door, exit loop
            }
            jj++;
            // toggle values
        } 
        // initialise output array
        let outDoor = [];
        // return door numbers if open (true)
        for (let kk = 0; kk < door.length; kk ++){
            if (door[kk] === true) outDoor.push(kk+1); // +1 because array does not start at 0 
        }
        return outDoor;
}

module.exports = hundredDoors;

