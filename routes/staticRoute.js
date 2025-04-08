const express=require ('express');
const URL = require('../models/url');
const router=express.Router();
router.get('/',async(req,res)=>{
    const urls= await URL.find({});
    res.render('Home',{
        urls:urls
    });
})
module.exports=router;