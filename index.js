var express = require("express");

var app = express();

var hbs = require('hbs');

config();

//routes
require("./controllers/home-controller")(app);

require("./controllers/status-controller")(app);

app.listen(app.get("port"), function () {
	console.log("Express started on http://localhost:"
		+ app.get("port") + " press Ctrl-C to terminate.");
});

function config(){
	// set up handlebars view engine
	app.set("view engine", "html");
	app.engine('html', hbs.__express);

	//set port 3000
	app.set("port", process.env.PORT || 3000);

	//set default layout
	app.set('view options', { layout: 'layouts/main' });

	//static files directory
	app.use(express.static(__dirname + "/public"));

	//register partial directory
	hbs.registerPartials(__dirname + '/views/partials');

	//init partials object
	app.use(function (req, res, next) {
		if (!res.locals.partials)
			res.locals.partials = {};
		next();
	});

	//data for sidebar partial
	app.use(function (req, res, next) {
		res.locals.partials.sidebarViewModel = getSidebarViewModel_Test();
		next();
	});
}

//get test data function
function getSidebarViewModel_Test(){
	return {
		menuData: [
			{
				icon: "fab fa-product-hunt",
				text: "Product Types",
				subMenu:{
					id: "product-type-nav",
					data: [
						{
							text: "Lists",
							url: ""
						},
						{
							text: "Create",
							url: ""
						}
					]
				}
			},
			{
				icon: "fa fa-list",
				text: "Categories",
				subMenu:{
					id: "category-nav",
					data: [
						{
							text: "Lists",
							url: ""
						},
						{
							text: "Create",
							url: ""
						}
					]
				}
			},
			{
				icon: "fab fa-product-hunt",
				text: "Products",
				subMenu:{
					id: "product-nav",
					data: [
						{
							text: "Lists",
							url: ""
						},
						{
							text: "Create",
							url: ""
						}
					]
				}
			},
			{
				icon: "fa fa-user-tag",
				text: "Sellers",
				subMenu:{
					id: "seller-nav",
					data: [
						{
							text: "Lists",
							url: ""
						},
						{
							text: "Create",
							url: ""
						}
					]
				}
			},
			{
				icon: "fa fa-user",
				text: "Customers",
				subMenu:{
					id: "customer-nav",
					data: [
						{
							text: "Lists",
							url: ""
						},
						{
							text: "Create",
							url: ""
						}
					]
				}
			},
			{
				icon: "fa fa-receipt",
				text: "Orders",
				subMenu:{
					id: "order-nav",
					data: [
						{
							text: "Lists",
							url: ""
						},
						{
							text: "Create",
							url: ""
						}
					]
				}
			},
			{
				icon: "fa fa-user-tie",
				text: "Admins",
				subMenu:{
					id: "",
					data: []
				}
			},
			{
				icon: "fa fa-address-card",
				text: "Contact",
				subMenu:{
					id: "",
					data: []
				}
			}
		]
	}
}