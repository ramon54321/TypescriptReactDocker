const express = require("express")
const app = express()

app.get('/', (req, res) => {
    console.log("Serving...")
    res.send('Hello World Again 3!')
})

app.listen(80, () => console.log('Listening on port 80!'))