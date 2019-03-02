let tableContents = [
    ["Killimanjaro", 5895, "Tanzania"],
    ["Everest", 8848, "Nepal"],
    ["Mount Fuji", 3776, "Japan"],
    ["Mont Blanc", 4808, "Italy/France"],
    ["Vaalserberg", 323, "Netherlands"],
    ["Denali", 6168, "United States"],
    ["Popocatepetl", 5465, "Mexico"]
];

let TableDraw = function myTable(table){
    this.table = table;
};

// for each column
TableDraw.prototype.columnWidth = function(column){
    let longestRow = this.table.reduce(function(prev, curr){
        let sPrev = prev;
        let sCurr = curr;
        if (typeof prev[column] !== "string") sPrev[column] = prev[column].toString();
        if (typeof curr[column] !== "string") sCurr[column] = curr[column].toString();
        return (sPrev[column].length > sCurr[column].length) ? sPrev : sCurr;
    });
    console.log(longestRow);
    return longestRow[column].length;
}
TableDraw.prototype.draw = function(table){
}

// every object will have same copy
// have to use function keyword instead of arrow because arrow
// functions create a new instance of the function which means that this doesn't work (I believe)
TableDraw.prototype.doSomething = function(word){
    // returns array of length height containing strings of length height, one cell.
    console.log("doing something and print " + word);
}

let newTable = new TableDraw(tableContents);
// newCell.minHeight();
let maxWidth = [];
let columns = 3;

for (let ii =0; ii < columns; ii ++){
    maxWidth.push(newTable.columnWidth(ii));
}
console.log(maxWidth);
newTable.doSomething("word");    

