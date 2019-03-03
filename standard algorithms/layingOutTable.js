let tableContents = [
    ["name", "height", "country"],
    ["Killimanjaro", 5895, "Tanzania"],
    ["Everest", 8848, "Nepal"],
    ["Mount Fuji", 3776, "Japan"],
    ["Mont Blanc", 4808, "Italy/France"],
    ["Vaalserberg", 323, "Netherlands"],
    ["Denali", 6168, "United States"],
    ["Popocatepetl", 5465, "Mexico"]
];

let TableDraw = function myTable(table) {
    this.table = table;
    this.padding = function(length, character) { //this is a priveliged method
        let generate = "";
        for (let ii = 0; ii < length; ii++) {
            generate += character;
        }
        return generate;
    }
};

// for each column (public methods)
TableDraw.prototype.columnWidth = function (column) {
    let longestRow = this.table.reduce(function (prev, curr) {
        let sPrev = prev;
        let sCurr = curr;
        if (typeof prev[column] !== "string") sPrev[column] = prev[column].toString();
        if (typeof curr[column] !== "string") sCurr[column] = curr[column].toString();
        return (sPrev[column].length > sCurr[column].length) ? sPrev : sCurr;
    });
    return longestRow[column].length;
}

TableDraw.prototype.createHeaders = function (nameSpaces, heightSpaces, countrySpaces) {
    // add spaces in front of height and country for space between column
    console.log("name" + this.padding(nameSpaces - 4, " ") + " height" + this.padding(heightSpaces - 6, " ") + " " + this.padding(countrySpaces - 7, " ") + "country");
    console.log(this.padding(nameSpaces, "_") + " " + this.padding(heightSpaces, "_") + " " + this.padding(countrySpaces, "_"));
}

TableDraw.prototype.draw = function(table,nameSpaces, heightSpaces, countrySpaces){
    // extract headers
    for(let ii = 1; ii < table.length; ii++){
        let row = table[ii];
        console.log(row[0] + this.padding(nameSpaces-row[0].length, " ") + " " + row[1] + this.padding(heightSpaces-row[1].length, " ") +" "  + this.padding(countrySpaces-row[2].length, " ")+ row[2]);
    };
}

// every object will have same copy
// have to use function keyword instead of arrow because arrow
// functions create a new instance of the function which means that this doesn't work (I believe)
TableDraw.prototype.doSomething = function (word) {
    // returns array of length height containing strings of length height, one cell.
    console.log("doing something and print " + word);
}

let newTable = new TableDraw(tableContents);
// newCell.minHeight();
let maxWidth = [];
let columns = 3;

for (let ii = 0; ii < columns; ii++) {
    maxWidth.push(newTable.columnWidth(ii));
}
newTable.createHeaders(...maxWidth);
newTable.draw(tableContents, ...maxWidth);


