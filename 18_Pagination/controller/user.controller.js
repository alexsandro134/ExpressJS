var db = require('../db');

module.exports.getUsers = function (req, res) {
    res.render('show.pug', {
        users: db.get('data').value()
    });
};

// module.exports.getDetailUser = function (req, res) {
//     // params
//     var id = req.params.id;

//     var user = db.get('users').find({
//         id: id
//     });

//     res.render('detailUser.pug', {
//         user: user
//     });
// };