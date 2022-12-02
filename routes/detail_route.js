const express=require('express');

const router=express.Router();

const detailController=require('../controller/detail');
const Authentication=require('../middleware/auth');


router.get('/groupdetail/:groupId',Authentication.authentication,detailController.getGroupDetail);

router.post('/removemember/:userId',Authentication.authentication,detailController.removeMember);

router.post('/makeadmin/:userId',Authentication.authentication,detailController.makeAdmin);

router.get('/otherusers/:groupId',detailController.otherUsers);

router.post('/adduser/:userId',Authentication.authentication,detailController.addUserToGroup);

module.exports=router;