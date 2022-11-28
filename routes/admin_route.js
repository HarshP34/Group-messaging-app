const express=require('express');

const router=express.Router();

const adminController=require('../controller/admin');



router.get('/user/signup',adminController.getsignup);

router.post('/user/signup',adminController.postSignup);

router.post('/user/login',adminController.postLogin)
module.exports=router;