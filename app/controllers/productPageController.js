let productDataService = require('../services/productDataService');

exports.getProductList = (req, res, next) => {
	return productDataService.getProductList().then(data => {
		res.send(data);
	}).catch(err=>{
		console.error("error in controller ",err)
	});
}

exports.addProduct = (req, res) => {
	return productDataService.addProduct(req.body).then (data => {
		res.send(data);
	}).catch(err=>{
		console.error("error in controller ",err)
	});
}