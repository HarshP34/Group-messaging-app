const Sequelize=require('sequelize');

const sequelize = require('../util/database');

const GroupChat=sequelize.define('groupchat',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    isAdmin:Sequelize.BOOLEAN
})

module.exports=GroupChat;