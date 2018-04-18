let express = require('express');
let model = require('./model');
const mongoose = require('mongoose');
const utils = require('utility')
let User = model.getUser();
const Router = express.Router();

Router.post('/login', function(req, res) {
    let { userName, password } = req.body;
    User.findOne({userName}, function(err, doc) {
        if (err) {
            return console.log(err);
        }
        if(!doc) {
            return res.json({code: 1, msg: '用户名不存在'});
        }
    }).findOne({userName, password:md5Pwd(password)}, function(err, doc) {
        if (err) {
            return console.log(err);
        }
        if(!doc) {
            return res.send({code: 1, msg: '登录名或密码不正确'});
        }
        res.cookie('code', 0);
        return res.json({code: 0, msg: '登录成功'});
    });
});

Router.post('/register', function(req, res) {
    const user_id = new mongoose.Types.ObjectId;
    let {userName, password, email, phone} = req.body;
    User.create({user_id:user_id,userName, password:md5Pwd(password), email, phone}, function(err, doc) {
        if (!err) {
            console.log(doc)
        }else{
            console.log(err)
        }
    });
    res.send({user: userName});
});

Router.post('/check_username', function(req, res) {
    let {userName} = req.body;
    User.findOne({userName}, function(err, doc) {
        if(doc) {
            return res.send({code:1,msg:'用户名重复'})
        }
        res.send({code: 0, msg:'注册成功'});
    })
})

function md5Pwd(pwd){
    const salt = '3957x8yza6!@#IUHJh~~'
    return utils.md5(utils.md5(pwd+salt))
}

module.exports = Router;