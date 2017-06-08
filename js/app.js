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

var productStock = [];
var stockEntries = [];

var barcodeSeries = [];