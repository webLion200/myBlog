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

let blogListSchema = {
    title: String,
    content: String,
    add_time:Date,
    update_time: Date,
    star: Number,
    like: Number,
    message: Number
};

let BlogList = mongoose.model('blogList', blogListSchema);

// BlogList.create({
//     title: '标题22',
//     content: '阿斯达房贷发放答复阿斯达四方阿道夫地方阿斯蒂芬阿萨德方法非阿斯蒂芬地方地方非阿斯达房贷发放答复阿斯达四方阿道夫地方阿斯蒂芬阿萨德方法非阿斯蒂芬地方地方非阿斯达房贷发放答复阿斯达四方阿道夫地方阿斯蒂芬阿萨德方法非阿斯蒂芬地方地方非阿斯达房贷发放答复阿斯达四方阿道夫地方阿斯蒂芬阿萨德方法非阿斯蒂芬地方地方非阿斯达房贷发放答复阿斯达四方阿道夫地方阿斯蒂芬阿萨德方法非阿斯蒂芬地方地方非阿斯达房贷发放答复阿斯达四方阿道夫地方阿斯蒂芬阿萨德方法非阿斯蒂芬地方地方非',
//     add_time:new Date(),
//     update_time: new Date(),
//     star: 0,
//     like: 0,
//     message: 0
// });

// 新增数据
// Blog.create({
//     title:'标题25',
//     content:'这里是内容25这里是内容25这里是内容25这里是内容25这里是内容25这里是内容25这里是内容25这里是内容25这里是内容25这里是内容25这里是内容25这里是内容25这里是内容25这里是内容25这里是内容25这里是内容25这里是内容25这里是内容25这里是内容25这里是内容25这里是内容25这里是内容25这里是内容25这里是内容25这里是内容25这里是内容25这里是内容25这里是内容25这里是内容25这里是内容25这里是内容25这里是内容25这里是内容25这里是内容25这里是内容25这里是内容25这里是内容25这里是内容25这里是内容25这里是内容25',
//     add_time: new Date(),
//     tag: 1
// }, function(err, doc){
//     if (!err) {
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })

// 删除数据
// Blog.remove({"title": "标题1"}, function(err, docs) {
//     if(err) {
//         return console.log(err)
//     }
//    console.log(docs)
// });

// 删除集合
// db.collection("blogs").drop()

// 更新数据
// Blog.update({'user':'ming'},{'$set':{age:25}},function(err,doc){
// 	console.log(doc)
// })


module.exports = {
    getBlogList: function() {
        return BlogList;
    }
};