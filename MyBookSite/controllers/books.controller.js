// module.exports = {
//     object
// };

var db = require('../db');
var shortid = require('shortid');

module.exports.index = function (req, res) {
    res.render('books/index', {
        books: db.get('books').value()
    });
};

module.exports.add = function (req, res) {
    res.render('books/add');
};

module.exports.get = function (req, res) {
    var bookId = req.params.bookId;

    var book = db.get('books').find({
        id: bookId
    }).value();

    res.render('books/view', {
        book: book
    });
};

module.exports.postAdd = function (req, res) {
    req.body.id = shortid.generate();
    req.body.cover = "/" + req.file.path.split("\\").slice(1).join("/");

    db.get('books').push(req.body).write();
    res.redirect('/books');
};

module.exports.searchBook = function (req, res) {
    var search = req.query.q;
    var searchBook = db.get('books').filter({
        author: search
    }).value();

    res.render('books/index', {
        books: searchBook
    });
};