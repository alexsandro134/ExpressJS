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
        res.render('/auth/login', {
            errors: [
                'User does not exist.'
            ],
            value: req.body
        });
        return;
    }

    var password = req.body.password;
    if (user.password !== password) {
        res.render('/auth/login', {
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