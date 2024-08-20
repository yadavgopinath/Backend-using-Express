const express = require('express');
const bodyparser = require('body-parser');

const app=express();

app.use(bodyparser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next)=>{
        res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add Product</button></form>');
    });
app.use('/product',(req,res,next)=>{
    console.log('Product='+req.body.title);
    console.log('size='+req.body.size);
    res.redirect('/');
});
app.use('/',(req,res,next)=>{
    console.log("in to middlewaree");
    res.send('<h1>Hello from express</h1>');
});

app.listen(3000);

