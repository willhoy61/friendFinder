// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Express app
var app = express();
var PORT = 3000;

var Friends = require("/app/friends.js");

// express app data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//module import htmlRoute
const htmlRoute = require("./htmlRoute");
let val = htmlRoute.getPath();


app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function(req, res) {
	res.sendFile(path.join(__dirname, "survey.html"));
});

app.get("/all", function(req, res) {
	res.json(friends);
});


app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newFriend = req.body;
  newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
  console.log(newFriend);

  friends.push(newFriend);

  res.json(newFriend);
});


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
