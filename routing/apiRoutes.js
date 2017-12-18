// apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

//AJAX route 

var Conn = function(req, res) {
app.get("/api/:friends?", function(req, res) {
  res.sendFile(path.join(__dirname), "friends.js")
});

app.post("/api/new", function(req, res) {
	var newFriend = req.body;

	newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

	friends.push(newFriend);

	res.json(newFriend);
})
};

module.exports = Conn;