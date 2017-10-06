// get list of data

var data = ['orange', 'juice', 'apple', 'pear', 'beer', 'ham', 'burger'];

let linkedList = {};
// read in data
for (let ii =0; ii < data.length; ii++){
    // get index of data
    linkedList[ii] = [data[ii], ii+1];
}
let index = reading('ham');
linkedList = insertion(linkedList, 'pizza', 333);
console.log(linkedList);
console.log(index);

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

function insertion(linkedList, value, location){
    // start from 0th index
    let nextLink = linkedList['0'][1]; 
    linkedList['0'][1] = location;
    linkedList[location.toString()] = [value, nextLink];
    return linkedList;
}

function deletion(){
    
}