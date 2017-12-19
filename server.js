// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Express app
var app = express();
var PORT = process.env.PORT || 3000;


// express app data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//module import htmlRoute

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
