// get list of data

var data = ['orange', 'juice', 'apple', 'pear', 'beer', 'ham', 'burger'];

let linkedList = {};
// read in data
let firstIndex = 0;
let lastIndex = 0;
for (let ii =0; ii < data.length; ii++){
    // get index of data
    linkedList[ii] = [data[ii], ii+1];
    lastIndex = ii;
}

let index = reading('ham');
linkedList = push(linkedList, 'pizza', 333);
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

function pop(){
    // remove last index
    // linkedList[lastIndex.toString()][1]
}