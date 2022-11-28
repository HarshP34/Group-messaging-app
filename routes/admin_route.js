const express=require('express');

const router=express.Router();

const adminController=require('../controller/admin');
const Authentication=require('../middleware/auth');


router.get('/user/signup',adminController.getsignup);

router.post('/user/signup',adminController.postSignup);

router.post('/user/login',adminController.postLogin)

router.post('/user/chat',Authentication.authentication,adminController.postChat);

router.get('/user/chat',Authentication.authentication,adminController.getChat);









module.exports=router;