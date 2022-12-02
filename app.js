const express=require('express');
const path=require('path');
const fs=require('fs');

const bodyparser=require('body-parser');

const sequelize=require('./util/database');

const app=express();

app.use(bodyparser.json({extended:false}));

const cors=require('cors');
app.use(cors());

const User=require('./model/user');
const Chat=require('./model/chat');
const Group=require('./model/group');
const GroupChat=require('./model/groupchat');

User.hasMany(Chat);
Chat.belongsTo(User);

Group.belongsToMany(User,{through:GroupChat});
User.belongsToMany(Group,{through:GroupChat});

Group.hasMany(Chat);
Chat.belongsTo(Group);

const adminRoutes=require('./routes/admin_route');
const detailRoutes=require('./routes/detail_route')

app.use('/admin',adminRoutes);
app.use('/detail',detailRoutes);

sequelize
//.sync({force:true})
.sync()
.then()
.catch(err=>console.log(err));

app.listen(3000);