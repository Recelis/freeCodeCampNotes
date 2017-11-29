// create graph
var graph = {
    cab: [{'cat':2}, {'car':3}],
    cat: [{'bat':5}, {'mat':17}],
    car: [{'bar':3}, {'cat':1}],
    mat: [{'bat':8}],
    bar: [{'bat':2}],
    bat: []
}

// create new graph to shift
var unvisited = Object.keys(graph);
unvisited.shift();

// console.log(unvisited);
let currentNode = Object.keys(graph)[0];


// set tentativeDist to all initially Infinity
let tentativeDist = {};
for (let ii =0; ii < Object.keys(graph).length; ii ++){
    if (ii === 0) tentativeDist[Object.keys(graph)[ii]] = 0;
    else tentativeDist[Object.keys(graph)[ii]] = Infinity;
}

console.log(tentativeDist);

// loop through unvisited

