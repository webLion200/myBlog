let express = require('express');
let bodyParser = require('body-parser');
const app = express();
const blogRouter = require('./server_blog');
const userRouter = require('./server_user');

app.use(bodyParser.json());
app.use('/', blogRouter);
app.use('/user', userRouter);


app.listen(9093, function () {
    console.log('node is running on port 9093')
});

