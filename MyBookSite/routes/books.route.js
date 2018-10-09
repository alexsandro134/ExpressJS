var express = require('express');
var multer = require('multer');

var db = require('../db');
var controller = require('../controllers/books.controller');

var router = express.Router();
var upload = multer({
    dest: './public/uploads/'
});

router.get('/', controller.index);

router.get('/add', controller.add);

router.get('/:bookId', controller.get);

router.post('/add', 
    upload.single('cover'), 
    controller.postAdd
);

module.exports = router;