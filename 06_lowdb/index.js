var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json')

db = low(adapter);

// Set some defaults (required if your JSON file is empty)
db.defaults({ users: [] })
  .write()

var port = 4000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencodeds

app.get('/', function (req, res) {
    res.render('index.pug', {
        name: 'AAA'
    });
});

app.get('/users', function (req, res) {
    res.render('users/index.pug', {
        users: db.get('users').value()
    });
});

app.get('/users/search', function (req, res) {
    var q = req.query.q;
    var matchedUsers = db.get('users').value().filter(function (user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })

    res.render('users/index.pug', {
        searchText: q,
        users: matchedUsers
    });
});

app.get('/users/create', function (req, res) {
    res.render('users/create.pug');
});

app.post('/users/create', function (req, res) {
    db.get('users').push(req.body).write();
    res.redirect('/users');
});

app.listen(port, function () {
    console.log('Server is listening from port ' + port)
});