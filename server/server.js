let model = require('./model');
let Blog = model.getModel();
let express = require('express');
let app = express();
var http = require('http');

app.get('/', function(req, res) {
    res.send('hello reacts')
})

app.get('/data', function(req,res){
    // 获取数据
    // Blog.find({}, function(err, doc) {
    //     res.json(doc)
    // })

    // Blog.find({user:'hua'}, function(err, doc) {
    //     res.json(doc)
    // })

    // Blog.findOne({user: 'hua'}, function(err, doc) {
    //     res.json(doc)
    // })

    var blog = new Blog({
        user: 'aa',
        age: 11
    }).save();
    
    res.end();
})

app.listen(9093, function(){
    console.log('node is running on port 9093')
})

