/**
 * Created by vk on 5/21/2017.
 */
var mongoose = require('mongoose');
require('../models/productSchema');

var  PRODUCT_MODEL = mongoose.model('PRODUCT_MODEL');
let proctDBService = {

  getAllProduct : function(req, res){
    return PRODUCT_MODEL.find({}, function (err, docs){
      if (err) return console.error(err);
      res.json({"success" : true, allItom : docs});
    });
  },

  addProduct : function(req, res){
    const product = new PRODUCT_MODEL(req.body);
    product.save(function(err, data) {
      if (err) return console.error(err);
      res.json(data);
    });
  }

}


module.exports = proctDBService;