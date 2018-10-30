require('dotenv').config();

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

var bookRoute = require('./routes/books.route');
var userRoute = require('./routes/users.route');
var apiBookRoute = require('./api/routes/books.route');

var port = 3000;

var app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static('public'));

app.use('/books', bookRoute);
app.use('/users', userRoute);
app.use('/api/books', apiBookRoute);

app.get('/', function (req, res) {
  res.send('abc');
})
app.listen(port, function () {
  console.log('App is running with port ' + port);
});