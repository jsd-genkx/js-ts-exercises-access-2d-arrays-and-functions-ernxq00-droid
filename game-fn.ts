// const board = [
// 	["A", "B", "C"],
// 	["D", "E", "F"],
// 	["G", "H", "I"],
// ];

// const moves = [];

// // Start at A (0,0) -> [row][col]
// let row = 0;
// let col = 0;
// moves.push(board[row][col]); // A

// // Define movement functions
// function moveRight() {
// 	moves.push(board[row][col++]); เขียนเอง
// }
// function moveLeft() {
// 	moves.push(board[row][col--]); เขียนเอง
// }
// function moveUp() {
// 	moves.push(board[row--][col]); เขียนเอง
// }
// function moveDown() {
// 	moves.push(board[row++][col]); เขียนเอง
// }
// // Call the movement functions
// moveRight()  // Move from A to B
// moveRight()   // Move from B to C
// moveDown()  // Move from C to F
// moveLeft()  // Move from F to E

// console.log("Path:", moves.join(" → "));
// console.log("Total Moves (Start from 'A'):", moves.length - 1);
// โจทย์ที่พี่มีนให้มา

// เฉลยจากพี่โบ๊ท 
const boardfn = [
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"],
];
// console.log(boardfn.length);//row length
// console.log(boardfn[0].length);//col length
const rowLength = boardfn.length;
const colLength = boardfn[0].length;
const movefn: string[] = [];
// Start at A (0,0) -> [row][col]
let rowfn = 0;
let colfn = 0;
movefn.push(boardfn[rowfn][colfn]); // A
// Define movement functions
function moveRight() {
  if (colfn < colLength) {
    colfn++;
    movefn.push(boardfn[rowfn][colfn]);
  } else {
    console.log("Invalid move");
  }
}
function moveLeft() {
  if (colfn > 0) colfn--;
  movefn.push(boardfn[rowfn][colfn]);
}
function moveUp() {
  if (rowfn > 0) rowfn--;
  movefn.push(boardfn[rowfn][colfn]);
}
function moveDown() {
  if (rowfn < rowLength) rowfn++;
  movefn.push(boardfn[rowfn][colfn]);
}
// Call the movement functions
moveRight(); // Move from A to B
moveRight(); // Move from B to C
moveDown(); // Move from C to F
moveLeft(); // Move from F to E
console.log("Path:", movefn.join(" → "));
console.log("Total Moves (Start from 'A'):", movefn.length - 1);