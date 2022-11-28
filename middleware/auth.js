const User=require('../model/user');
const jwt=require('jsonwebtoken');


exports.authentication=async(req,res,next)=>{
    try{
      const token=req.header('Authentication');
      const user=jwt.verify(token,'4Defl1e5Ghdb8JUys6YZ2jxOrtAhajdJjHgU');
      User.findByPk(user.userId)
      .then(user=>{
  req.user=user;
  next();
      }).catch(err=>{throw new Error(err)});
    }catch(err){console.log(err)
   return  res.status(401).json({success:false})
    }
}

