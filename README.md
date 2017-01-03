A simple library to determine valid sudoku puzzles
---

Simply pass in an array of all the values starting from the top left corner and moving to the right.
```
1 2 7 5 3 9 8 4 6 
4 5 3 8 6 1 7 9 2 
8 9 6 4 7 2 1 5 3 
2 8 9 3 1 7 4 6 5 
3 6 5 2 8 4 9 1 7 
7 4 1 9 5 6 3 2 8 
9 7 4 6 2 8 5 3 1 
5 1 2 7 4 3 6 8 9 
6 3 8 1 9 5 2 7 4
```
*The matrix above needs to be passed in like the following*
```
let sv = require('sudoku-validator');
let puzzle = [1, 2, 7, 5, 3, 9, 8, 4, 6, 4, 5, 3, 8, 6, 1, 7, 9, 2, 8, 9, 6, 4, 7, 2, 1, 5, 3, 2, 8, 9, 3, 1, 7, 4, 6, 5, 3, 6, 5, 2, 8, 4, 9, 1, 7, 7, 4, 1, 9, 5, 6, 3, 2, 8, 9, 7, 4, 6, 2, 8, 5, 3, 1, 5, 1, 2, 7, 4, 3, 6, 8, 9, 6, 3, 8, 1, 9, 5, 2, 7, 4];

console.log(sv.isValid(puzzle));
//true
```
*If there is an empty index, too many indexes (puzzle.length > 81 || puzzle.length < 81), a digit not between 1-9 inclusive, a repeated value in a row, column, or sub-grid, the validator will return `false`*

