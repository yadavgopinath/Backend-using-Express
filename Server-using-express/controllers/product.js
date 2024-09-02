const path= require('path');
const rootdir=require('../util/path');
exports.getaddproduct=(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','add-product.html'));
};
exports.postaddproducts=(req,res,next)=>{

    console.log(req.body);
    
res.redirect('/');
};

exports.listproduct=(req,res,next)=>{
        res.sendFile(path.join(rootdir,'views','shop.html'));
     }