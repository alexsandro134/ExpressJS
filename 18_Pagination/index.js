var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var db = require('./db');
var controller = require('./controller/user.controller');
var port = 2222;

app.set('views', './views');
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.send('Hello world');
});

app.get('/users', controller.getUsers);

app.get('/user/:id', function(req, res) {
    // params
    var id = req.params.id;

    var user = db.get('users').find({ id: id});

    res.render('detailUser.pug', {
        user: user
    });
});

app.listen(port, function () {
    console.log('Server is running with ' + port);
})