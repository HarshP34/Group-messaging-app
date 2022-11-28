const User=require('../model/user');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const Chat=require('../model/chat');


exports.getsignup=(req,res,next)=>{
    User.findAll()
    .then(users=>{
        res.json(users);
    })
}


exports.postSignup=async (req,res,next)=>{
    try{
        const {name,email,phonenumber,password}=req.body;
       const user=await User.findAll({where:{email:email}})
       if(user.length>0)
       {
         res.status(400).json({message:'User already exists Please Login',success:false});
       }
       else{
        const saltrounds=10;
        bcrypt.hash(password,saltrounds,async(err,hash)=>{
            try{
               console.log(err);
               User.create({name:name,email:email,phonenumber:phonenumber,password:hash});
               res.status(200).json({message:'Successfully Signed Up',success:true});
            }catch(err){res.status(404).json({message:'Error Occured',success:false})}
        })
       }
        
    }catch(err){console.log(err)};
}

function generateAccessToken(id,name)
{
    return jwt.sign({userId:id,name:name},'4Defl1e5Ghdb8JUys6YZ2jxOrtAhajdJjHgU')
}

exports.postLogin=async(req,res,next)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findAll({where:{email:email}});
        if(user.length>0)
        {
           bcrypt.compare(password,user[0].password,(err,result)=>{
            if(err)
            throw new Error('Something Went Wrong');
            if(result===true)
            res.status(200).json({message:'User login Successful',success:true,token:generateAccessToken(user[0].id,user[0].name),user:user[0].name});
            else{
                res.status(401).json({message:'User is not Authorized',success:false})
            }
           })
        }
        else{
            res.status(400).json({message:'User not Found'})
        }
    }catch(err){console.log(err)}
}


exports.postChat=(req,res,next)=>{
    const {message}=req.body;
    req.user.createChat({message:message})
    .then(result=>{
        res.status(200).json(result);
    }).catch(err=>console.log(err));
}