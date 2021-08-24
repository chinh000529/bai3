var express = require('express');

var userRouter = require('./routers/user.router');
var authRouter = require('./routers/auth.router');
var cookieParser = require('cookie-parser');

var authMiddleware = require('./middleware/auth.middleware');

var port = 3000;

var app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());

app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('index');
});

app.use('/users', authMiddleware.requireAuth, userRouter);
app.use('/auth', authRouter);

app.listen(port, function(){
    console.log("hello world !!!");
});