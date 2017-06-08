app.controller("stockIssueController",function(){
	ctrl = this;
	this.productList = productList;
	this.UnitOfMeasure = "Weight (grams)";
	this.hideMessage = true;
	this.stokView = false;
	this.stockList = productStock;

	this.productName = "Powder";
	this.quantity = 500;

	this.searchProduct = function(){

		//
		for(var i =0 ; i <= ctrl.stockList.length; i++)
		{
			var stock = ctrl.stockList[i];
			if(stock != undefined && stock.productId == ctrl.product)
			{
				ctrl.currentStockIndex = i;
				ctrl.currentStock = stock;
				this.stokView = true;
				return;
			}
		}
	}

});