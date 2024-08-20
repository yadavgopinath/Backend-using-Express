const express = require('express');
const bodyparser = require('body-parser');

const app=express();

const adminRoutes=require('./routes/admin');
const shoproutes=require('./routes/shop');


app.use(bodyparser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use('/shop',shoproutes);

app.use((req,res,next)=>{
res.status(404).send('<h1>Page not Found</h1>');
});
app.listen(3000);

