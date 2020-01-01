var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: String,
    auther:String,
    availability:Boolean
}, {collection:'productList', timestamps:true });

mongoose.model('PRODUCT_MODEL', productSchema);