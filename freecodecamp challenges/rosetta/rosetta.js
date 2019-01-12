function rosetta (numDoors) {
    
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
                console.log('checking');
                door[count] = !door[count];
                count = count + jj; // if higher than 100th door, exit loop
            }
            jj++;
            // toggle values
        } 
        return door;
}

module.exports = rosetta;

