module.exports.postCreate = function(req, res, next){
    var errors = [];
    if(!req.body.name){
        errors.push("Name is require!")
    };
    if(!req.body.age){
        errors.push("Age is require!")
    };
    if(errors.length){
        res.render('users/create', {
            errors: errors,
            values: req.body
        });
        return;
    };
    next();
};