var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');
var db = low(adapter);

var port = 3000;

db.defaults({
    books: []
  })
  .write();

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/books/add', function (req, res) {
  res.render('add');
});

app.get('/users/create', function (req, res) {
  res.render('users/create');
});

app.listen(port, function () {
  console.log('App is running with port ' + port);
});