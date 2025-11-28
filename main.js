"use strict";
import promptSync from "prompt-sync";

const prompt = promptSync({ sigint: true });

// Board tiles
const PLAYER = "*";
const EMPTY = "░";
const HOLE = "O";
const HAT = "^";

// Hardcoded board
let board = [
	[PLAYER, EMPTY, HOLE],
	[EMPTY, HOLE, EMPTY],
	[EMPTY, HAT, EMPTY],
];

// Game state
let playerRow = 0;
let playerCol = 0;
let playing = true;

// Print board
function printBoard(board) {
	console.clear(); // call console.clear() before print each move
	board.forEach(walk => console.log(walk.join(" ")));
  
}



// Game play loop
while(playing){
printBoard(board);

const input = prompt("Which way? (w/a/s/d): ".toLowerCase());

board[playerRow][playerCol] = EMPTY;

movement(input);
playing = status()

board[playerRow][playerCol] = PLAYER;
console.log("End");
}


function movement (input) {
  switch (input) {
    case "w" :
      playerRow--;
      return true;
      
    case "a" :
      playerCol--;
      return true;
    case "s" :
      playerRow++;
      return true;
    case "d" :
      playerCol++;
      return true;
    default :
      
    return false;
  }
};


function status (){

  if(playerRow < 0 || playerRow >= board.length || playerCol < 0 || playerCol >= board.length){
    console.log("You walk out of board.Try again")
    return false;
  }

  const moves = board[playerRow][playerCol];

  if(moves === HOLE) {
    console.log("You fell into the hole.Try again");
    return false;
  }
  else if (moves === HAT) {
    console.log("You found the hat");
    return false;
  }
  else {
    return true;
  }

  
}