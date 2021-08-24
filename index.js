var express = require('express');

var userRouter = require('./routers/user.router');

var app = express();

var port = 3000;

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('index');
});

app.use('/users', userRouter);

app.listen(port, function(){
    console.log("hello world !!!");
});