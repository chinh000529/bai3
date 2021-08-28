var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    age: { type: Number, min: 10, max: 65 },
    email: String,
    password: String,
    avatar: String
});

var User =  mongoose.model('User', userSchema, 'users');

module.exports = User;
