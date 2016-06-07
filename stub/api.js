var express = require('express');
var bodyParser = require('body-parser');
var app = express();

let alerts = [];
let idCount = 1;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/alerts', function (req, res) {
  res.send(alerts);
});

app.get('/api/alerts/id/:alarmId', function (req, res) {
  let alarms = alerts.filter(a => a.id == req.params.alarmId);
  res.send(alarms[0]);
});

app.post('/api/alerts', function(req, res){
  req.body.id = idCount;
  idCount++;
  alerts.push(req.body);
  res.send();
});


app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});
