var express = require('express');
var router = express.Router();

var db = require('../db');
var controller = require('../controllers/books.controller');

router.get('/', controller.index);

router.get('/add', controller.add);

router.get('/:bookId', controller.get);

router.post('/add', controller.postAdd);

module.exports = router;