let express = require('express');
const mongoose = require('mongoose');
let model = require('./model');
let Blogs = model.getBlogs();
let Comments = model.getComments();

const Router = express.Router();

Router.get('/blogList', function (req, res) {
    var page = parseInt(req.query.page) || 1;
    let totalCount;
    Blogs.count({}, function (err, count) {
        if (err) {
            return console.log(err);
        }
        totalCount = count;
    });
    Blogs.find({}).skip((page - 1) * 10).limit(10).exec(function (err, data) {
        if (err) {
            return console.log(err);
        }
        res.send({data, totalCount, page});
    })
});

Router.get('/blogDetail', function (req, res) {
    // 获取数据
    const id = req.query.blog_id;
    console.log('aaa:' + id);
    let promise = Blogs.findOne({blog_id: id}).exec();
    promise.then(detail => {
        const comments = Comments.find({}).exec();
        comments.then(comments => {
            res.send({detail, comments})
        });
    }).catch(err => {
        console.log(err)
    });
});

Router.post('/addBlog', function(req, res) {
    const body = req.body;
    const blog_id =  new mongoose.Types.ObjectId;
    console.log(blog_id);
    Blogs.create({
        blog_id:  blog_id,
        title: body.title,
        content: body.content,
        add_time: new Date(),
        update_time: new Date(),
        star: 0,
        like: 0,
        message: 0
    });
    res.send({code: 1, msg: '新建blog成功',blog_id});
});

module.exports = Router