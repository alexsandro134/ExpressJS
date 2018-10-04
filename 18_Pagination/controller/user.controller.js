var db = require('../db');

module.exports.getUsers = function (req, res) {
    res.render('show.pug', {
        users: db.get('data').value()
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