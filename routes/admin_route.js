const express=require('express');

const router=express.Router();

const adminController=require('../controller/admin');
const Authentication=require('../middleware/auth');


router.get('/user/signup',adminController.getsignup);

router.post('/user/signup',adminController.postSignup);

router.post('/user/login',adminController.postLogin)

router.post('/user/chat/:groupId',Authentication.authentication,adminController.postChat);

router.get('/user/chat/:groupId',Authentication.authentication,adminController.getChat);

router.get('/user/newmessages/:groupId',Authentication.authentication,adminController.getNewMessages);

router.post('/user/creategroup',Authentication.authentication,adminController.postGroup);

router.get('/user/getgroup',Authentication.authentication,adminController.getGroup);







module.exports=router;