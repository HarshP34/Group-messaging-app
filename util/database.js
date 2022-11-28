const Sequelize=require('sequelize');

const sequelize=new Sequelize('messaging-app', 'root','Harsh1005',{dialect:'mysql',host:'localhost'})

module.exports=sequelize;