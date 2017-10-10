/*
permAline.js
Jacky Lui

Problem:
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.
For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

input: a bunch of letters
do: calculate number of permutations that don't have consecutive repeating letters
output: number

do: 
use recursion to try to count up all of the possible methods
nodes = [[letter,0],[letter,0],[letter,0],[letter,0],etc]
combinations(nodes, currentNode, count)
    base case: if all numbers in nodes is not zero, return count++
    else
        while there are still zeros in nodes -> loop through using count 
        if number in node[loopcount, number] is 0:
          check if same as currentNode
          if so: set number to -1
          else: 
            set number to 1
            call combinations recursively with new nodes array and new currentNode
*/ 


var noZeros = -1;

function checkAvailableNodes(availableNodes){
    for(var ii =0 ; ii < availableNodes.length; ii++){
        if (availableNodes[ii][1] == 0) return ii;
    }
    return noZeros; // no 0s detected
}

function deepCopy(availableNodes){
    var copied = [];
    for (var ii =0; ii < availableNodes.length; ii++){
        copied[ii] =  availableNodes[ii].slice();
    }
    return copied;
}

function zeroNodes(availableNodes){
    var zeroedAvailableNodes = deepCopy(availableNodes);
    for (var ii =0; ii < zeroedAvailableNodes.length; ii++){
        zeroedAvailableNodes[ii][1] = 0;
    }
    return zeroedAvailableNodes;
}

function combinations(availableNodes, currentNode, perms){
    if (checkAvailableNodes(availableNodes) == noZeros) { // base case, node length is one and not equal to currentNode
        perms++;
        return perms;
    }
    else{
        var checkIndex = 0;
        while(checkAvailableNodes(availableNodes) != noZeros){
            if (availableNodes[checkIndex][1] == 0){
                if (availableNodes[checkIndex][0] == currentNode) availableNodes[checkIndex][1] = -1;
                else{
                    availableNodes[checkIndex][1] = 1;
                    
                    var zeroedAvailableNodes = zeroNodes(availableNodes);
                    zeroedAvailableNodes.splice(checkIndex,1);
                    perms = combinations(zeroedAvailableNodes,availableNodes[checkIndex][0], perms);
                }
            }
            checkIndex++;
        }   
        return perms;        
    }
}

function permAlone(str) {
  var perms = 0;  
  var nodes = str.split("");
  var availableNodes = [];
  for (var ii =0; ii < nodes.length; ii++){
      availableNodes.push([nodes[ii], 0]);
  } 
  perms = combinations(availableNodes, -1, perms);
  console.log(perms);
  return perms;
}

permAlone('abfdefa');
