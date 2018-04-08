let model = require('./model');
let Blogs = model.getBlogs();
let Comments = model.getComments();
let express = require('express');
let app = express();
var http = require('http');

app.get('/blogList', function (req, res) {
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

app.get('/blogDetail', function (req, res) {
    // 获取数据
    const id = req.query.blog_id;
    // Blogs.findOne({_id: id}, function(err, doc) {
    //     if(err) {
    //         return console.log(err)
    //     }
    //     res.send(doc);
    // });

    let promise = Blogs.findOne({_id: id}).exec();
    promise.then(detail => {
        const comments = Comments.find({}).exec();
        comments.then(comments => {
           res.send({detail, comments})
        });
    }).catch(err => {
        console.log(err)
    });
});

app.listen(9093, function () {
    console.log('node is running on port 9093')
});

