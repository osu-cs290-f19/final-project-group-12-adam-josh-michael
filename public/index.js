//event listener
document.addEventListener('click', function (event) {
    var clickedPoint = event.target;
    if ( clickedPoint.classList.contains( 'point' ) ) {
        handleBattleshipClick(clickedPoint);
    }else if( clickedPoint.id == 'saveGame'){
        handleSaveGame();
    }else if( clickedPoint.id == 'loadsavedgame'){
        handleLoadGame();
    }else if( clickedPoint.id == 'newGame'){
        handleNewGame();
    }
}, false);


//initializing counter
var count = 24;
var counter = document.getElementById("counter");
counter.innerHTML = "Ammo: " + count;

//update moves
for(var i = 0; i < 6; i++){
    for(var j = 0; j < 6; j++){
        var idString = i.toString() + ',' + j.toString();
        var point = document.getElementById(idString);

        if (point.classList.contains('hit') || point.classList.contains('missed')) {
            count -= 1;
            console.log(count);
        }
    }
    counter.innerHTML = "Ammo: " + count;
}

function handleBattleshipClick(clickedPoint) {
    // if clicked again is true then stop check and alert user

    //counter
    count -=1;
    counter.innerHTML = "Ammo: " + count;

    if ( clickedPoint.classList.contains('battleship1') || clickedPoint.classList.contains('battleship2') || clickedPoint.classList.contains('battleship3') ) {
        //add hit class for coloring
        clickedPoint.classList.add('hit');

        //remove battle ship class for checking when ship is destroyed
        if(clickedPoint.classList.contains('battleship1')){
            clickedPoint.classList.remove('battleship1');
            alert("Battleship 1 has been sunk");
            checkIfWon(6);
        }
        if(clickedPoint.classList.contains('battleship2')){
            clickedPoint.classList.remove('battleship2');
            console.log(clickedPoint.classList);
            if(checkIfSunk(2,6) == true){
                console.log("ship 2 sunk");
                checkIfWon(6);
            }
        }
        if(clickedPoint.classList.contains('battleship3')){
            clickedPoint.classList.remove('battleship3');
            console.log(clickedPoint.classList);
            if(checkIfSunk(3,6) == true){
                console.log("ship 3 sunk");
                checkIfWon(6);
            }
        }
        //update json file
        var postRequest = new XMLHttpRequest();
        var requestURL = '/updategameboard';
        postRequest.open('POST', requestURL);
        var requestBody = clickedPoint.id + '@point hit';//@ is the delim
        console.log(requestBody);
        postRequest.setRequestHeader('Content-Type', 'text/plain');
        postRequest.send(requestBody);
    }
    else{
        //add hit class for coloring
        clickedPoint.classList.add('missed');

        //update json
        var postRequest = new XMLHttpRequest();
        var requestURL = '/updategameboard';
        postRequest.open('POST', requestURL);
        var requestBody = clickedPoint.id + '@point missed';//@ is the delim
        console.log(requestBody);
        postRequest.setRequestHeader('Content-Type', 'text/plain');
        postRequest.send(requestBody);
    }
    checkIfLost(count);
}

function checkIfLost(movesLeft) {
    if (movesLeft <= 0) {
        alert("YOU LOST LOL");
        window.location.href = "http://localhost:3000/";
        return true;
    }
    else {
        return false
    }
}

function checkIfSunk(shipToCheck, gblength){
    for(var i = 0; i < gblength; i++){
        for(var j = 0; j < gblength; j++){
            var idString = i.toString() + ',' + j.toString();
            var point = document.getElementById(idString);
            
            if(shipToCheck == 2){
                if(point.classList.contains('battleship2')){
                    return false;
                }
            }
            if(shipToCheck == 3){
                console.log("")
                if(point.classList.contains('battleship3')){
                    return false;
                }
            }
        }
    }

    alert("Battleship " + shipToCheck + " has been sunk");
    return true;
}

function checkIfWon (gblength) {
    for(var i = 0; i < gblength; i++){
        for(var j = 0; j < gblength; j++){
            var idString = i.toString() + ',' + j.toString();
            var point = document.getElementById(idString);
            
            if( point.classList.contains('battleship1') || point.classList.contains('battleship2') || point.classList.contains('battleship3') ){
                return false;
            }

        }
    }

    alert("YOU WON!! WOW!");
    window.location.href = "http://localhost:3000/";
    return true;
}

function handleSaveGame(){
    var postRequest = new XMLHttpRequest();
    var requestURL = '/savegame';
    postRequest.open('POST', requestURL);
    var requestBody = "";
    console.log(requestBody);
    postRequest.setRequestHeader('Content-Type', 'text/plain');
    alert("Saving Game");
    postRequest.send(requestBody);
}

function handleLoadGame(){
    var postRequest = new XMLHttpRequest();
    var requestURL = "/loadsavedgame";
    postRequest.open('POST', requestURL);
    var requestBody = "";
    console.log(requestBody);
    postRequest.setRequestHeader('Content-Type', 'text/plain');
    postRequest.send(requestBody);

    alert("Loaded a game");
}

function handleNewGame(){
    var postRequest = new XMLHttpRequest();
    var requestURL = "/loadnewgame";
    postRequest.open('POST', requestURL);
    var requestBody = "";
    console.log(requestBody);
    postRequest.setRequestHeader('Content-Type', 'text/plain');
    postRequest.send(requestBody);

    alert("Loaded a new game");
}