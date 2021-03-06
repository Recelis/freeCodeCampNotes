// breadth first search

// create graph
var graph = {
    cab: ['cat', 'car'],
    cat: ['bat', 'mat'],
    car: ['bar', 'cat'],
    mat: ['bat'],
    bar: ['bat'],
    bat: [],
    boo:[]
}
console.log(breadthfirstSearch(graph, 'bat'));

function breadthfirstSearch(graph, name) {
    var searched = [];
    // queue starting from first node
    var queue = [Object.keys(graph)[0]];
    // loop until queue is empty
    while (queue.length > 0) {
        // remove first node off queue
        var item = queue.shift();
        console.log(queue);
        // check if already searched
        if (searched.indexOf(item) >= 0) continue;

        // check if this node is node looking for
        if (item === name) return 1;
        else {
            // add all of neighbors to queue
            queue = queue.concat(graph[item]);
        }
    }
    return null;
}
