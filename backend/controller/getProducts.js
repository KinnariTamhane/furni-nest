const asyncHandler = require ('express-async-handler');

const Products = require('../model/productModel');

const getProducts = asyncHandler(async(req,res)=>{
    const data = await Products.find();
    if(!data){
        res.status(400);
        throw new Error('Error Detected');
    }
    res.status(200).json(data)
})

const addProducts = asyncHandler(async(req,res)=>{
    
   const {product_id, name ,category,description,stock,image,price,rating} = req.body;

   const existingProduct = await Products.findOne({ name: name });
    if (existingProduct) {
      console.log('Product already exists:', existingProduct);
      return res.json({ message: 'Product already exists'})
    }


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