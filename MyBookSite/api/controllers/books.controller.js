// module.exports = {
//     object
// };

var db = require('../../db');
var shortid = require('shortid');

module.exports.index = function (req, res) {
    var page = parseInt(req.query.page || 1);
    var perPage = 8;

    var start = (page - 1) * perPage;
    var end = page * perPage;

    res.json({
        books: db.get('books').value().slice(start, end)
    });
};

module.exports.search = function (req, res) {
    var search = req.query.q;

    res.json({
        books: db.get('books').filter({
            name: search
        }).value()
    });
}

module.exports.filter = function (req, res) {
    var filter = req.query.value;

    res.json({
        books: db.get('books').filter({
            type: filter
        }).value()
    });
}