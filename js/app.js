var app = angular.module("sms",["ngRoute"]);

app.config(['$locationProvider',function($locationProvider){
	//$locationProvider.hashPrefix('');
}]);

app.config(function($routeProvider){
	$routeProvider
	.when("/Product",{
		templateUrl: "templates/masters/productmaster.html",
		controller : "productController as productCtrl"
	})
	.when("/StockEntry",{
		templateUrl: "templates/transactions/stockentry.html",
		controller: "stockEntryController as stockCtrl"
	})
	.when("/StockView",{
		templateUrl: "templates/transactions/stockview.html",
		controller: "stockViewController as stockCtrl"
	})
	.when("/StockIssue",{
		templateUrl: "templates/transactions/stockissue.html",
		controller: "stockIssueController as stockCtrl"
	})
	.when("/StockEntries",{
		templateUrl: "templates/transactions/stockentries.html",
		controller: "stockBarcodeController as stockCtrl"	
	})
	.when("/Barcode",{
		templateUrl: "templates/transactions/productbarcode.html",
		controller: "barcodeController as stockCtrl"	
	})
	.otherwise({ redirectTo: '/' });
});

var productItem1 = {
		productId: 1,
		productName: "Powder",
		productDetails: "Some powder",
		productUnit: 2
		};
var productItem2 = {
		productId: 2,
		productName: "Bottle",
		productDetails: "number of bottles",
		productUnit: 1
		};

var productList = [];
productList.push(productItem1);
productList.push(productItem2);
var unitList = [{ "value": 1, "Name": "Number"},
		{ "value": 2, "Name" : "Weight (grams)"},
		{ "value": 3, "Name" : "Milliliter (ml)"}
	];

var productStock = [{"stockId":1,"productId":1,"productName":"Powder","quantity":"100","unit":"Weight (grams)"},{"stockId":3,"productId":2,"productName":"Bottle","quantity":35,"unit":"Number"}];
var stockEntries = [{"stockEntryId":1,"productId":1,"productName":"Powder","quantity":"100","unit":"Weight (grams)"},{"stockEntryId":2,"productId":2,"productName":"Bottle","quantity":"15","unit":"Number"},{"stockEntryId":3,"productId":2,"productName":"Bottle","quantity":"20","unit":"Number"}];

var barcodeSeries = [];