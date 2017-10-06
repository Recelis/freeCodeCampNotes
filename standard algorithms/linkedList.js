// get list of data

var data = ['orange', 'juice', 'apple', 'pear', 'beer', 'ham', 'burger'];

let linkedList = {};
// read in data
let firstIndex = 0;
let lastIndex = 0;
for (let ii =0; ii < data.length; ii++){
    // get index of data
    let nextIndex = 0;
    if (ii !== data.length - 1) nextIndex = ii+1;
    else nextIndex = ii;
    linkedList[ii] = [data[ii], nextIndex];
    lastIndex = ii;
}

let index = reading('ham');
linkedList = push(linkedList, 'pizza', 333);
linkedList = pop(linkedList);
console.log(linkedList);
console.log(index);
console.log('firstIndex: ' + firstIndex);
console.log('lastIndex: ' + lastIndex);

function reading(value){
    let count = 0;
    var index = 0; // assume that first memory location is 0
    while(count < Object.keys(linkedList).length){
        let stringifiedIndex = index.toString();
        if (linkedList[stringifiedIndex][0] === value) return index;
        else {
            index = linkedList[stringifiedIndex][1]; 
            count++;
        } 
    } return null;
}

function push(linkedList, value, location){
    // start from last index
    linkedList[lastIndex.toString()][1] = location;
    linkedList[location.toString()] = [value, location];
    lastIndex = location;
    return linkedList;
}

function pop(linkedList){
    // remove first index (remove last requires O(n) time)
    // get first index pointer
    let newFirst = linkedList[firstIndex.toString()][1];
    delete linkedList[firstIndex.toString()];
    firstIndex = newFirst;
    return linkedList;
}