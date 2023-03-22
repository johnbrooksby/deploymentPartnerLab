require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {PORT} = process.env

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/css', (req, res) => {
    res.sendFile(__dirname + "/public/styles.css")
})

app.get('/js', (req, res) => {
    res.sendFile(__dirname + "/public/main.js")
})

app.listen(PORT, () => {
    console.log(`app listening on ${PORT}`)
});