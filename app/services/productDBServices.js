/**
 * Created by vk on 5/21/2017.
 */
var mongoose = require('mongoose');
require('../models/productSchema');

var  PRODUCT_MODEL = mongoose.model('PRODUCT_MODEL');
let proctDBService = {

  getAllProduct : function(){
    return PRODUCT_MODEL.find({}).then(docs => {
      return {"success" : true, allItom : docs}
    }).catch(err=>{
      console.error(err);
    });
  },

  addProduct : function(data){
    const product = new PRODUCT_MODEL(data);
    return product.save().then(res => {
      return res;
    }).catch(err=>{
      console.error(err);
    })
  }

}


module.exports = proctDBService;