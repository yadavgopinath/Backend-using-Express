const path=require('path');
const express= require('express');
const router =express.Router()
const contactcontroller=require('../controllers/contactus');
 
router.get('/contactus',contactcontroller.getcontactus);

router.post('/success',contactcontroller.success);
 
module.exports =router;