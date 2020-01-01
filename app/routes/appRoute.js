var express = require('express');
var router = express.Router();

var productPageController = require('../controllers/productPageController');

/* Fetch Product List */
router.get('/getAppProducts', productPageController.getProductList);

router.post('/addProduct', productPageController.addProduct);

module.exports = router;
