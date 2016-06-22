var express = require("express")
var bodyParser = require("body-parser")
var cors = require("cors")
var app = express()

var alerts = []
var idCount = 1

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

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

app.get("/api/trends/user/:id", (req, res) => {
    res.send(alerts.map((alert) => {
        return {
            alert: alert,
            delta: Math.floor(Math.random() * 10000 - 5000)
        }
    }))
})


app.listen(8000, function () {
    /* eslint-disable */
    console.log("Example app listening on port 8000!")
    /* eslint-enable */
})
