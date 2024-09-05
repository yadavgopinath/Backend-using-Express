const path=require('path');
const rootdir=require('../util/path');
exports.getcontactus=(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','contact.html'));
 }

 exports.success=(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','form-success.html'));
 }