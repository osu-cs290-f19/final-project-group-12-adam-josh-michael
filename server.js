/*
 *
 * Name: Adam Josh Michael
 * Email: hamiltad@oregonstate.edu
 */

var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

var app = express();
var port = process.env.PORT || 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(bodyParser.text());

app.use(express.static("public"));

//load in all gamebaords
var mediumGameboard = require("./gameboards/medium");

//post requests
app.post("/updategameboard", function(req, res, next){
  //first id string is sent then a space then the class string

  if(req.body){
    res.send(200);
  }else{
    res.send(500);
  }

  //parse the responce and edit the json database
  var data = req.body;
  data = data.split('@');

  var buttonCoordinates = data[0].split(',');

  var newClass = data[1];

  var myNumber = Number(buttonCoordinates[0]);

  if(buttonCoordinates[1] == 0){
    console.log("==Json data: ", mediumGameboard[myNumber].pointClass0);
    mediumGameboard[myNumber].pointClass0 = newClass;
  }
  if(buttonCoordinates[1] == 1){
    console.log("==Json data: ", mediumGameboard[myNumber].pointClass1);
    mediumGameboard[myNumber].pointClass1 = newClass;
  }
  if(buttonCoordinates[1] == 2){
    console.log("==Json data: ", mediumGameboard[myNumber].pointClass2);
    mediumGameboard[myNumber].pointClass2 = newClass;
  }
  if(buttonCoordinates[1] == 3){
    console.log("==Json data: ", mediumGameboard[myNumber].pointClass3);
    mediumGameboard[myNumber].pointClass3 = newClass;
  }
  if(buttonCoordinates[1] == 4){
    console.log("==Json data: ", mediumGameboard[myNumber].pointClass4);
    mediumGameboard[myNumber].pointClass4 = newClass;
  }
  if(buttonCoordinates[1] == 5){
    console.log("==Json data: ", mediumGameboard[myNumber].pointClass5);
    mediumGameboard[myNumber].pointClass5 = newClass;
  }

});

app.get("/", function(req, res) {
  res.status(200).render(__dirname + "/public/home");
});

app.get("/home", function(req, res) {
  res.status(200).render(__dirname + "/public/home");
});

app.get("/gamemedium", function(req, res) {
  //insert ship placement code here
  for(var i = 0; i < gblength; i++){
    for(var j = 0; j < gblength; j++){
        gameboard[i][j] = 0;
    }
  }
  var battleship1 = 1;
  var battleship2 = 2;
  var battleship3 = 3;

  gameboard = placeBattleship(gameboard, battleship3);
  gameboard = placeBattleship(gameboard, battleship2);
  gameboard = placeBattleship(gameboard, battleship1);

  //translation from array to json here
  for(var i = 0; i < 6; i++){
    for(var j = 0; j < 6; j++){
      if(gameboard[i][j] == 1){
        if(j == 0){
          mediumGameboard[i].pointClass0 = mediumGameboard[i].pointClass0 + ' battleship1';
        }
        if(j == 1){
          mediumGameboard[i].pointClass0 = mediumGameboard[i].pointClass0 + ' battleship1';
        }
        if(j == 2){
          mediumGameboard[i].pointClass0 = mediumGameboard[i].pointClass0 + ' battleship1';
        }
        if(j == 3){
          mediumGameboard[i].pointClass0 = mediumGameboard[i].pointClass0 + ' battleship1';
        }
        if(j == 4){
          mediumGameboard[i].pointClass0 = mediumGameboard[i].pointClass0 + ' battleship1';
        }
        if(j == 5){
          mediumGameboard[i].pointClass0 = mediumGameboard[i].pointClass0 + ' battleship1';
        }
      }
      if(gameboard[i][j] == 2){
        if(j == 0){
          mediumGameboard[i].pointClass0 = mediumGameboard[i].pointClass0 + ' battleship2';
        }
        if(j == 1){
          mediumGameboard[i].pointClass0 = mediumGameboard[i].pointClass0 + ' battleship2';
        }
        if(j == 2){
          mediumGameboard[i].pointClass0 = mediumGameboard[i].pointClass0 + ' battleship2';
        }
        if(j == 3){
          mediumGameboard[i].pointClass0 = mediumGameboard[i].pointClass0 + ' battleship2';
        }
        if(j == 4){
          mediumGameboard[i].pointClass0 = mediumGameboard[i].pointClass0 + ' battleship2';
        }
        if(j == 5){
          mediumGameboard[i].pointClass0 = mediumGameboard[i].pointClass0 + ' battleship2';
        }
      }
      if(gameboard[i][j] == 3){
        if(j == 0){
          mediumGameboard[i].pointClass0 = mediumGameboard[i].pointClass0 + ' battleship3';
        }
        if(j == 1){
          mediumGameboard[i].pointClass0 = mediumGameboard[i].pointClass0 + ' battleship3';
        }
        if(j == 2){
          mediumGameboard[i].pointClass0 = mediumGameboard[i].pointClass0 + ' battleship3';
        }
        if(j == 3){
          mediumGameboard[i].pointClass0 = mediumGameboard[i].pointClass0 + ' battleship3';
        }
        if(j == 4){
          mediumGameboard[i].pointClass0 = mediumGameboard[i].pointClass0 + ' battleship3';
        }
        if(j == 5){
          mediumGameboard[i].pointClass0 = mediumGameboard[i].pointClass0 + ' battleship3';
        }
      }
    }
  }

  res.status(200).render(__dirname + "/public/gameMedium", { mediumGameboard });
});

app.get("*", function(req, res) {
  res.status(404)
});

app.listen(port, function() {
  console.log("== Server is listening on port", port);
});

function placeBattleship(gameboard, battleship){
  var randomX = (int)(5.0 * Math.random());
  var randomY = (int)(5.0 * Math.random());
  var angle = (int)(Math.random());
  var truePlacement = false;

  if (battleship == 3){
    if (angle == 0) {
      if (randomX > 3){
        randomX = randomX - 2;
      }
      for (var i = 0; i < battleship; i++){
        gameboard[randomX + i][randomY] = battleship;
      }
    }
    else {
      if (randomY > 3){
        randomY = randomY - 2;
      }
      for (var i = 0; i < battleship; i++){
        gameboard[randomX][randomY + i] = battleship;
      }
    }
  }


  if (battleship == 2){
    if (angle == 0){
      while(truePlacement == false){
        if (randomX > 4){
          randomX = randomX - 1;
        }
        if (gameboard[randomX][randomY] == 0){
          if (gameboard[randomX + 1][randomY] == 0){
            truePlacement = true;
            for (var i = 0; i < battleship; i++){
              gameboard[randomX + i][randomY] = battleship;
            }
          }
        }
        randomX = (int)(5.0 * Math.random());
      }
    }
    else {
      while(truePlacement == false){
        if (randomY > 4){
          randomY = randomY - 1;
        }
        if (gameboard[randomX][randomY] == 0){
          if (gameboard[randomX][randomY + 1] == 0){
            truePlacement = true;
            for (var i = 0; i < battleship; i++){
              gameboard[randomX][randomY + i] = battleship;
            }
          }
        }
        randomY = (int)(5.0 * Math.random());
      }
    }
  }


  if (battleship == 1){
    while(truePlacement = false){
      if (gameboard[randomX][randomY] == 0){
        truePlacement = true;
        gameboard[randomX][randomY] = battleship;
      }
      var randomX = (int)(5.0 * Math.random());
      var randomY = (int)(5.0 * Math.random());
    }
  }
  
}