var express = require('express');
var app = express();
var db = require('./database');
var cors = require('cors')
app.use(cors())
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get('/api/employees/',db.getAllEmployees);

app.get('/api/json', function (req, res) {
    res.status(500).json({
        status: 'failed',
        message: 'REST API is NOT working'
    });
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log('App is running on http://localhost:' + port);
});