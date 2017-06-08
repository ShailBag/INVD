app.controller("barcodeController",function($location){
	ctrl = this;

	var entryId = $location.search().stock;
	console.log(entryId);
	this.stockEntry = stockEntries[entryId -1];

	this.barcodeList = [];

	var barcodePrefix = 'P';
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();
	if(dd<10) {
	    dd='0'+dd
	} 
	if(mm<10) {
	    mm='0'+mm
	} 
	barcodePrefix = mm+''+dd+''+yyyy + '' + this.stockEntry.productId + ''+ this.stockEntry.stockEntryId;
	console.log(today);

	for(var i= 1; i <= this.stockEntry.quantity; i++)
	{

		var barcode = barcodePrefix + '' + i;
		this.barcodeList.push(barcode);

	}

	console.log('here');
	

});