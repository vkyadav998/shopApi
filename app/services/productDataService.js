let productDBServices = require('./productDBServices')
let productDataServices = {
	
	getProductList : function () {
			let promise = productDBServices.getAllProduct();
			promise.then(function(data) {
				return data;
			});
			return promise;
	},
	
	addProduct : function (query) {
			let promise = productDBServices.addProduct(query);
			promise.then(function(data) {
				return data;
			});
			return promise;
	}
}


module.exports = productDataServices;