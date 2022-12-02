const User=require('../model/user');
const Chat=require('../model/chat');
const Group=require('../model/group');
const GroupChat=require('../model/groupchat');



exports.getGroupDetail=async(req,res,next)=>{
    try{
         const groupId=req.params.groupId;
        
        const details=await GroupChat.findAll({where:{groupId:groupId}});
        res.status(200).json({details});
    }catch(err){console.log(err)};
}

exports.removeMember=async(req,res,next)=>{
    const userId=req.params.userId;
    const {groupId}=req.body;
    const chats=await GroupChat.findAll({where:{userId:userId,groupId:groupId}});
    const chat=await GroupChat.findByPk(chats[0].id);
    chat.destroy();
    res.status(200).json({message:'deleted'});
}

exports.makeAdmin=async(req,res,next)=>{
    try{
   const userId=req.params.userId;
   const{groupId}=req.body
const chats=await GroupChat.findAll({where:{userId:userId,groupId:groupId}});
const chat=await GroupChat.findByPk(chats[0].id);
chat.update({isAdmin:true});

res.status(200).json({message:'Updated'});
    }catch(err){console.log(err)}
}

exports.otherUsers=async(req,res,next)=>{
    try{
     const groupId=req.params.groupId;
    const users=await Group.findAll({where:{id:groupId},include:['users']});
     res.status(200).json({users});

    }catch(err){console.log(err)}
}


exports.addUserToGroup=async(req,res,next)=>{
    try{
        const userId=req.params.userId;
        const{groupId}=req.body;
        await GroupChat.create({isAdmin:false,groupId:groupId,userId:userId});
        res.status(200).json({message:'User Added'});
    }catch(err){console.log(err)}
}