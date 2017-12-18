// htmlRoutes.js file should include two routes:

var Con = require("/apiRoutes.js");
function getPath() {
// A GET Route to /survey which should display the survey page.
app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});



// A default, catch-all route that leads to home.html which displays the home page.
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

}

module.exports = {
	getPath: function(res) {
		return res;
	}
}