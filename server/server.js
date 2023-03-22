
const express = require('express')
const app = express()
const cors = require('cors')

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

app.listen(4000, () => {
    console.log(`app listening on port 4000`)
});