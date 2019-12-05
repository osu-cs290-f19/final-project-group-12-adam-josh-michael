/*
 *
 * Name: Adam Josh Michael
 * Email: hamiltad@oregonstate.edu
 */

var express = require("express");
var exphbs = require("express-handlebars");

var app = express();
var port = process.env.PORT || 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", function(req, res) {
  res.status(200).render(__dirname + "/public/newGame");
});

app.get("/newgame", function(req, res) {
  res.status(200).render(__dirname + "/public/newGame");
});

app.get("/gameeasy", function(req, res) {
  var easyGameboard = require("./gameboards/easy");
  console.log(easyGameboard);
  res.status(200).render(__dirname + "/public/gameEasy", { easyGameboard });
});

app.get("*", function(req, res) {
  res.status(404)
});

app.listen(port, function() {
  console.log("== Server is listening on port", port);
});
