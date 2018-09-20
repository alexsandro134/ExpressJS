var express = require('express');
var app = express();

var port = 4000;

app.get('/', function (request, response) {
    response.send('Hello World');
});

app.get('/user', function (request, response) {
    response.send('I get user');
});

app.listen(port, function () {
    console.log('Server is listening from port ' + port)
});