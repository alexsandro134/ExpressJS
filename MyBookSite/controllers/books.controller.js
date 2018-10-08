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
    db.get('books').push({
        id: shortid.generate(),
        name: req.body.name,
        author: req.body.author,
        type: req.body.type,
        link: req.body.link
    }).write();
    res.redirect('/books');
};