<<<<<<< HEAD
// graph

var graph = {
    Start: [{ A: 5 }, { B: 2 }],
    A: [{ C: 4 }, { D: 2 }],
    B: [{ A: 8 }, { D: 7 }],
    C: [{ D: 6 }, { Finish: 3 }],
    D: [{ Finish: 1 }]
};

function dikstras() {
    var costs = {

    };

    var parents = {

    };
=======
// create graph
var graph = {
    cab: [{'cat':2}, {'car':3}],
    cat: [{'bar':5}, {'mat':17}],
    car: [{'bar':3}, {'cat':1}],
    mat: [{'bat':8}],
    bar: [{'bat':2}],
    bat: []
}


let path = dijkstras(graph);
console.log(path);


function dijkstras(graph){
    // create new graph to shift
    var unvisited = Object.keys(graph);
    let currentNode = Object.keys(graph)[0];
    // set tentativeDist to all initially Infinity
    let tentativeDist = {};
    for (let ii =0; ii < Object.keys(graph).length; ii ++){
        let fillObj = {
            distance:Infinity,
            prev: undefined
        }
        tentativeDist[Object.keys(graph)[ii]] = fillObj;
    }
    tentativeDist[Object.keys(graph)[0]].distance = 0;
    // loop through unvisited
    while (unvisited.length !== 0){
    // loop through neighbours of currentNode
        for (let ii =0; ii < graph[currentNode].length; ii ++){
            // if smaller than unvisited change
            let nodeName = Object.keys(graph[currentNode][ii])[0];
            let checkDistance = tentativeDist[currentNode].distance + graph[currentNode][ii][nodeName];
            // console.log("currentNode: " +currentNode +  " nodeName: " +nodeName + " checkDistance: " + checkDistance);
            if (checkDistance < tentativeDist[nodeName].distance) {
                tentativeDist[nodeName].distance = checkDistance;
                tentativeDist[nodeName].prev = currentNode;
            }
        }
        // remove currentNode from unvisited
        let location = getArrayLocation(unvisited, currentNode);
        unvisited.splice(location,1)[0];
        currentNode = getSmallestKeyInUnvisited(unvisited,tentativeDist);
    }
    // look through prev to get path
    let keys = Object.keys(tentativeDist);
    let path = [];
    path.unshift(keys[keys.length-1]);
    let ii = keys.length-1;
    let node = tentativeDist[keys[ii]].prev;
    while(ii > 0){
        path.unshift(node);
        ii--;
        node = tentativeDist[keys[ii]].prev;
    }
    return path;
}

function getSmallestKeyInUnvisited(unvisited,tentativeDist){
    if (unvisited.length === 0) return;
    let smallestValue = tentativeDist[unvisited[0]].distance; 
    let smallestKey = unvisited[0];
    for (let jj =1; jj < unvisited.length; jj++){
        if (tentativeDist[unvisited[jj]].distance < smallestValue){
            smallestValue = tentativeDist[unvisited[jj]].distance;
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
>>>>>>> c0dbbd1f5f9961f7baa91f5fa067bc4c1a992515
}
