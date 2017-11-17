var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var inMemoryDatabase = require("./in-memory-database");
var db = inMemoryDatabase();

var pg = require("pg");

var pool = new pg.Pool({
	user: "postgres",
	password: "Alliegator789!",
	host: "localhost",
	port: 5432,
	database: "postgres",
	ssl: false
});


// put this in to do all of the CRUD stuff; build REST inputs to interface w/db

app.use(bodyParser.json());

var items = [
	{ name: "Fish", price: 20},
	{ name: "Carrots", price: 2.50}
];

db.init(items);
// NOW, interact with database directly to get items to send to user

// GET
app.get("/api/items", function (req, res) {
	pool.query("SELECT * FROM shopping_list").then(function(result) {
		res.send(result.rows);
	}).catch(function(error) {
		console.log(error);
		res.status(500);
		res.send("NOT WORKING");
	});
});

app.get("/api/items/:id", function (req, res) {
	var id = req.params.id;
	res.send(db.read(id));
});


// POST
app.post("/api/items", function(req, res) {
	// get body of the request
	var item = req.body;
	var sql = "INSERT INTO shopping_list(name, price) " + "VALUES ($1::text, $2::real)";
	var values = [item.name, item.price];
	pool.query(sql, values).then(function() {
		res.status(201); // 201 created
		res.send("INSERTED");
	});
});

// PUT
// app.put("/api/items/:id", function(req, res) {
// 	var id = req.params.id;
// 	var item = req.body;
// 	db.update(id, item);
// 	res.send("WORKED");
// });

// DELETE
app.delete("/api/items/:id", function(req, res) {
	var id= req.params.id;
	var sql = "DELETE FROM shopping_list WHERE id=$1::int";
	var values = [id];

	pool.query(sql, values).then(function() {
		console.log("Deleted");
		res.send("DELETED");
	});
});


var server = app.listen(5000, function () {
	var port = server.address().port;
	console.log("App's server listening at http://localhost:%s", port);
});