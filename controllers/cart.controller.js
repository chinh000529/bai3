var Session = require('../models/session.model');

module.exports.addToCart = async function(req, res){
    var productId = req.params.productId;
    var sessionId = req.signedCookies.sessionId;

    if(!sessionId){
        res.redirect('/products');
    }

    var product = await Session.find({ id: sessionId, cart: { $in: { productId: 0 } }});

    // if(!product) {
    //     await Session.findOneAndUpdate({id: sessionId }, { cart: {}})
    // }

    // var count = db
    //     .get('sessions')
    //     .find({ id: sessionId })
    //     .get('cart.'+ productId, 0)
    //     .value();
    // db.get('sessions')
    //     .find({ id: sessionId })
    //     .set('cart.'+productId, count+1)
    //     .write();

    res.redirect('/products');
}