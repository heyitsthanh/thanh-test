var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('hello again');
});

app.get('/secret', function(req, res) {
    res.send('i wanted to show you how web storm handles merging');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});