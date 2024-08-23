const path=require('path');
const express= require('express');
const router =express.Router()
const rootdir=require('../util/path');
router.get('/contactus',(req,res,next)=>{
   res.sendFile(path.join(rootdir,'views','contact.html'));
});

router.post('/success',(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','form-success.html'));
 });
 
module.exports =router;