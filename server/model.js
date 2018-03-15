const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/my-data';
mongoose.Promise = Promise;
mongoose.connect(DB_URL);

var db = mongoose.connection;
/**
 * 连接成功
 */
db.on('connected', function(){
    console.log('Mongoose connection open to' + DB_URL);
});
/**
 * 连接异常
 */
db.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});
/**
 * 连接断开
 */
db.on('disconnected', function() {
    console.log('Mongoose connection disconnected');
});
let Blog = mongoose.model('blog',mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true},
    time:Date
}));

// 新增数据
// Blog.create({
//     user:'bb',
//     age:12
// }, function(err, doc){
//     if (!err) {
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })

// 删除数据
// Blog.remove({}, function(err,doc){
//     console.log(doc)
// })

// 删除集合
// db.collection("blogs").drop()

// 更新数据
// Blog.update({'user':'ming'},{'$set':{age:25}},function(err,doc){
// 	console.log(doc)
// })

module.exports = {
    getModel: function() {
        return Blog;
    }
};