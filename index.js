var express = require("express");

var app = express();

// set up handlebars view engine
var hbs = require('hbs');
app.set("view engine", "html");
app.engine('html', hbs.__express);

//set port
app.set("port", process.env.PORT || 3000);

//set default layout
app.set('view options', { layout: 'layouts/main' });

//static files directory
app.use(express.static(__dirname + "/public"));

//routes
app.get('/', function (req, res) {
	res.render("home");
});
app.get('/about', function (req, res) {
	res.render("about");
});

//custom 404 page
app.use(function (req, res) {
	res.status(404);
	res.render("404", { layout: null });
});

//custom 500 page
app.use(function (err, req, res, next) {
	console.error(err.stack);
	res.status(500);
	res.render("500", { layout: null });
});

app.listen(app.get("port"), function () {
	console.log("Express started on http://localhost:"
		+ app.get("port") + " press Ctrl-C to terminate.");
});