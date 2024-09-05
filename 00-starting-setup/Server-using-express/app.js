const path =require('path');

const express = require('express');
const bodyparser = require('body-parser');

const app=express();

const adminRoutes=require('./routes/admin');
const shoproutes=require('./routes/shop');
const contactpg=require('./routes/contact')
app.use(express.static(path.join(__dirname,'public')));

const errorcontroller=require('./controllers/error');

app.use(bodyparser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use(shoproutes);
app.use(contactpg);

app.use(errorcontroller.errorpg);

app.listen(3000);