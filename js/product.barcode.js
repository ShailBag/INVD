app.controller("barcodeController",function($location){
	ctrl = this;

	var entryId = $location.search().stock;
	console.log(entryId);
	this.stockList = stockEntries[entryId -1];

});