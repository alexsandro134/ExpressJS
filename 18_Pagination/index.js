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

app.get('/users/:id', controller.getDetailUser);

app.listen(port, function () {
    console.log('Server is running with ' + port);
})