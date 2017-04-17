/*
permAline.js
Jacky Lui

input: a bunch of letters
do: calculate number of permutations that don't have consecutive repeating letters
output: number

do: 
use recursion to try to count up all of the possible methods
combinations(nodes, currentNode, count)
    base case if nodes == [] return count++
    else
        nextNode = nodes.shift 
        if nextNode == currentNode
            return count
        else
            currentNode = nextNode
            combinations(nodes, currentNode, count)
            return count
*/ 
var levels = 0;
function combinations(nodes, currentNode, count){
    console.log("start level:" + levels);
    if (nodes.length === 1) {
        count++;
        console.log("found one! count is:" + count);
        return count;
    }
    else{
        var loopCount = 0;
        var nodesMinusCurrent = nodes.slice();
        while(loopCount < nodesMinusCurrent.length){ // want to keep looping to test out all other combinations
            currentNode++;
            console.log("");
            console.log("newLoop: node " + nodes + " level:" + levels + " loopcount:" + loopCount+ " currentNode:" +currentNode); 
            var nextNode = currentNode+1;
            if (nextNode>= nodesMinusCurrent.length) nextNode = 0;
            var nodeLoop =  1;
            while (nodesMinusCurrent[nextNode] === nodesMinusCurrent[currentNode] && nodeLoop < nodes.length -1) { // if same, spin nodes
                nextNode++;
                nodeLoop++;
                nodesMinusCurrent.splice(nextNode,1);
                if (nextNode>= nodesMinusCurrent.length) nextNode = 0;
                console.log("shift nextNode: " + nextNode); 
            } 
            
            nodesMinusCurrent.splice(currentNode, 1);
            console.log("nodesMinusCurrent_length:" + nodesMinusCurrent.length + " nodesMinusCurrent:" + nodesMinusCurrent +" count:" + count+ " currentNode:" +currentNode +" loopcount:" + loopCount + " levels:" + levels);
            levels++;
            if (currentNode < nextNode) nextNode--;
            console.log("nextNode:" + nextNode);
            count = combinations(nodesMinusCurrent, nextNode-1, count);
            levels--;     
            loopCount++;
        } 
        console.log("end of level:" + levels + " count:" + count + " node:" + nodes);
        return count;
        
    }
}

function permAlone(str) {
  var count = 0;  
  var nodes = str.split("");
  count = combinations(nodes, -1, count);
  console.log(count);
  return count;
}

permAlone('aabb');
