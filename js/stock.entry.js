app.controller("stockEntryController",function(){
	ctrl = this;
	this.productList = productList;
	this.UnitOfMeasure = "Unit";
	this.hideMessage = true;
	this.stokView = false;
	this.stockList = productStock;

	this.productSelection = function(){
		ctrl.hideMessage = true;
		var productIndex = ctrl.product - 1;
		var product = ctrl.productList[productIndex];
		ctrl.UnitOfMeasure = unitList[product.productUnit-1].Name;
		ctrl.unitId = product.productUnit;

		//show current stock
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
		this.stokView = false;
	};

	this.SaveItem = function(){
		//get selected product
		var productIndex = ctrl.product - 1;
		var product = ctrl.productList[productIndex];
		//set stock
		var stockItem = {
			stockId: stockEntries.length +1,
			productId : ctrl.product,
			productName : product.productName,
			quantity : ctrl.quantity,
			unit : ctrl.UnitOfMeasure,
		};
		var stockEntryItem = {
			stockEntryId: stockEntries.length +1,
			productId : ctrl.product,
			productName : product.productName,
			quantity : ctrl.quantity,
			unit : ctrl.UnitOfMeasure,
		};
		var itemName = product.productName;
		var itemUnit = ctrl.UnitOfMeasure;
		var itemQuantity = stockItem.quantity;

		stockEntries.push(stockEntryItem);

		if(ctrl.currentStock != undefined && ctrl.currentStock.productId == stockItem.productId)
		{
			stockItem.quantity = parseFloat(stockItem.quantity) + parseFloat(ctrl.currentStock.quantity);
			ctrl.stockList.splice(ctrl.currentStockIndex,1);
		}
		
		productStock.push(stockItem);
		ctrl.currentStock = stockItem;
		
		ctrl.hideMessage = false;
		ctrl.message = itemName + " " + itemQuantity + " "+ itemUnit + " added to stock."
		//clear fields
		this.UnitOfMeasure = "Unit";
		this.quantity = "";
		this.product = null;
	};
})