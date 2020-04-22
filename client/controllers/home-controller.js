module.exports = (app) => {
	app.get('/', function (req, res) {
		res.render("./home/index");
	});
	app.get('/about', function (req, res) {
		res.render("./home/about");
	});
};