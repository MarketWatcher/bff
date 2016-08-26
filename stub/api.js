var express = require("express")
var bodyParser = require("body-parser")
var app = express()

var alerts = []

var trends = [
    {
        alertId: 1,
        delta: 10
    },
    {
        alertId: 2,
        delta: 100
    },
    {
        alertId: 3,
        delta: 0
    },
    {
        alertId: 4,
        delta: 10
    },
    {
        alertId: 5,
        delta: 10
    }
]

var idCount = 1

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/api/alerts/owner_id/:id", function (req, res) {
    res.send(alerts)
})

app.get("/api/alerts/id/:alarmId", function (req, res) {
    res.send(alerts[req.params.alarmId - 1])
})

app.post("/api/alerts", function(req, res){
    req.body.id = idCount
    idCount++
    alerts.push(req.body)
    res.send(req.body)
})

app.get("/api/trends/alert-id/:id", (req, res) => {
    res.status(200).json(trends.filter(trend => trend.alertId == req.params.id)[0])
})

app.listen(9000, function () {
    /* eslint-disable */
    console.log("Example app listening on port 9000!")
    /* eslint-enable */
})
