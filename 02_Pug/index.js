var express = require('express');
var app = express();

var port = 4000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function (req, res) {
    res.render('index.pug', {
        name: 'AAA'
    });
});

app.get('/users', function (req, res) {
    res.render('users/index.pug', {
        users: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Tai'},
        ]
    });
});

app.listen(port, function () {
    console.log('Server is listening from port ' + port)
});