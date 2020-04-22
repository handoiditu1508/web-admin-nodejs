module.exports = (app) => {
	//custom 404 page
	app.use(function (req, res) {
		res.status(404);
		res.render("./status/404", { layout: null });
	});

	//custom 500 page
	app.use(function (err, req, res, next) {
		console.error(err.stack);
		res.status(500);
		res.render("./status/500", { layout: null });
	});
};