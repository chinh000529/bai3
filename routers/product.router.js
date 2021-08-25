var express = require('express');

var product = require('../controllers/product.controller');

var router = express.Router();

router.get('/', product.index);

module.exports = router;