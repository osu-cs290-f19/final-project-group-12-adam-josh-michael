// Pseudocode - Not Complete

// Clicked button should have a few properties
// Clicked array value / coors
// Clicked value
// Button value - battleship [ 1, 2, 3 ] or not

// Array should be blank and filled throughout

var gameDifficulty = ". . .";
if (gameDifficulty = easy) {
    gameDifficulty = 4;
}
else if (gameDifficulty = medium) {
    gameDifficulty = 5;
}
else {
    gameDifficulty = 6;
}

var gameboard = [gameDifficulty][gameDifficulty];
for (var x = 0; x < gameDifficulty; x++){
    for (var y = 0; y < gameDifficulty; y++){
        // Fill in gameboard with the current playing gameboard
    }
}

var hitvalue = clickedButton.value; // Battleship: 1,2,3    Miss: 9
var clickedX = clickedButtonCoors.x;
var clickedY = clickedButtonCoors.y;
var clickedAgain = false;
var hitCounter = 0;



function handleBattleshipClick(event) {
    // if clicked again is true then stop check and alert user

    if (!checkIfBattleship(gameboard)) {
        var clickValue = 0;
        // change clicked button color
        gameboard = updateGB(gameboard, clickValue);
        movesLeft = movesLeft - 1;
        checkMoves(movesLeft);
    }
    else{
        var clickValue = hitValue;
        // change clicked button color
        gameboard = updateGB(gameboard, clickValue);
        if (checkIfSunk){
            if (checkWin(gameDifficulty, hitCounter)){
                // YOU WIN
            }
        }
        movesLeft = movesLeft - 1;
        checkMoves(movesLeft);
    }
}

function checkIfBattleship(gameboard) {
    if (gameboard[clickedX][clickedY] == 1 || gameboard[clickedX][clickedY] == 2 || gameboard[clickedX][clickedY] == 3){
        return true;
    }
    else{
        return false;
    }
}

function updateGB (currentGameboard, clickValue) {
    currentGameboard[clickedX][clickedY] == clickValue // clickValue: Battleship: 1,2,3    Miss: 9

    return currentGameboard;
}

function checkMoves(movesLeft) {
    if (movesLeft == 0) {
        // GAME OVER
        return true;
    }
    else {
        return false
    }
}

function checkIfSunk(gameboard, hitBattleship) {
    var length = gameboard.length;
    var counter = 0;
    var sunkValue = false;

    for (var x = 0; x < length; x++){
        for (var y = 0; y < length; y++){
            if (gameboard[x][y] == hitBattleship)
                counter = counter + 1;
        }
    }

    if (counter = hitBattleship){
        sunkValue = true;
    }
    
    return sunkValue;
}

function checkWin (difficulty, hitCounter) {
    if (difficulty = easy) {
        if (hitCounter = 5){
            return true;
        }
    }
    if (difficulty = medium) {
        if (hitCounter = 6){
            return true;
        }
    }
    if (difficulty = hard) {
        if (hitCounter = 6){
            return true;
        }
    }

    return false;
}