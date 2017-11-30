// create graph
var graph = {
    cab: [{'cat':2}, {'car':3}],
    cat: [{'bar':5}, {'mat':17}],
    car: [{'bar':3}, {'cat':1}],
    mat: [{'bat':8}],
    bar: [{'bat':2}],
    bat: []
}

// create new graph to shift
var unvisited = Object.keys(graph);

let currentNode = Object.keys(graph)[0];

// set tentativeDist to all initially Infinity
let tentativeDist = {};
for (let ii =0; ii < Object.keys(graph).length; ii ++){
    if (ii === 0) tentativeDist[Object.keys(graph)[ii]] = 0;
    else tentativeDist[Object.keys(graph)[ii]] = Infinity;
}
console.log(graph);
console.log(tentativeDist);

// loop through unvisited
console.log(graph[currentNode].length + "length");
console.log("**********************************************************************");
while (unvisited.length !== 0){
// loop through neighbours of currentNode
    for (let ii =0; ii < graph[currentNode].length; ii ++){
        // if smaller than unvisited change
        // get name of node
        let nodeName = Object.keys(graph[currentNode][ii])[0];
        let checkDistance = tentativeDist[currentNode] + graph[currentNode][ii][nodeName];
        console.log("currentNode: " +currentNode +  " nodeName: " +nodeName + " checkDistance: " + checkDistance);
        if (checkDistance < tentativeDist[nodeName]) tentativeDist[nodeName] = checkDistance;
    }
    // remove currentNode from unvisited
    let location = getArrayLocation(unvisited, currentNode);
    unvisited.splice(location,1)[0];
    currentNode = getSmallestKeyInUnvisited(unvisited,tentativeDist);
}
console.log(tentativeDist);

function getSmallestKeyInUnvisited(unvisited,tentativeDist){
    let smallestValue = tentativeDist[unvisited[0]]; 
    let smallestKey = unvisited[0];
    for (let jj =1; jj < unvisited.length; jj++){
        if (tentativeDist[unvisited[jj]] < smallestValue){
            smallestValue = tentativeDist[unvisited[jj]];
            smallestKey = unvisited[jj];
        }
    }
    return smallestKey;
}

function getArrayLocation(unvisited, currentNode){
    for (let jj =0; jj < unvisited.length; jj ++){
        if (unvisited[jj] === currentNode) return jj; 
    }
    return undefined;
}
