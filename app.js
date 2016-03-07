var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendFile('views/home.html', {root: __dirname });
});


app.get('/home2', function (req, res) {
    res.sendFile('views/home2.html', {root: __dirname });
});

app.get('/home3', function (req, res) {
    res.sendFile('views/home3.html', {root: __dirname });
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});