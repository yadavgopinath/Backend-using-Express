const path=require('path');
const express= require('express');
const router =express.Router()
const shopcontroller=require('../controllers/product');
router.get('/',shopcontroller.listproduct);

module.exports =router;