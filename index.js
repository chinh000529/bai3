require('dotenv').config();

var express = require('express');
var cookieParser = require('cookie-parser');

var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

var userRouter = require('./routers/user.router');
var authRouter = require('./routers/auth.router');
var productRouter = require('./routers/product.router');
var cartRouter = require('./routers/cart.router');

var authMiddleware = require('./middleware/auth.middleware');
var sessionMiddleware = require('./middleware/session.middleware');

var port = 3000;

var app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSION_SECRET));

app.use(express.static('public'));

app.use(sessionMiddleware);

app.get('/', function(req, res){
    res.render('index');
});

app.use('/users', authMiddleware.requireAuth, userRouter);
app.use('/auth', authRouter);
app.use('/products', productRouter);
app.use('/cart', cartRouter);

app.listen(port, function(){
    console.log("hello world !!!");
});