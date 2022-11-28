const express=require('express');
//const path=reqiure('path');
const fs=require('fs');

const bodyparser=require('body-parser');

const sequelize=require('./util/database');

const app=express();

app.use(bodyparser.json({extended:false}));

const cors=require('cors');
app.use(cors());

const User=require('./model/user');

const adminRoutes=require('./routes/admin_route');

app.use('/admin',adminRoutes);

sequelize
//.sync({force:true})
.sync()
.then()
.catch(err=>console.log(err));

app.listen(3000);