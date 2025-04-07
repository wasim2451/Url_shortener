const express=require('express');
const router=express.Router();
const{handleURLgenerate,handleshortURL,handleAnalytics}=require('../controllers/url.js');
router.post('/',handleURLgenerate);
router.get('/:shortId',handleshortURL)
router.get('/analytics/:shortId',handleAnalytics)
module.exports=router;