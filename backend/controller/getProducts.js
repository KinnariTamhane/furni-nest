const asyncHandler = require ('express-async-handler');

const Products = require('../model/productModel');

const getProducts = asyncHandler(async(req,res)=>{
    const data = await Products.find();
    console.log('data ->',data);
    if(!data){
        res.status(400);
        throw new Error('Error Detected');
    }
    res.status(200).json(data)
})

const addProducts = asyncHandler(async(req,res)=>{
   const {product_id, name ,category,description,stock,image,price,rating} = req.body;
   const createProduct = await Products.create({
    product_id,
    name ,
    category,
    description,
    stock,
    image,
    price,
    rating
   });
   if (!createProduct){
    res.status(400);
    throw new Error('All fields are required');
   }
   res.status(200).json({message : "Product added"})
})

module.exports = {getProducts,addProducts};