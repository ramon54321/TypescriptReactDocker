const express = require("express")
const app = express()

const redis = require("redis")
const client = redis.createClient("redis://redis")

const ejs = require("ejs")

const React = require("react")
const { renderToString } = require("react-dom/server")
import { Hello } from "./components/Hello"

import { renderReactPage } from "./server/utils"

client.on("error", function (err) {
    console.log("Error " + err)
})

const people = ['geddy', 'neil', 'alex']
client.set("mykey", JSON.stringify({people: people}))

app.use("/static", express.static(__dirname + "/../dist"))

app.get('/redis', (req, res) => {
    client.get("mykey", (err, result) => {
        const html = ejs.render('<h2><%= people.join(" - "); %></h2>', JSON.parse(result))
        console.log("Serving...")
        res.send(html)
    })
})

app.get('/', (req, res) => {
    const options = {
        app: Hello,
        title: "Demo",
        script: "hello"
    }
    renderReactPage(options).then(result => {
        res.send(result)
    })
})

app.listen(80, () => console.log('Listening on port 80!'))
