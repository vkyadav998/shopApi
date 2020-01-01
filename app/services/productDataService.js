let productDBServices = require('./productDBServices')
let productDataServices = {
	
	getProductList : function (req, res, next) {
			return productDBServices.getAllProduct(req, res, next);
				// promise.then(function(resp) {
				//  res.send(resp);
				// });
				// return promise;
	},
	
	addProduct : function (req, res, next) {
		 		return productDBServices.addProduct(req, res, next);
				//  promise.then(function(resp, next) {
				// 			res.send(resp);
				// 		});
				// return promise;
	}
}


module.exports = productDataServices;