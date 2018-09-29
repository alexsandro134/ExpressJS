var md5 = require('md5');
var db = require('../db');

module.exports.login = function (req, res) {
    res.render('auth/login.pug');
};

module.exports.postLogin = function (req, res) {
    var email = req.body.email;

    var user = db.get('users').find({
        email: email
    }).value();

    if (!user) {
        res.render('/auth/login.pug', {
            errors: [
                'User does not exist.'
            ],
            value: req.body
        });
        return;
    }

    var password = req.body.password;
    var hashedPassword = md5(password);
    if (user.password !== hashedPassword) {
        res.render('/auth/login.pug', {
            errors: [
                'Wrong password'
            ],
            value: req.body
        });
        return;
    }

    res.cookie('userId', user.id);
    res.redirect('/users');
};