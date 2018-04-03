let model = require('./model');
let BlogList = model.getBlogList();
let express = require('express');
let app = express();
var http = require('http');

app.get('/blogList', function(req, res) {
    var page = parseInt(req.query.page) || 1;
    let totalCount;
    BlogList.count({}, function(err, count) {
        if(err) {
            return console.log(err);
        }
        totalCount = count;
    });
    BlogList.find({}).skip((page-1)*10).limit(10).exec(function(err, data) {
        if(err) {
            return console.log(err);
        }
        res.send({data, totalCount, page});
    })
});

app.get('/data', function(req,res){
    // 获取数据
    BlogList.find({}, function(err, doc) {
        res.json(doc)
    });
    res.end();
});

app.listen(9093, function(){
    console.log('node is running on port 9093')
});

