var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var userRoute = require('./routes/user.routes');

var port = 5000;

var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencodeds
app.use(cookieParser());

app.get('/', function (req, res) {
    res.render('index.pug', {
        name: 'AAA'
    });
});

app.use('/users', userRoute);


app.listen(port, function () {
    console.log('Server is listening from port ' + port)
});