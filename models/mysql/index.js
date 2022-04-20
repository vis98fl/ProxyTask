const Sequelize = require('sequelize');
const sequelize=require('../../db/mysql_db')
const  postModel=require('./Posts');
const Datatypes = require('sequelize/lib/data-types');

const db={}
db.Sequelize=Sequelize;
db.sequelize=sequelize;
db.posts=postModel(sequelize,Datatypes);

db.sequelize.sync({force:true}).then((result)=> {
    console.log("connected");
}).catch((err)=>{
    console.log(err);
})

module.exports=db;