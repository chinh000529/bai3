// var db = require('../db');

// module.exports.index = function(req, res){
//     var page = parseInt(req.query.page) || 1;
//     var perPage = 12;

//     var begin = (page-1)*perPage;
//     var end = page*perPage;

//     var drop = (page-1)*perPage;

//     res.render('products/index', {
//         //products: db.get('products').value().slice(begin, end)
//         products: db.get('products').drop(drop).take(perPage).value()
//     });
// };

var Product = require('../models/product.model');

module.exports.index = async function( req, res){
    
    var products = await Product.find();
    res.render('products/index', {
        products: products
    });   
};