var express = require('express');
var app = express();

var port = 4000;

app.set('view engine', 'pug');
app.set('views', './views');

var users = [{
        id: 1,
        name: 'Alex'
    },
    {
        id: 2,
        name: 'Tai'
    },
];

app.get('/', function (req, res) {
    res.render('index.pug', {
        name: 'AAA'
    });
});

app.get('/users', function (req, res) {
    res.render('users/index.pug', {
        users: users
    });
});

app.get('/users/search', function (req, res) {
    var q = req.query.q;
    var matchedUsers = users.filter(function(user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })

    res.render('users/index.pug', {
        searchText: q,
        users: matchedUsers
    });
});

app.listen(port, function () {
    console.log('Server is listening from port ' + port)
});