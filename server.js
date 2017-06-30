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

//require routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);





//starts server to begin listening
app.listen(PORT, function(){
	console.log("magic happening on PORT: " + PORT);
});