var md5 = require('md5');

var User = require('../models/user.model');

module.exports.index = async function (req, res) {
    var users = await User.find();
    res.render('users/index', {
        users: users
    });
};

module.exports.search = async function (req, res) {
    var q = req.query.q;
    var users = await User.find();
    var filterUsers = users.filter(function (user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render('users/index', {
        users: filterUsers,
        values: req.query
    });
};

module.exports.create = function (rep, res) {
    res.render('users/create');
};

module.exports.get = async function (req, res) {
    var userId = req.params.userId;
    var user = await User.findById(userId).exec();
    res.render('users/view', {
        user: user
    });
};

module.exports.postCreate = async function (req, res) {
    req.body.password = md5(req.body.password);
    req.body.avatar = req.file.path.split('/').slice(1).join('/');
    await User.insertMany(req.body);
    res.redirect('/users');
};

