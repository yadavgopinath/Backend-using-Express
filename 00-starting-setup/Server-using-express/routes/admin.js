const path= require('path');
const express=require('express');

const router = express.Router();


const productcontroller=require('../controllers/product')
router.get('/add-product',productcontroller.getaddproduct);

router.post('/add-product',productcontroller.postaddproducts);
module.exports =router;