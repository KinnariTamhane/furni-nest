const { Timestamp } = require('mongodb');
const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    product_id: {
        type: String,  
        required: true  
      },
      name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      category: {
        type: String,
        required: true
      },
    stock : {
        type : Number,
        required : true
    },
    image:{
        type :String,
        required : true
    },
    price : {
        type : String,
        required : true
    },
    rating : {
        type : Number,
    },
},{
    Timestamp : true
})


module.exports = mongoose.model('products',productSchema);