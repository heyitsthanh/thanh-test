var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('hello again');
});

app.get('/thanh', function (req, res) {
    res.send('hello again thanh');
});

app.get('/thanh2', function (req, res) {
    res.send('hello again thanh number two cuz i got it');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});