
const express=require('express');
const router= express.Router();
const isLoggedIn=require('../middleware')
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');
//home page
router.get('/',(req,res)=>{
    res.redirect('/home');
})
router.get('/home',(req,res)=>{
   res.render('home')
})
router.get('/index.html',(req,res)=>{

    if(!req.user)
    { 
        req.flash('error','you need to be logged in first')
       return res.redirect('/users/login');
    }
     res.render('dashboard')
    // res.sendFile(path.join(__dirname+'/index.html'));
})
module.exports=router;