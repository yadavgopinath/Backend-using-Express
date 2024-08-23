const path =require('path');

const express = require('express');
const bodyparser = require('body-parser');

const app=express();

const adminRoutes=require('./routes/admin');
const shoproutes=require('./routes/shop');
const contactpg=require('./routes/contact')
app.use(express.static(path.join(__dirname,'public')));



app.use(bodyparser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use(shoproutes);
app.use(contactpg);

app.use((req,res,next)=>{
res.sendFile(path.join(__dirname,'views','404.html'));
});
app.listen(3000);

