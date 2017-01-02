'use strict';

let organize = function (puzzle) {
    let rows = [], columns = [], blocks = [];
    for(let i = 0; i < 9; i++){
        rows.push(puzzle.splice(0, 9));
    }
    for(let i = 0; i < 9; i++){
        columns[i] = [];
        for(let j = 0; j < 9; j++){
            columns[i].push(rows[j][i]);
        }
    }
    for(let i = 0; i < 9; i+=3){
        blocks[i] = [];
        blocks[i+1] = [];
        blocks[i+2] = [];
        blocks[i].push(rows[i][0], rows[i][1], rows[i][2], rows[i+1][0], rows[i+1][1], rows[i+1][2], rows[i+2][0], rows[i+2][1], rows[i+2][2]);
        blocks[i+1].push(rows[i][3], rows[i][4], rows[i][5],rows[i+1][3], rows[i+1][4], rows[i+1][5],rows[i+2][3], rows[i+2][4], rows[i+2][5]);
        blocks[i+2].push(rows[i][6], rows[i][7], rows[i][8],rows[i+1][6], rows[i+1][7], rows[i+1][8],rows[i+2][6], rows[i+2][7], rows[i+2][8]);
    }
    return {
        rows: rows,
        columns: columns,
        blocks: blocks
    }
};

let validateSize = function (puzzle) {
    return (puzzle.length === 81) ? true: false;
};

let validate = function (block) {
    let valid = true;
    for(let i = 0; i < block.length; i++){
        let line = block[i];
        for(let j = 0; j < line.length; j++){
            if(line.indexOf(j+1) === -1){
                valid = false;
                break;
            }
        }
    }
    return valid;
};

module.exports.isValid = function (puzzle) {
    if(!validateSize(puzzle)){
        return false;
    }
    let results = organize(puzzle);
    return (validate(results.rows) && validate(results.columns) && validate(results.blocks)) ? true: false;
};

