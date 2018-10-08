var db = require('../db');

module.exports.getUsers = function (req, res) {

    var page = parseInt(req.query.page) || 1;
    var perPage = 8;
    // var currentPage;

    var start = (page - 1) * perPage;
    var end = page * perPage;
    var drop = (page - 1) * perPage;

    var totalUsers = db.get('data').size().value();
    var pageCount = Math.ceil(totalUsers / perPage);

    var userArray = [];
    var userList = [];

    while (totalUsers.length > 0) {
        userArray.push(totalUsers.splice(0, perPage));
    }

    // if (typeof req.query.page !== 'undefined') {
    //     currentPage = +req.query.page;
    // }

    userList = userArray[+page - 1];

    res.render('show.pug', {
        // users: db.get('data').value().slice(start, end)
        // users: db.get('data').drop(drop).take(perPage).value(),
        user: userList,
        perPage: perPage,
        totalUsers: totalUsers,
        pageCount: pageCount,
        currentPage: page
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