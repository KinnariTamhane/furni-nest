const express = require("express");

const router = express.Router();

const {getProducts,addProducts} = require('../controller/getProducts')

router.get('/products',getProducts)

router.post('/products',addProducts)

module.exports = router;