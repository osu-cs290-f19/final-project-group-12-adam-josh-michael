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
    console.log("==Json data: ", easyGameboard[myNumber].pointClass0);
    easyGameboard[myNumber].pointClass0 = easyGameboard[myNumber].pointClass0 + newClass;
  }
  if(buttonCoordinates[1] == 1){
    console.log("==Json data: ", easyGameboard[myNumber].pointClass1);
    easyGameboard[myNumber].pointClass1 = easyGameboard[myNumber].pointClass1 + newClass;
  }
  if(buttonCoordinates[1] == 2){
    console.log("==Json data: ", easyGameboard[myNumber].pointClass2);
    easyGameboard[myNumber].pointClass2 = easyGameboard[myNumber].pointClass2 + newClass;
  }
  if(buttonCoordinates[1] == 3){
    console.log("==Json data: ", easyGameboard[myNumber].pointClass3);
    easyGameboard[myNumber].pointClass3 = easyGameboard[myNumber].pointClass3 + newClass;
  }
  if(buttonCoordinates[1] == 4){
    console.log("==Json data: ", easyGameboard[myNumber].pointClass4);
    easyGameboard[myNumber].pointClass4 = easyGameboard[myNumber].pointClass4 + newClass;
  }
  if(buttonCoordinates[1] == 5){
    console.log("==Json data: ", easyGameboard[myNumber].pointClass5);
    easyGameboard[myNumber].pointClass5 = easyGameboard[myNumber].pointClass5 + newClass;
  }

});

app.get("/", function(req, res) {
  res.status(200).render(__dirname + "/public/newGame");
});

app.get("/newgame", function(req, res) {
  res.status(200).render(__dirname + "/public/newGame");
});

app.get("/gamemedium", function(req, res) {
  res.status(200).render(__dirname + "/public/gameMedium", { mediumGameboard });

  console.log(mediumGameboard[0].pointClass0);
});

app.get("*", function(req, res) {
  res.status(404)
});

app.listen(port, function() {
  console.log("== Server is listening on port", port);
});
