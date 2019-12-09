//event listener
document.addEventListener('click', function (event) {
    var clickedPoint = event.target;
    if ( clickedPoint.classList.contains( 'point' ) ) {
        handleBattleshipClick(clickedPoint);
    }
}, false);

//init Gamebaord
var gblength = 6;
var gameboard = Array.from(Array(gblength), () => new Array(gblength));
for(var i = 0; i < gblength; i++){
    for(var j = 0; j < gblength; j++){
        gameboard[i][j] = 0;
    }
}

//read into gameboard
for(var i = 0; i < gblength; i++){
    for(var j = 0; j < gblength; j++){
        var idString = i.toString() + ',' + j.toString();
        var point = document.getElementById(idString);
        
        if(point.classList.contains('battleship1')){
            gameboard[i][j] = 1;
        }
        if(point.classList.contains('battleship2')){
            gameboard[i][j] = 2;
        }
        if(point.classList.contains('battleship3')){
            gameboard[i][j] = 3;
        }
    }
}

//initializing counter
var count = 24;
var counter = document.getElementById("counter");
counter.innerHTML = "Moves: " + count;

function handleBattleshipClick(clickedPoint) {
    // if clicked again is true then stop check and alert user

    //counter
    count -=1;
    counter.innerHTML = "Moves: " + count;

    if ( clickedPoint.classList.contains('battleship1') || clickedPoint.classList.contains('battleship2') || clickedPoint.classList.contains('battleship3') ) {
        //add hit class for coloring
        clickedPoint.classList.add('hit');

        //remove battle ship class for checking when ship is destroyed
        if(clickedPoint.classList.contains('battleship1')){
            clickedPoint.classList.remove('battleship1');
        }
        if(clickedPoint.classList.contains('battleship2')){
            clickedPoint.classList.remove('battleship2');
        }
        if(clickedPoint.classList.contains('battleship2')){
            clickedPoint.classList.remove('battleship3');
        }
        //update json file
        var postRequest = new XMLHttpRequest();
        var requestURL = '/updategameboard';
        postRequest.open('POST', requestURL);
        var requestBody = clickedPoint.id + '@point hit';//@ is the delim
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
        alert("YOU LOST LOL");
        return true;
    }
    else {
        return false
    }
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