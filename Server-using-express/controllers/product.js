const path= require('path');

const rootdir=require('../util/path');
const Product = require('../models/product');
const { query } = require('express');
exports.getaddproduct=(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','add-product.html'));
};
exports.postaddproducts=(req,res,next)=>{

    console.log(req.body);
    const product=new Product(req.body.title);
    product.save();
   
    
res.redirect('/');
};

exports.listproduct=(req,res,next)=>{
    Product.fetchAll(product=>{
        console.log(product);
        res.sendFile(path.join(rootdir,'views','shop.html'));
    });

    
     }

     exports.getproduct=(req,res,next)=>{
        const productid=req.params.productID;
        console.log(productid);
        res.redirect('/');
     }