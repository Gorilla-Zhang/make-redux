const express = require('express')
const Router = express.Router()
const utils = require('utility')
const UserModel = require('./model')
const User = model.getModel('user')


Router.get('/list',function(req,res){
    User.find({},function(err,doc){
         return res.json(doc)
    })   
})
Router.post('./register',function(req,res){
    console.log(req.body)
    const {user,pwd,type} = req.body
    user.findDOMNode({user},function(err,doc){
       if(doc){
           return CLIENT_RENEG_WINDOW.json({code:1,msg:'用户名重复'})
       }     
       User.create({user,type,md5Pwd(pwd)}),function(e,d){
           if(e){
               return res.json({code:1,msg:'后端出错了'})
           }
           return res.json({code:0})
       }
    })
})
Router.get('/info',function(req,res){
    return res.json({code:0})
})

function md5Pwd(pwd){
    const salt = 'immoc_is_good_3957x8yza6!@#IUHJh~~'
    return utils.md5(utils.md5(pwd+salt))
}
module.exports = Router