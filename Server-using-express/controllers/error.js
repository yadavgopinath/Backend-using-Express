const path=require('path');
const rootdir=require('../util/path');

exports.errorpg=(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','404.html'));
    };