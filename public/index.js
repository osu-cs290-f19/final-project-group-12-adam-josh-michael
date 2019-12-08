//event listener
document.addEventListener('click', function (event) {
    var clickedPoint = event.target;
    if ( clickedPoint.classList.contains( 'point' ) ) {
        handleBattleshipClick(clickedPoint);
    }
}, false);

//place battle ships in game board if we are in the newgame
console.log("===URL is: ", window.location.href);


// var gameboard = [gameDifficulty][gameDifficulty];
// for (var x = 0; x < gameDifficulty; x++){
//     for (var y = 0; y < gameDifficulty; y++){
//         // Fill in gameboard with the current playing gameboard
//     }
// }

// var hitvalue = clickedButton.value; // Battleship: 1,2,3    Miss: 9
// var clickedX = clickedButtonCoors.x;
// var clickedY = clickedButtonCoors.y;
// var clickedAgain = false;
// var hitCounter = 0;



function handleBattleshipClick(clickedPoint) {
    // if clicked again is true then stop check and alert user

    if ( clickedPoint.classList.contains('battleship1') || clickedPoint.classList.contains('battleship2') || clickedPoint.classList.contains('battleship3') ) {
        clickedPoint.classList.add('hit');

        //update json file
        var postRequest = new XMLHttpRequest();
        var requestURL = '/updategameboard';
        postRequest.open('POST', requestURL);
        var requestBody = clickedPoint.id + '@ hit';//@ is the delim
        console.log(requestBody);
        postRequest.setRequestHeader('Content-Type', 'text/plain');
        postRequest.send(requestBody);

        // movesLeft = movesLeft - 1;
        // checkMoves(movesLeft);
    }
    else{
        // var clickValue = hitValue;
        // // change clicked button color
        // gameboard = updateGB(gameboard, clickValue);
        // if (checkIfSunk){
        //     if (checkWin(gameDifficulty, hitCounter)){
        //         // YOU WIN
        //     }
        // }
        // movesLeft = movesLeft - 1;
        // checkMoves(movesLeft);
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