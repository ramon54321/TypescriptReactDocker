const express = require("express")
const app = express()

const redis = require("redis")
const client = redis.createClient("redis://redis")

const ejs = require("ejs")

client.on("error", function (err) {
    console.log("Error " + err)
})

const people = ['geddy', 'neil', 'alex']
client.set("mykey", JSON.stringify({people: people}))

app.get('/', (req, res) => {
    client.get("mykey", (err, result) => {
        const html = ejs.render('<h2><%= people.join(" - "); %></h2>', JSON.parse(result))
        console.log("Serving...")
        res.send(html)
    })
})

app.listen(80, () => console.log('Listening on port 80!'))