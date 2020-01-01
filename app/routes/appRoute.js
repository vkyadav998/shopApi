var express = require('express');
var router = express.Router();

var productPageController = require('../controllers/productPageController');

/* Fetch Product List */
router.post('/', productPageController.getProductList);

module.exports = router;
