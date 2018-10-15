var express = require('express');
var multer = require('multer');

var db = require('../../db');
var controller = require('../controllers/books.controller');

var router = express.Router();
var upload = multer({
    dest: './public/uploads/'
});

router.get('/', controller.index);

router.get('/find', controller.search);

router.get('/filter', controller.filter);

module.exports = router;