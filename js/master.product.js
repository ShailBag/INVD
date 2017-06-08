app.controller("productController",function(){
	var ctrl= this;
	
	this.unitList = unitList
	this.hideMessage = true;
	
	this.SaveItem = function(){
		var productItem = {
		productId: 0,
		productName: ctrl.product.productName,
		productDetails: ctrl.product.productDetails,
		productUnit: ctrl.product.productUnit
		};
		productItem.productId = productList.length + 1;
		productList.push(productItem);
		
		var itemName = productItem.productName;
		
		ctrl.hideMessage = false;
		ctrl.message = itemName + " added successfully."
		ctrl.product = null;
	};


});