let productDataService = require('../services/productDataService');

exports.getProductList = (req, res, next) => {
	return productDataService.getProductList(req, res, next);
}

exports.addProduct = (req, res, next) => {
	return productDataService.addProduct(req, res, next);
}