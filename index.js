require('dotenv').config();

var express = require('express');
var cookieParser = require('cookie-parser');

var userRouter = require('./routers/user.router');
var authRouter = require('./routers/auth.router');
var productRouter = require('./routers/product.router');

var authMiddleware = require('./middleware/auth.middleware');

var port = 3000;

var app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSION_SECRET));

app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('index');
});

app.use('/users', authMiddleware.requireAuth, userRouter);
app.use('/auth', authRouter);
app.use('/products', authMiddleware.requireAuth, productRouter);

app.listen(port, function(){
    console.log("hello world !!!");
});