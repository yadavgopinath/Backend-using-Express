const express=require('express');
const router=express.Router();


router.get('/login',(req,res,next)=>{
    
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/" method="POST"><input id="username" type="text" name"username"><button type="submit">login</button></form>');
    
    
});

module.exports=router;