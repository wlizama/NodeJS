var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");


// coneccion a mongodb
mongoose.connect("mongodb://10.0.2.15:27017/primera_bd");


var app     = express();
var MY_PORT = 8000;

app.set("view engine", "jade");
app.listen(MY_PORT);


//// Middlerwares /////////////////////////
app.use(express.static("public")); // Static Elements
app.use(bodyParser.json());        // para peticiones en formato JSON
app.use(bodyParser.urlencoded({ extended: true }));


//// ROUTES /////////////////////////////
app.get("/", function(request, response) {
	response.render("test_jade", {
		my_var: "variable desde server",
		unescaped: "<h1>UNESCAPED</h1>"
	}); // pasar variables a template
});

// GET Method
app.get("/users/:userName", function(request, response){
	var userName = request.params.userName;
	response.send('¡Hola, ' + userName + '!');
});

app.get("/frm", function(request, response){
	response.render("form"); // render template
});

// POST Method
app.post("/users", function(request, response){
	var user = request.body.user;
	var pass = request.body.pass;
	response.send("User: " + user + ", Pass: " + pass);
});


//// Layout /////////////////////////////
app.get("/layout", function(request, response){
	response.render("index");
});

app.get("/login", function(request, response){
	response.render("login");
});
