// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Express app
var app = express();
var PORT = process.env.PORT || 3000;


// express app data parsing
app.use(bodyParser.urlencoded({ extended: true }))

// parse various different Json types as Json
app.use(bodyParser.json({type: 'application/*+json'}))

app.use(bodyParser.raw({type: 'application/vnd.custom-type'}))

app.use(bodyParser.text({type: 'text/html'}))


//module import htmlRoute

require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
