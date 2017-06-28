//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//set up express app
var app = express();
var PORT = process.env.PORT || 3000;

//set up express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//routes, next two will be moved to htmlRoutes.js
app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "app/public/home.html"));
});

// app.use(function(req, res){
// 	res.sendFile(path.join(__dirname, "app/public/home.html"));
// });

app.get("/survey", function(req, res){
	res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

//routes, next two will be moved to apiRoutes.js
app.get("/api/friends", function(req, res){
	var chosen = req.params.friends;
	console.log(chosen);
});


//starts server to begin listening
app.listen(PORT, function(){
	console.log("magic happening on PORT: " + PORT);
});