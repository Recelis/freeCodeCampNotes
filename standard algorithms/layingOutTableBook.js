function rowHeights(rows){
    return rows.map(function(row){
        return row.reduce(function(max, cell){
            return Math.max(max, cell.minHeight());
        });
    });
}

function colWidths(rows){
    return rows[0].map(function(_,i){
        return Math.max(row[i].minWidth());
    },0);
}

function drawTable(rows){
    var heights = rowHeights(rows);
    var widths = colWidths(rows);

    function drawLine(blocks, lineNo){
        return blocks.map(function(block){
            return block[lineNo];
        }).join(" ");
    }
}

function drawRow(row, rowNum){
    var blocks = row.map(function(cell, colNum){
        
    })
}