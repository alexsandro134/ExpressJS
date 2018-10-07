require('dotenv').config();

console.log(process.env.SESSION_SECRET);

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var userRoute = require('./routes/user.routes');
var authRoute = require('./routes/auth.routes')

var authMiddleware = require('./middlewares/auth.middlewares');

var port = 5000;

var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencodeds
app.use(cookieParser(process.env.SESSION_SECRET));

app.get('/', function (req, res) {
    res.render('index.pug', {
        name: 'AAA'
    });
});

app.use('/users', authMiddleware.requireAuth, userRoute);
app.use('/auth', authRoute);


app.listen(port, function () {
    console.log('Server is listening from port ' + port)
});