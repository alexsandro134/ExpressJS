var db = require('../db');

module.exports.getUsers = function (req, res) {

    var page = parseInt(req.query.page) || 1;
    var perPage = 8;

    var start = (page - 1) * perPage;
    var end = page * perPage;

    var drop = (page - 1) * perPage;

    res.render('show.pug', {
        // users: db.get('data').value().slice(start, end)
        users: db.get('data').drop(drop).take(perPage).value()
    });
};

module.exports.getDetailUser = function (req, res) {
    // params
    var id = req.params.id;

    var user = db.get('data').find({
        id: id
    }).value();

    res.render('detailUser.pug', {
        user: user
    });
};